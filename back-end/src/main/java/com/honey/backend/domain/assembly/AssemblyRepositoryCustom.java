package com.honey.backend.domain.assembly;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface AssemblyRepositoryCustom {

    List<Assembly> findAllByRegion(String word, Long sidoId, Long sigunguId, Long dongId, Long polyId);

    List<Assembly> findAllByNonRegion(String word, Long sidoId, Long sigunguId, Long dongId, Long polyId);

    List<Assembly> findMostAssemblyByPoly(Long polyId);

    List<Assembly> findMostAssembly();
}
