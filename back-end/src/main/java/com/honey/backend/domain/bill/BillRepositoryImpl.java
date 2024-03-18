package com.honey.backend.domain.bill;

import com.honey.backend.domain.assembly.QAssembly;
import com.honey.backend.domain.committee.QCommittee;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class BillRepositoryImpl implements BillRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    QBill bill = QBill.bill;
    QAssembly assembly = QAssembly.assembly;
    QCommittee committee = QCommittee.committee;

    @Override
    public List<Bill> findAllByAssemblyId(Long assemblyId) {
        return queryFactory
                .select(bill)
                .from(bill)
                .rightJoin(assembly)
                .on(bill.assembly.id.eq(assembly.id))
                .where(bill.assembly.id.eq(assemblyId))
                .fetch();
    }

    @Override
    public Page<Bill> findAll(Pageable pageable, String word) {
        List<Bill> billList = queryFactory
                .select(bill)
                .from(bill)
                .where(word != null ? bill.billName.like("%" + word + "%") : null)
                .orderBy(bill.billNo.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        return new PageImpl<>(billList);
    }

    @Override
    public Page<Bill> findAllByCommittee(Pageable pageable, String word, Long cmitId) {
        List<Bill> billList = queryFactory
                .select(bill)
                .from(bill)
                .innerJoin(committee)
                .on(bill.committee.id.eq(committee.id))
                .where(word != null ? bill.billName.like("%" + word + "%") : null
                        , cmitId != null ? bill.committee.id.eq(cmitId) : null)
                .orderBy(bill.billNo.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        return new PageImpl<>(billList);
    }

}
