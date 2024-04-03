package com.honey.backend.domain.pledge;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PledgeFulfillmentRateRepository24 extends JpaRepository<PledgeFulfillmentRate24, Long> {

    Optional<PledgeFulfillmentRate24> findByAssemblyId(Long assemblyId);


}
