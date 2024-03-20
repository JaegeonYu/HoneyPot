package com.honey.backend.domain.committee;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@RequiredArgsConstructor
@Transactional
@Table(name = "Committee")
public class Committee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cmit_id")
    private Long id;

    private String cmitName;
    @Column(unique = true)
    private String cmitCode;
    private String cmitLeader;
    private boolean cmitOnOff;
    private Committee(String cmitName, String cmitCode, String cmitLeader, boolean cmitOnOff) {
        this.cmitName = cmitName;
        this.cmitCode = cmitCode;
        this.cmitLeader = cmitLeader;
        this.cmitOnOff = cmitOnOff;
    }

    public static Committee createCommittee(String cmitName, String cmitCode, String cmitLeader, boolean cmitOnOff) {
        return new Committee(cmitName, cmitCode, cmitLeader, cmitOnOff);
    }
}