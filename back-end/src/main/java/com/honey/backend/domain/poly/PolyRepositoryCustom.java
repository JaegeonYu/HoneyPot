package com.honey.backend.domain.poly;

import org.springframework.stereotype.Repository;

@Repository
public interface PolyRepositoryCustom {

    Poly findByAssemblyId(Long assemblyId);

}
