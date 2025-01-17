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
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;
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

    @Value("${PYTHON_URL}")
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

            int count = 0;
            for(HotIssue hot : hotIssues){
                System.out.print("hotIssue Saving : " + String.format("%.2f", count++ / (hotIssues.size() / 100)) + "% " + "\r");
                hot.addOriginal(getCrolling(hot.getUrl()));
            }

            hotIssueRepository.saveAll(hotIssues);
        }
    }


    public String getSummary(Long hotIssueId){
        //db read
        for(int i=746;i<839;i++){
            System.out.println(i);
            String s = addSummary((long) i);
            System.out.println(s);
        }


        return "done";
    }

    @Transactional
    protected String addSummary(Long hotIssueId) {
        HotIssue hotIssue = hotIssueRepository.findById(hotIssueId)
                .orElseThrow(() -> new IllegalArgumentException("not found hot issue"));

        // 요약 여부 확인
        if(hotIssue.getSummary() != null)throw new IllegalArgumentException("이미 요약이 존재합니다.");

        // python 서버 요약 요청
        RestClient restClient = RestClient.builder().baseUrl(PYTHON_URL+"issue").build();

        SummaryResponseDto summary = restClient.post()
                .contentType(APPLICATION_JSON)
                .body(new SummaryDto(hotIssue.getTitle(), hotIssue.getOriginal()))
                .retrieve()
                .body(SummaryResponseDto.class);

        StringBuffer summaries = new StringBuffer();
        for(String sum : summary.getResult()){
            summaries.append(sum+"\n");
        }

        hotIssue.addSummary(summaries.toString());
        return summaries.toString();
    }
}
