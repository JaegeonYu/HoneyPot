package com.honey.backend.election.candidate;

import com.honey.backend.election.region.TotalRegion;
import com.honey.backend.election.region.TotalRegionRepository;
import com.honey.backend.service.S3Upload;
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

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringReader;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
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
    private final S3Upload s3Upload;

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
                null,
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

    public void changeS3Url(){
        List<Candidate> all = candidateRepository.findAll();
        for(Candidate candidate : all){
            if(candidate.getCandidateImgUrl() == null)continue;
            String[] split = candidate.getCandidateImgUrl().split("/");
            System.out.println(candidate.getCandidateImgUrl());
            for(String s: split){
                System.out.println(s);
            }
            break;
        }
    }

//    @Transactional
//        public void imageDownload() throws IOException {
//        String OUTPUT_FILE_PATH = "C:\\can";
//
//        List<Candidate> candidates = candidateRepository.findAll();
//        for (Candidate candidate : candidates) {
////            String fileUrl = candidate.getCandidateImgUrl();
//            String fileUrl = "http://info.nec.go.kr/photo_20240410/Gsg1101/Hb100151444/gicho/100151444.JPG";
//            String imageName = null;
//            try {
//                InputStream in = new URL(fileUrl).openStream();
//                imageName = getImageName(fileUrl);
//                Path imagePath = Paths.get(OUTPUT_FILE_PATH + File.separator + imageName);
//
//                Files.copy(in, imagePath);
//                BufferedImage image = ImageIO.read(imagePath.toFile());
//                if (image == null) {
//                    // 이미지가 유효하지 않다고 판단되는 경우 처리합니다.
//
//                    System.out.println("다운로드된 이미지 파일이 유효하지 않습니다.");
//                    Files.deleteIfExists(imagePath); // 손상된 파일 삭제
//                    System.out.println("after file delete");
//
//
//                    imageName = changeJPEG(getImageName(fileUrl));
//                    imagePath = Paths.get(OUTPUT_FILE_PATH + File.separator + imageName);
//                    System.out.println(imagePath);
//                    in = new URL(changeJPEG(fileUrl)).openStream();
//                    Files.copy(in, imagePath);
//                } else {
//                    System.out.println("다운로드된 이미지 파일이 유효합니다.");
//                }
//            }catch (Exception e){
//                e.printStackTrace();
//            }
//            break;
////            candidate.updateImageUrl(s3Upload.convertImageUrl(imageName));
//
//        }
//    }

    private String changeJPEG(String imageName) {
        return imageName.replaceAll("JPG", "JPEG");
    }

    private String getImageName(String fileUrl) {
        String[] split = fileUrl.split("/");
        System.out.println(fileUrl);
        for(String s : split){
            System.out.println(s);
        }
        System.out.println(split[7]);
        return split[7];
    }


}
