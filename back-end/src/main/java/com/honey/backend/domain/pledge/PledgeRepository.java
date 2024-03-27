package com.honey.backend.domain.pledge;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PledgeRepository extends JpaRepository<Pledge, Long> {

    Optional<Page<Pledge>> findAllByPledgeFulfillmentRateId(Pageable pageable, Long pledgeFulfillmentRateId);
}
