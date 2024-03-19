package com.honey.backend.domain.bill;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BillRepositoryCustom {

    List<Bill> findAllByAssemblyIdAndCmitId(Long assemblyId, Long cmitId);

    Page<Bill> findAll(Pageable pageable, String word);

    Page<Bill> findAllByCommittee(Pageable pageable, String word, Long cmitId);

}
