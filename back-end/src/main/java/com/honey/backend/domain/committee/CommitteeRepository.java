package com.honey.backend.domain.committee;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommitteeRepository extends JpaRepository<Committee,Long>, CommitteeRepositoryCustom {


    Optional<Committee> findByCmitName(String cmitName);
    boolean existsByCmitName(String cmitName);
}
