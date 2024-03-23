package com.honey.backend.load.hotissue;

import com.honey.backend.domain.hotissue.HotIssue;
import jakarta.xml.bind.annotation.XmlElement;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import static java.time.LocalTime.parse;

@Data
@NoArgsConstructor
@ToString
public class HotIssueXml {
    @XmlElement(name = "TITLE")
    private String TITLE;
    private String URL_LINK;
    private String DATE_RELEASED;
    private String DATE_LASTMODIFIED;

    public HotIssueXml(String TITLE, String URL_LINK, String DATE_RELEASED, String DATE_LASTMODIFIED) {
        this.TITLE = TITLE;
        this.URL_LINK = URL_LINK;
        this.DATE_RELEASED = DATE_RELEASED;
        this.DATE_LASTMODIFIED = DATE_LASTMODIFIED;
    }

    public static HotIssue toIssue(HotIssueXml hot){
        return HotIssue.builder()
                .title(hot.getTITLE())
                .url(hot.getURL_LINK())
                .createdAt(covertDate(hot.getDATE_RELEASED()))
                .updatedAt(covertDate(hot.getDATE_LASTMODIFIED()))
                .build();
    }

    public static LocalDateTime covertDate(String date){
        String formattedDate = date.split("\\.")[0];
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return LocalDateTime.parse(formattedDate, formatter);
    }
}
