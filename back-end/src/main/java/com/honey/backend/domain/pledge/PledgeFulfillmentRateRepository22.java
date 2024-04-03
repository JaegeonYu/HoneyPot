package com.honey.backend.domain.pledge;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PledgeFulfillmentRateRepository22 extends JpaRepository<PledgeFulfillmentRate22, Long> {

    Optional<PledgeFulfillmentRate22> findByAssemblyId(Long assemblyId);

}
