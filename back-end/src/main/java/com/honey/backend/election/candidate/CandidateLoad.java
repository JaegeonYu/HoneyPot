package com.honey.backend.election.candidate;

import com.honey.backend.election.region.TotalRegion;
import com.honey.backend.election.region.TotalRegionRepository;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.DefaultUriBuilderFactory;

import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CandidateLoad {

    private final CandidateRepository candidateRepository;
    private final TotalRegionRepository totalRegionRepository;
    @Value("${CAND_URL}")
    private String candUrl;
    @Value("${CAND_KEY}")
    private String candKey;

    @Transactional
    public void saveCandidate() {
        List<Candidate> candidateList = candidateList(getCandidateCd());

        candidateRepository.saveAll(candidateList);

    }

    private List<Candidate> candidateList(List<CandidateResponse> candidateResponseList) {
        List<Candidate> candidateList = new ArrayList<>();

        for (CandidateResponse candidateResponse : candidateResponseList) {
            candidateList.add(Candidate.createCandidate(
                    candidateResponse.candidateImgUrl(),
                    candidateResponse.sgDate(),
                    candidateResponse.sgTypeCode(),
                    candidateResponse.huboid(),
                    candidateResponse.sggName(),
                    candidateResponse.sdName(),
                    candidateResponse.wiwName(),
                    candidateResponse.giho(),
                    candidateResponse.jdName(),
                    candidateResponse.hgname(),
                    candidateResponse.hjName(),
                    candidateResponse.gender(),
                    candidateResponse.birthday(),
                    candidateResponse.age(),
                    candidateResponse.addr(),
                    candidateResponse.job(),
                    candidateResponse.edu(),
                    candidateResponse.career1(),
                    candidateResponse.career2(),
                    candidateResponse.status())
            );
        }
        return candidateList;
    }

    public List<CandidateResponse> getCandidateCd() {
        DefaultUriBuilderFactory factory = new DefaultUriBuilderFactory();
        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.NONE);
        ExchangeStrategies exchangeStrategies = ExchangeStrategies.builder()
                .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(-1))
                .build();

        int limit = 100;
        List<CandidateResponse> responseList = new ArrayList<>();
        for (int i = 1; i <= 7; i++) {


            String uri = "?serviceKey=" + candKey + "&numOfRows=" + limit + "&pageNo=" + i + "&sgId=20240410" + "&sgTypecode=2";

            String responseBody = WebClient.builder()
                    .exchangeStrategies(exchangeStrategies)
                    .uriBuilderFactory(factory)
                    .build()
                    .get()
                    .uri(candUrl + uri)
                    .retrieve()
                    .bodyToMono(String.class).block();
            System.out.println(candUrl + uri);
            try {
                JAXBContext jaxbContext = JAXBContext.newInstance(Response.class);
                Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
                Response apiResponse = (Response) unmarshaller.unmarshal(new StringReader(responseBody));

                Items items = apiResponse.getBody().getItems();

                for (Item item : items.getItem()) {
                    CandidateResponse candidateResponse = mapToCandidateResponse(item);
                    responseList.add(candidateResponse);
                }
            } catch (JAXBException e) {

                throw new RuntimeException();

            }
        }
        return responseList;
    }

    public CandidateResponse mapToCandidateResponse(Item item) {
        return new CandidateResponse(// id는 Item에 해당하는 정보가 없으므로 null로 설정
                getImgUrl(item),
                item.getSggName(),
                item.getSgTypecode(),
                item.getHuboid(),
                item.getSggName(),
                item.getSdName(),
                item.getWiwName(),
                item.getGiho(),
                item.getJdName(),
                item.getName(),
                item.getHanjaName(),
                item.getGender(),
                item.getBirthday(),
                item.getAge(),
                item.getAddr(),
                item.getJob(),
                item.getEdu(),
                item.getCareer1(),
                item.getCareer2(),
                item.getStatus()
        );
    }


    public String getImgUrl(Item item) {
        TotalRegion totalRegion = totalRegionRepository.findByElectionRegionAndSigunguAndSido(item.getSggName(), item.getWiwName(), item.getSdName()).orElseThrow(
        );

        String basicUrl = "http://info.nec.go.kr/photo_20240410";
        int sidoCd = totalRegion.getSidoCd();
        String sigunguCd = String.format("%02d", totalRegion.getSigunguCd());
        String gsg = "Gsg" + sidoCd + sigunguCd;
        String hb = "Hb" + item.getHuboid();
        String gicho = "gicho";
        String name = item.getHuboid() + ".JPG";

        return basicUrl + "/" + gsg + "/" + hb + "/" + gicho + "/" + name;
    }

}
