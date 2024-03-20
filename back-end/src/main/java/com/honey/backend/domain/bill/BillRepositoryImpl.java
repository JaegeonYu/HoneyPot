package com.honey.backend.domain.bill;

import com.honey.backend.domain.assembly.QAssembly;
import com.honey.backend.domain.committee.QCommittee;
import com.honey.backend.response.BillStatResponse;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.StringExpression;
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
    public List<Bill> findAllByAssemblyIdAndCmitId(Long assemblyId, Long cmitId) {
        return queryFactory
                .select(bill)
                .from(bill)
                .rightJoin(assembly).on(bill.assembly.id.eq(assembly.id))
                .rightJoin(committee).on(bill.committee.id.eq(committee.id))
                .where(bill.assembly.id.eq(assemblyId),
                        cmitId != null ? committee.id.eq(cmitId) : null)
                .fetch();
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

    @Override
    public BillStatResponse findBillStatByAssemblyIdAndCmitId(Long assemblyId, Long cmitId) {

        StringExpression procResultAlias = bill.procResult;
        BooleanExpression assemblyCondition = (assemblyId != null ? bill.assembly.id.eq(assemblyId) : null);
        BooleanExpression CommitteeCondition = (cmitId != null ? bill.committee.id.eq(cmitId) : null);
        Long countOfApproved = queryFactory
                .select(bill.count())
                .from(bill)
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .groupBy(procResultAlias)
                .having(procResultAlias.like("%가결"))
                .where(assemblyCondition, CommitteeCondition)
                .fetchFirst();


        Long countOfRejected = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .groupBy(procResultAlias)
                .having(procResultAlias.like("%부결"))
                .where(assemblyCondition, CommitteeCondition)
                .fetchFirst();

        Long countOfDisposedOrWithdrawn = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .groupBy(procResultAlias)
                .having((procResultAlias.like("%폐기").and(procResultAlias.notLike("%" + "대안반영" + "%")))
                        .or(procResultAlias.like("%철회")))
                .where(assemblyCondition, CommitteeCondition)
                .fetchFirst();

        Long countOfInProgress = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .groupBy(procResultAlias)
                .having(procResultAlias.isNull())
                .where(assemblyCondition, CommitteeCondition)
                .fetchFirst();


        Long countOfAlternativeIncorporated = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .groupBy(procResultAlias)
                .having(procResultAlias.like("%" + "대안반영" + "%"))
                .where(assemblyCondition, CommitteeCondition)
                .fetchFirst();


        Long countOfTotalCount = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(assemblyCondition, CommitteeCondition)
                .fetchFirst();

        int approved = countOfApproved == null ? 0 : countOfApproved.intValue();
        int rejected = countOfRejected == null ? 0 : countOfRejected.intValue();
        int disposedOrWithdrawn = countOfDisposedOrWithdrawn == null ? 0 : countOfDisposedOrWithdrawn.intValue();
        int inProgress = countOfInProgress == null ? 0 : countOfInProgress.intValue();
        int alternativeIncorporated = countOfAlternativeIncorporated == null ? 0 : countOfAlternativeIncorporated.intValue();
        int total = countOfTotalCount == null ? 0 : countOfTotalCount.intValue();

        return new BillStatResponse(approved, rejected, disposedOrWithdrawn, inProgress, alternativeIncorporated, total);
    }

}
