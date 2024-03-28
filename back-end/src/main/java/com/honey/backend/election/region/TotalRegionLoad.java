package com.honey.backend.election.region;


import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.DefaultUriBuilderFactory;

import java.io.IOException;
import java.io.StringReader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TotalRegionLoad {

    @Value("${22_URL}")
    private String url;
    @Value("${22_KEY}")
    private String key;

    private final TotalRegionRepository totalRegionRepository;

    @Transactional
    public void insertRegion() throws IOException {

        Resource resource = new ClassPathResource("22region.csv"); //
        List<String> regionList = Files.readAllLines(resource.getFile().toPath(), StandardCharsets.UTF_8);
        float size = regionList.size();
        int a = 0;
        for (String region : regionList) {
            System.out.print("22-Region load : " + String.format("%.2f", a++ / (size / 100)) + "% " + "\r");
            String[] split = region.split(",");

            int length = split.length;
            String dong = "";
            split[5] = split[5].replace("\"", "");
            split[length - 1] = split[length - 1].replace("\"", "");
            for (int i = 5; i < length; i++) {
                dong = dong + split[i];
            }
            totalRegionRepository.save(TotalRegion.createTotalRegion(split[0],
                    Integer.parseInt(split[1]),
                    split[2],
                    Integer.parseInt(split[3]), split[4], dong));

        }
        System.out.println("22-Region load : COMPLETE");
    }


    public List<SigunguResponse> getSigunguCd() {
        DefaultUriBuilderFactory factory = new DefaultUriBuilderFactory();
        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.NONE);
        ExchangeStrategies exchangeStrategies = ExchangeStrategies.builder()
                .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(-1))
                .build();

        int limit = 100;
        List<SigunguResponse> responseList = new ArrayList<>();
        for (int i = 1; i <= 3; i++) {


            String uri = "?serviceKey=" + key + "&numOfRows=" + limit + "&pageNo=" + i + "&sgId=20240410";

            String responseBody = WebClient.builder()
                    .exchangeStrategies(exchangeStrategies)
                    .uriBuilderFactory(factory)
                    .build()
                    .get()
                    .uri(url + uri)
                    .retrieve()
                    .bodyToMono(String.class).block();

            try {
                JAXBContext jaxbContext = JAXBContext.newInstance(Response.class);
                Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
                Response apiResponse = (Response) unmarshaller.unmarshal(new StringReader(responseBody));

                Items items = apiResponse.getBody().getItems();

                for (Item item : items.getItem()) {
                    responseList.add(new SigunguResponse(item.getWiwName(), item.getWOrder(), item.getSdName()));

                }
            } catch (JAXBException e) {

                throw new RuntimeException();

            }
        }
        return responseList;
    }
}

