package com.honey.backend.domain.assembly;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface AssemblyRepositoryCustom {

    List<Assembly> findAllByRegion(String word, Long sidoId, Long sigunguId, Long dongId, Long polyId);

    List<Assembly> findAllByNonRegion(String word, Long sidoId, Long sigunguId, Long dongId, Long polyId);

    List<Assembly> findMostAssemblyByPoly(Long cmitId, Long polyId);

    List<Assembly> findMostAssembly(Long cmitId);
    List<Long> countMostAssembly(Long cmitId, Long polyId);
    List<Assembly> findAssemblyByPolyAttendanceRateDesc(Long polyId);

    List<Assembly> findAssemblyByPolyAttendanceRateAsc(Long polyId);
}
