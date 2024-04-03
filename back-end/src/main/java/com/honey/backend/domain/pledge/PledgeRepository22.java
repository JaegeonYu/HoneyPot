package com.honey.backend.domain.pledge;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PledgeRepository22 extends JpaRepository<Pledge22, Long> {

    Optional<Page<Pledge22>> findAllByPledgeFulfillmentRateId(Pageable pageable, Long pledgeFulfillmentRateId);
}
