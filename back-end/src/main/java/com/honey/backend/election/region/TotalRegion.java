package com.honey.backend.election.region;


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
@Table(name = "region_22")
public class TotalRegion {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "region_id")
    private Long id;

    private String sido;
    private int sidoCd;
    private String sigungu;
    private int sigunguCd;

    private String electionRegion;
    private String dong;
    private TotalRegion(String sido, int sidoCd, String sigungu, int sigunguCd, String electionRegion, String dong){
        this.sido = sido;
        this.sidoCd = sidoCd;
        this.sigungu = sigungu;
        this.sigunguCd = sigunguCd;
        this.dong = dong;
        this.electionRegion = electionRegion;
    }

    public static TotalRegion createTotalRegion(String sido, int sidoCd, String sigungu, int sigunguCd, String electionRegion, String dong) {
        return new TotalRegion(sido, sidoCd, sigungu, sigunguCd, electionRegion, dong);
    }
}
