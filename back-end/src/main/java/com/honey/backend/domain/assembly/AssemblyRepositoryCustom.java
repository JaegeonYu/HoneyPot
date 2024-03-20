package com.honey.backend.domain.assembly;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface AssemblyRepositoryCustom {

    List<Assembly> findAllByRegion(String word, Long sidoId, Long sigunguId, Long dongId);

    Page<Assembly> findAllByPoly(Pageable pageable, String word, Long polyId);

    Page<Assembly> findAllByCommittee(Pageable pageable, String word, Long cmitId);


}
