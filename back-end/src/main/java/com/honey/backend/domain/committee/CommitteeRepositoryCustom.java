package com.honey.backend.domain.committee;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommitteeRepositoryCustom {

    List<Committee> findMostCommitteeByAssemblyId(Long assemblyId);
}
