package com.honey.backend.load.bill;

import jakarta.xml.bind.annotation.XmlAccessType;
import lombok.Getter;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
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

    @XmlElement(name = "resultCode")
    private String resultCode;

    @XmlElement(name = "resultMsg")
    private String resultMsg;

    @XmlElement(name = "numOfRows")
    private int numOfRows;

    @XmlElement(name = "pageNo")
    private int pageNo;

    @XmlElement(name = "totalCount")
    private int totalCount;

    @XmlElement(name = "billId")
    private String billId;

    @XmlElement(name = "billNo")
    private String billNo;

    @XmlElement(name = "billName")
    private String billName;

    @XmlElement(name = "proposerKind")
    private String proposerKind;

    @XmlElement(name = "proposeDt")
    private String proposeDt;

    @XmlElement(name = "procDt")
    private String procDt;

    @XmlElement(name = "generalResult")
    private String generalResult;

    @XmlElement(name = "summary")
    private String summary;

    @XmlElement(name = "procStageCd")
    private String procStageCd;

    @XmlElement(name = "passGubn")
    private String passGubn;
}

