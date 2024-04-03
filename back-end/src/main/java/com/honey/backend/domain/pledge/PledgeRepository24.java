package com.honey.backend.domain.pledge;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PledgeRepository24 extends JpaRepository<Pledge24, Long> {

    Optional<Page<Pledge24>> findAllByPledgeFulfillmentRateId(Pageable pageable, Long pledgeFulfillmentRateId);

}
