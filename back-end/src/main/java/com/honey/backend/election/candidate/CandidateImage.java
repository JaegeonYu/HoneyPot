package com.honey.backend.election.candidate;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
@EqualsAndHashCode(of = "id")
public class CandidateImage {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "candidate_image_id")
    private Long id;

    @Column(nullable = false)
    private Integer num;

    @Column(length = 500)
    private String url;

    @ManyToOne
    @JoinColumn(name = "candidate_id")
    private Candidate candidate;

    public CandidateImage(Integer num, String url, Candidate candidate) {
        this.num = num;
        this.url = url;
        this.candidate = candidate;
    }
}
