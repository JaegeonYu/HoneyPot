package com.honey.backend.domain.region.electionregion;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ElectionRegionRepository extends JpaRepository<ElectionRegion,Long> {

boolean existsByElectionRegionName(String electionRegionName);

Optional<ElectionRegion> findByElectionRegionName(String electionRegionName);


}
