package com.honey.backend.domain.region.sido;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Entity
@Getter
@RequiredArgsConstructor
@Transactional
@Table(name = "sido")
public class Sido
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sido_id")
    Long id;

    String sidoName;


    @Builder
    private Sido(String sidoName){
        this.sidoName = sidoName;
    }

    public static Sido createSido(String sidoName) {
        return new Sido(sidoName);
    }



}
