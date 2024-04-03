package com.honey.backend.load.assembly;

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

    @XmlElement(name = "deptCd")
    private String deptCd;
    @XmlElement(name = "empNm")
    private String empNm;
    @XmlElement(name = "engNm")
    private String engNm;
    @XmlElement(name = "hjNm")
    private String hjNm;
    @XmlElement(name = "jpgLink")
    private String jpgLink;
    @XmlElement(name = "num")
    private String num;
    @XmlElement(name = "origNm")
    private String origNm;
    @XmlElement(name = "reeleGbnNm")
    private String reeleGbnNm;
}

