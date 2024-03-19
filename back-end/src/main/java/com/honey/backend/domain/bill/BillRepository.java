package com.honey.backend.domain.bill;

import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.committee.Committee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BillRepository extends JpaRepository<Bill, Long>, BillRepositoryCustom {


    Optional<Bill> findByBillNo(String billNo);

    boolean existsByBillNo(String billNo);

    Optional<List<Bill>> findAllByBillNo(String billNo);

    Optional<List<Bill>> findAllByProcResultIsNotNull();



}
