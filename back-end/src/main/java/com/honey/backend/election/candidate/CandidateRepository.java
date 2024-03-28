package com.honey.backend.election.candidate;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateRepository extends JpaRepository<Candidate, Long> {

    // 지역에 따라 후보자 전체 조회


}
