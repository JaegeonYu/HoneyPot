package com.honey.backend.domain.committee;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommitteeRepositoryCustom {

    Optional<List<Committee>> findMostCommittee();

    Optional<List<Committee>> findMostCommitteeByAssemblyId(Long assemblyId);
    Optional<List<Committee>> findMostCommitteeByPolyId(Long polyId);
}
