package com.honey.backend.load.hotissue;

import com.honey.backend.domain.hotissue.HotIssue;
import com.honey.backend.domain.hotissue.HotIssueRepository;
import jakarta.annotation.PostConstruct;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static org.springframework.http.MediaType.APPLICATION_JSON;

@Service
@RequiredArgsConstructor
@Transactional
public class HotIssueLoadService {
    private final HotIssueRepository hotIssueRepository;
    private final Logger logger = LoggerFactory.getLogger("hotIssueLogger");

    @Value("PYTHON_URL")
    private String PYTHON_URL;

    public String getCrolling(String url) throws IOException {
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.select(".con_area");
        StringBuffer htmlBody = new StringBuffer();
        for(Element e : elements) {

            htmlBody.append(e.text());
        }
        return htmlBody.toString();
    }

    @PostConstruct
    public void getIssue() throws IOException, JAXBException {
        if(hotIssueRepository.count() == 0){

            // xml file read
            InputStream inputStream = new ClassPathResource("hot.xml").getInputStream();


            JAXBContext jaxbContext = JAXBContext.newInstance(XmlListTag.class);
            Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();

            // xml parsing
            XmlListTag xmlListTag = (XmlListTag) unmarshaller.unmarshal(inputStream);
            inputStream.close();

            // get parsing date
            List<HotIssueXml> hotIssueXmls = Arrays.stream(xmlListTag.getIssueTags()).collect(Collectors.toList());
            // colmumn 정보 삭제
            System.out.println(hotIssueXmls.get(0));
            List<HotIssueXml> subXmls = hotIssueXmls.subList(1, hotIssueXmls.size() - 1);

            // 날짜순 역정렬
            Collections.reverse(subXmls);

            List<HotIssue> hotIssues = subXmls.stream()
                    .map(HotIssueXml::toIssue)
                    .toList();


            for(HotIssue hot : hotIssues){
                hot.addOriginal(getCrolling(hot.getUrl()));
            }

            hotIssueRepository.saveAll(hotIssues);
        }
    }

    @Transactional
    public String getSummary(Long hotIssueId){
        HotIssue hotIssue = hotIssueRepository.findById(hotIssueId)
                .orElseThrow(() -> new IllegalArgumentException("not found hot issue"));

        RestClient restClient = RestClient.create();
        SummaryDto summaryDto = new SummaryDto(hotIssue.getOriginal());
        SummaryResponseDto summaryResponse = restClient.post()
                .uri(PYTHON_URL+"/issue")
                .contentType(APPLICATION_JSON)
                .body(summaryDto)
                .retrieve().toEntity(SummaryResponseDto.class).getBody();

        hotIssue.addSummary(summaryResponse.getSummary());
        return summaryResponse.getSummary();
    }
}
