package com.honey.backend.load.assembly;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.assembly.AssemblyRepository;
import com.honey.backend.domain.assemblyandcommittee.AssemblyCommittee;
import com.honey.backend.domain.assemblyandcommittee.AssemblyCommitteeRepository;
import com.honey.backend.domain.committee.Committee;
import com.honey.backend.domain.committee.CommitteeRepository;
import com.honey.backend.domain.poly.Poly;
import com.honey.backend.domain.poly.PolyRepository;
import com.honey.backend.domain.region.electionregion.ElectionRegion;
import com.honey.backend.domain.region.electionregion.ElectionRegionRepository;
import jakarta.transaction.Transactional;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.configurationprocessor.json.JSONArray;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.DefaultUriBuilderFactory;

import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AssemblyLoadService {


    @Value(value = "${ASSEMBLY_INFO_URL}")
    private String infoUrl;
    @Value("${ASSEMBLY_INFO_KEY}")
    private String infoKey;

    @Value("${ASSEMBLY_IMG_URL}")
    private String imgUrl;
    @Value("${ASSEMBLY_IMG_KEY}")
    private String imgKey;


    private final AssemblyRepository assemblyRepository;
    private final PolyRepository polyRepository;
    private final ElectionRegionRepository electionRegionRepository;
    private final CommitteeRepository committeeRepository;

    private final AssemblyCommitteeRepository assemblyAndCommitteeRepository;

    private List<AssemblyInfoResponse> infoResponseList;


    @Transactional
    public void insert() {

        insertAssembly();
        insertAssemAndCmit();
    }

    @Transactional
    public void insertAssembly() {
        if (initFlag()) {
            System.out.println("============LOAD ASSEMBLY============");
            for (int i = 1; i < 3; i++) {
                infoResponseList = getAssemblyInfoList(i);
                for (AssemblyInfoResponse infoResponse : infoResponseList) {

                    String region = infoResponse.ORIG_NM().trim();
                    String imgUrl = "NO_IMG";

                    ElectionRegion electionRegion = electionRegionRepository.findByElectionRegionName(region).orElseThrow();

                    Poly poly = polyRepository.findByPolyName(infoResponse.POLY_NM()).orElseThrow();
                    Assembly assembly = Assembly.createAssembly(
                            imgUrl, poly, electionRegion, infoResponse.MONA_CD(), infoResponse.HG_NM(), infoResponse.HJ_NM(), infoResponse.ENG_NM(),
                            infoResponse.BTH_DATE(), infoResponse.ORIG_NM(),
                            infoResponse.REELE_GBN_NM(), infoResponse.UNITS(),
                            infoResponse.SEX_GBN_NM(), infoResponse.MEM_TITLE(), infoResponse.E_MAIL(), 0, 0
                    );
                    assemblyRepository.save(assembly);

                }
            }
            List<AssemblyImgResponse> imgResponseList = getAssemblyImgList();
            for (AssemblyImgResponse imgResponse : imgResponseList) {
                Assembly assembly = assemblyRepository.findByHgNameAndOrigName(imgResponse.empNm(), imgResponse.origNm()).orElseThrow();
                assembly.updateImage(imgResponse.jpgLink());
            }

            Poly UnknownPoly = polyRepository.findByPolyName("무소속").orElseThrow();
            ElectionRegion UnknownElectionRegion = electionRegionRepository.findByElectionRegionName("비례대표").orElseThrow();
            assemblyRepository.save(Assembly.createUnknownAssembly("UNKNOWN", UnknownPoly, UnknownElectionRegion));
            System.out.println("============LOAD ASSEMBLY COMPLETE============");
        }
    }


    @Transactional
    public void insertAssemAndCmit() {
        for (int i = 1; i < 3; i++) {
            infoResponseList = getAssemblyInfoList(i);

            for (AssemblyInfoResponse infoResponse : infoResponseList) {

                String cmitList = infoResponse.CMIT_NM();
                if (cmitList == null) continue;

                String[] split = cmitList.split(",");
                Assembly assembly = assemblyRepository.findByMonaCd(infoResponse.MONA_CD()).orElseThrow();
                for (String str : split) {

                    if (committeeRepository.existsByCmitName(str)) {
                        Committee committee = committeeRepository.findByCmitName(str).orElseThrow();

                        assemblyAndCommitteeRepository.save(AssemblyCommittee.createAssemAndCmit(assembly, committee));
                    }
                }
            }

        }
    }

    public List<AssemblyImgResponse> getAssemblyImgList() {

        DefaultUriBuilderFactory factory = new DefaultUriBuilderFactory();
        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.NONE);

        String uri = "?serviceKey=" + imgKey + "&numOfRows=" + 300 + "&pageNo=" + 1;


        String responseBody = WebClient.builder()
                .uriBuilderFactory(factory)
                .build()
                .get()
                .uri(imgUrl + uri)
                .retrieve()
                .bodyToMono(String.class).block();


        List<AssemblyImgResponse> responseList = new ArrayList<>();

        try {
            JAXBContext jaxbContext = JAXBContext.newInstance(Response.class);

            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();

            Response apiResponse = (Response) unmarshaller.unmarshal(new StringReader(responseBody));
            Items items = apiResponse.getBody().getItems();

            for (Item item : items.getItem()) {
                AssemblyImgResponse assemblyImgResponse = new AssemblyImgResponse(
                        item.getNum(), item.getEmpNm(), item.getHjNm(), item.getOrigNm(), item.getJpgLink()
                );
                responseList.add(assemblyImgResponse);
            }
        } catch (JAXBException e) {

            throw new RuntimeException();

        }
        return responseList;
    }

    public List<AssemblyInfoResponse> getAssemblyInfoList(int i) {
        String responseBody = WebClient.create(infoUrl)
                .get()
                .uri("?KEY=" + infoKey + "&Type=json" + "&pIndex=" + i + "&pSize=" + 150)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class).block();
        try {
            JSONObject jsonObject = new JSONObject(responseBody);
            JSONObject row = (JSONObject) ((JSONArray) jsonObject.get("nwvrqwxyaytdsfvhu")).get(1);
            JSONArray list = (JSONArray) row.get("row");

            ObjectMapper mapper = new ObjectMapper();

            List<AssemblyInfoResponse> responseList;
            responseList = mapper.readValue(list.toString(), new TypeReference<List<AssemblyInfoResponse>>() {
            });
            return responseList;


        } catch (JSONException e) {
            throw new RuntimeException(e);
        } catch (JsonMappingException e) {
            throw new RuntimeException(e);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

    }

    public boolean initFlag() {
        if (assemblyRepository.count() == 0)
            return true;
        else return false;
    }

}
