package com.honey.backend.election.region;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TotalRegionRepository extends JpaRepository<TotalRegion, Long> {


    Optional<TotalRegion> findByElectionRegionAndSigunguAndSido(String electionRegion, String sigunguName,String sido);
}
