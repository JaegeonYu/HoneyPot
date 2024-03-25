package com.honey.backend.domain.pledge;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PledgeRepository extends JpaRepository<Pledge, Long> {

    Optional<List<Pledge>> findAllByPledgeFulfillmentRateId(Long pledgeFulfillmentRateId);
}
