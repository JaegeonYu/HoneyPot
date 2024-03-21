package com.honey.backend.domain.assembly;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public interface AssemblyRepositoryCustom {

    List<Assembly> findAll(String word, Long sidoId, Long sigunguId, Long dongId, Long polyId);

}
