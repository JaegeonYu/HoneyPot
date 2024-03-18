package com.honey.backend.domain.region.sigungu;

import com.honey.backend.domain.region.sido.Sido;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Entity
@AllArgsConstructor
@Getter
@RequiredArgsConstructor

@Table(name = "sigungu")
public class Sigungu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sigungu_id")
    private Long id;

    private String sigunguName;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "sido_id")
    private Sido sido;

    @Builder
    private Sigungu(String sigunguName, Sido sido) {
        this.sigunguName = sigunguName;
        this.sido = sido;
    }

    public static Sigungu createSigungu(String sigunguName, Sido sido) {
        return new Sigungu(sigunguName,sido);
    }
}
