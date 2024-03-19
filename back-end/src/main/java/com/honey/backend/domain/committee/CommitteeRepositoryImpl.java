package com.honey.backend.domain.committee;

import com.honey.backend.domain.assembly.QAssembly;
import com.honey.backend.domain.bill.QBill;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
@RequiredArgsConstructor
public class CommitteeRepositoryImpl implements CommitteeRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    QCommittee committee = QCommittee.committee;
    QBill bill = QBill.bill;
    QAssembly assembly = QAssembly.assembly;
    @Override
    public List<Committee> findMostCommitteeByAssemblyId(Long assemblyId) {
        List<Committee> committeeList = queryFactory
                .select(committee)
                .from(bill)
                .leftJoin(committee).on(bill.committee.id.eq(committee.id))
                .leftJoin(assembly).on(bill.assembly.id.eq(assembly.id))
                .where(assembly.id.eq(assemblyId))
                .groupBy(committee)
                .orderBy(committee.count().desc(),committee.id.asc())
                .limit(4)
                .fetch();

        return committeeList;
    }
}
