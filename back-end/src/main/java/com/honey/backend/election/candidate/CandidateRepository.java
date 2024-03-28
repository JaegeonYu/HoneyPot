package com.honey.backend.election.candidate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CandidateRepository extends JpaRepository<Candidate, Long> {

    // 지역에 따라 후보자 전체 조회
    Page<Candidate> findAllBySggName(Pageable pageable, String sgg);
}
