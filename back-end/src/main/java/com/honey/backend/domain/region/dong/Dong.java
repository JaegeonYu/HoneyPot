package com.honey.backend.domain.region.dong;

import com.honey.backend.domain.region.electionregion.ElectionRegion;
import com.honey.backend.domain.region.sigungu.Sigungu;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Entity
@AllArgsConstructor
@Getter
@RequiredArgsConstructor
@Transactional
@Table(name = "dong")
public class Dong {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dong_id")
    private Long id;

    private String dongName;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "sigungu_id")
    private Sigungu sigungu;


    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "election_region_id")
    private ElectionRegion electionRegion;


    @Builder
    private Dong(String dongName, Sigungu sigungu, ElectionRegion electionRegion) {
        this.dongName = dongName;
        this.sigungu = sigungu;
        this.electionRegion = electionRegion;

    }

    public static Dong createDong(String dongName, Sigungu sigungu, ElectionRegion electionRegion) {
        return new Dong(dongName, sigungu, electionRegion);
    }
}
