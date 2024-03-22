package com.honey.backend.load.hotissue;

import com.honey.backend.domain.hotissue.HotIssue;
import com.honey.backend.domain.hotissue.HotIssuerRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class HotIssueLoadService {
    private final HotIssuerRepository hotIssuerRepository;
    private final Logger logger = LoggerFactory.getLogger("hotIssueLogger");

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
        if(hotIssuerRepository.count() == 0){

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
                System.out.println("==========");
                System.out.println(hot.getTitle());
                hot.addOriginal(getCrolling(hot.getUrl()));
            }

            hotIssuerRepository.saveAll(hotIssues);
        }
    }
}
