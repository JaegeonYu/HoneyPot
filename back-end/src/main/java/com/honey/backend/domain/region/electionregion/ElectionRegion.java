package com.honey.backend.domain.region.electionregion;

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
@Table(name = "election_region")
public class ElectionRegion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "election_region_id")
    private Long id;

    private String electionRegionName;

    @Builder
    private ElectionRegion(String electionRegionName) {
        this.electionRegionName = electionRegionName;

    }

    public static ElectionRegion createElectionRegion(String electionRegionName) {
        return new ElectionRegion(electionRegionName);
    }
}
