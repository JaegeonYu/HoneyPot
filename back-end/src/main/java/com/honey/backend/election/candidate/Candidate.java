package com.honey.backend.election.candidate;


import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Transactional
@Table(name = "candidate")
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "candidate_id")
    private Long id;

    private String candidateImgUrl;

    private String sgDate;
    private int sgTypeCode;
    private Long huboid;

    private String sggName;
    private String sdName;
    private String wiwName;
    private int giho;
    private String jdName;
    private String hgname;
    private String hjName;
    private String gender;
    private String birthday;
    private int age;

    // 지역 정보 추가해야함.
    private String addr;
    private String job;
    private String edu;
    private String career1;
    private String career2;
    private String status;

    public Candidate(String candidateImgUrl, String sgDate, int sgTypeCode, Long huboid, String sggName, String sdName, String wiwName, int giho, String jdName, String hgname, String hjName, String gender, String birthday, int age, String addr, String job, String edu, String career1, String career2, String status) {
        this.candidateImgUrl = candidateImgUrl;
        this.sgDate = sgDate;
        this.sgTypeCode = sgTypeCode;
        this.huboid = huboid;
        this.sggName = sggName;
        this.sdName = sdName;
        this.wiwName = wiwName;
        this.giho = giho;
        this.jdName = jdName;
        this.hgname = hgname;
        this.hjName = hjName;
        this.gender = gender;
        this.birthday = birthday;
        this.age = age;
        this.addr = addr;
        this.job = job;
        this.edu = edu;
        this.career1 = career1;
        this.career2 = career2;
        this.status = status;
    }

    public static Candidate createCandidate(String candidateImgUrl, String sgDate, int sgTypeCode, Long huboid, String sggName, String sdName, String wiwName, int giho, String jdName, String hgname, String hjName, String gender, String birthday, int age, String addr, String job, String edu, String career1, String career2, String status) {
        return new Candidate(candidateImgUrl, sgDate, sgTypeCode, huboid, sggName, sdName, wiwName, giho, jdName, hgname, hjName, gender, birthday, age, addr, job, edu, career1, career2, status);
    }
}
