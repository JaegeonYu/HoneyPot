package com.honey.backend.domain.poly;

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
@Table(name = "poly")
public class Poly {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "poly_id")
    private Long id;

    private String polyName;

    private String logoUrl;

    private int seats;

    private String leader;


    private Poly(String polyName, String logoUrl, int seats, String leader) {
        this.polyName = polyName;
        this.logoUrl = logoUrl;
        this.seats = seats;
        this.leader = leader;
    }

    public static Poly createPoly(String polyName, String logoUrl, int seats, String leader){
        return new Poly(polyName,logoUrl,seats,leader);
    }

}
