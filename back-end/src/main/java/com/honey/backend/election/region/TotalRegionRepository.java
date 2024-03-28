package com.honey.backend.election.region;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TotalRegionRepository extends JpaRepository<TotalRegion, Long> {


    Optional<TotalRegion> findByElectionRegionAndSigunguAndSido(String electionRegion, String sigunguName, String sido);

    Optional<TotalRegion> findBySidoAndSigunguAndDongContains(String sido, String sigungu, String dong);

    Optional<TotalRegion> findBySidoAndSigungu(String sido, String sigungu);

    Optional<TotalRegion> findBySido(String sido);

}
