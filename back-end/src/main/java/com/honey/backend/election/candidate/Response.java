package com.honey.backend.election.candidate;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import lombok.Getter;

import java.util.List;


@Getter
@XmlAccessorType(XmlAccessType.FIELD)
@XmlRootElement(name = "response")
public class Response {

    @XmlElement(name = "header")
    private Header header;
    @XmlElement(name = "body")
    private Body body;

}

@Getter
class Header {
    @XmlElement
    private String resultCode;
    @XmlElement
    private String resultMsg;

}

@Getter
class Body {
    @XmlElement(name = "items")
    private Items items;
    @XmlElement(name = "numOfRows")
    private int numOfRows;
    @XmlElement(name = "pageNo")
    private int pageNo;
    @XmlElement(name = "totalCount")
    private int totalCount;


}

@Getter
class Items {

    @XmlElement(name = "item")
    private List<Item> item;


}

@Getter
class Item {

    @XmlElement(name = "num")
    private int num;
    @XmlElement(name = "sgId")
    private long sgId;
    @XmlElement(name = "sgTypecode")
    private int sgTypecode;
    @XmlElement(name = "huboid")
    private long huboid;
    @XmlElement(name = "sggName")
    private String sggName;
    @XmlElement(name = "sdName")
    private String sdName;
    @XmlElement(name = "wiwName")
    private String wiwName;
    @XmlElement(name = "giho")
    private int giho;
    @XmlElement(name = "gihoSangse")
    private String gihoSangse;
    @XmlElement(name = "jdName")
    private String jdName;
    @XmlElement(name = "name")
    private String name;
    @XmlElement(name = "hanjaName")
    private String hanjaName;
    @XmlElement(name = "gender")
    private String gender;
    @XmlElement(name = "birthday")
    private String birthday;
    @XmlElement(name = "age")
    private int age;
    @XmlElement(name = "addr")
    private String addr;
    @XmlElement(name = "jobId")
    private int jobId;
    @XmlElement(name = "job")
    private String job;
    @XmlElement(name = "eduId")
    private int eduId;
    @XmlElement(name = "edu")
    private String edu;
    @XmlElement(name = "career1")
    private String career1;
    @XmlElement(name = "career2")
    private String career2;
    @XmlElement(name = "status")
    private String status;
}

