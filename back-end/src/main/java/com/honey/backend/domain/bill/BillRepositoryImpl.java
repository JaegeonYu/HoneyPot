package com.honey.backend.domain.bill;

import com.honey.backend.domain.assembly.QAssembly;
import com.honey.backend.domain.committee.QCommittee;
import com.honey.backend.domain.poly.QPoly;
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
    QPoly poly = QPoly.poly;
    @Override
    public Page<Bill> findAllByAssemblyIdAndCmitId(Pageable pageable, String word, Long cmitId, Long assemblyId) {
        List<Bill> billList = queryFactory
                .select(bill)
                .from(bill)
                .leftJoin(assembly).on(bill.assembly.id.eq(assembly.id))
                .leftJoin(committee).on(bill.committee.id.eq(committee.id))
                .where(assemblyId != null ? bill.assembly.id.eq(assemblyId) : null,
                        cmitId != 0 ? committee.id.eq(cmitId) : null,
                        word != null ? bill.billName.like("%" + word + "%") : null)
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
        BooleanExpression committeeCondition = (cmitId != 0 ? bill.committee.id.eq(cmitId) : null);
        Long countOfApproved = queryFactory
                .select(bill.count())
                .from(bill)
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(assemblyCondition, committeeCondition, (procResultAlias.like("%가결")))
                .fetchOne();


        Long countOfRejected = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(assemblyCondition, committeeCondition, (procResultAlias.like("부결")))
                .fetchOne();

        Long countOfDisposedOrWithdrawn = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(assemblyCondition, committeeCondition,
                        ((procResultAlias.like("%폐기").and(procResultAlias.notLike("%" + "반영" + "%")))
                                .or(procResultAlias.like("%철회"))))
                .fetchOne();

        Long countOfInProgress = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(assemblyCondition, committeeCondition, (procResultAlias.isNull()))
                .fetchOne();


        Long countOfAlternativeIncorporated = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(assemblyCondition, committeeCondition, (procResultAlias.like("%" + "반영" + "%")))
                .fetchOne();


        Long countOfTotalCount = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(assemblyCondition, committeeCondition)
                .fetchOne();

        int approved = countOfApproved == null ? 0 : countOfApproved.intValue();
        int rejected = countOfRejected == null ? 0 : countOfRejected.intValue();
        int disposedOrWithdrawn = countOfDisposedOrWithdrawn == null ? 0 : countOfDisposedOrWithdrawn.intValue();
        int inProgress = countOfInProgress == null ? 0 : countOfInProgress.intValue();
        int alternativeIncorporated = countOfAlternativeIncorporated == null ? 0 : countOfAlternativeIncorporated.intValue();
        int total = countOfTotalCount == null ? 0 : countOfTotalCount.intValue();

        return new BillStatResponse(approved, rejected, disposedOrWithdrawn, inProgress, alternativeIncorporated, total);
    }

    @Override
    public Long countByAssemblyIdAndCmitId(String word, Long cmitId, Long assemblyId) {
        return queryFactory
                .select(bill.count())
                .from(bill)
                .leftJoin(assembly).on(bill.assembly.id.eq(assembly.id))
                .leftJoin(committee).on(bill.committee.id.eq(committee.id))
                .where(assemblyId != null ? bill.assembly.id.eq(assemblyId) : null,
                        cmitId != 0 ? committee.id.eq(cmitId) : null,
                        word != null ? bill.billName.like("%" + word + "%") : null)
                .orderBy(bill.billNo.desc())
                .fetchOne();

    }

    @Override
    public Page<Bill> findAllByPolyIdAndCmitId(Pageable pageable, String word, Long cmitId, Long polyId) {

        List<Bill> billList = queryFactory
                .select(bill)
                .from(bill)
                .leftJoin(assembly).on(bill.assembly.id.eq(assembly.id))
                .leftJoin(poly).on(bill.assembly.poly.id.eq(poly.id))
                .leftJoin(committee).on(bill.committee.id.eq(committee.id))
                .where(polyId != null ? bill.assembly.poly.id.eq(polyId) : null,
                        cmitId != 0 ? committee.id.eq(cmitId) : null,
                        word != null ? bill.billName.like("%" + word + "%") : null)
                .orderBy(bill.billNo.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();
        return new PageImpl<>(billList);
    }

    @Override
    public BillStatResponse findBillStatByPolyIdAndCmitId(Long polyId, Long cmitId) {
        StringExpression procResultAlias = bill.procResult;
        BooleanExpression polyCondition = (polyId != null ? bill.assembly.poly.id.eq(polyId) : null);
        BooleanExpression committeeCondition = (cmitId != 0 ? bill.committee.id.eq(cmitId) : null);
        Long countOfApproved = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(poly).on(bill.assembly.poly.id.eq(poly.id))
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(polyCondition, committeeCondition, (procResultAlias.like("%가결")))
                .fetchOne();


        Long countOfRejected = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(poly).on(bill.assembly.poly.id.eq(poly.id))
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(polyCondition, committeeCondition, (procResultAlias.like("부결")))
                .fetchOne();

        Long countOfDisposedOrWithdrawn = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(poly).on(bill.assembly.poly.id.eq(poly.id))
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(polyCondition, committeeCondition,
                        ((procResultAlias.like("%폐기").and(procResultAlias.notLike("%" + "반영" + "%")))
                                .or(procResultAlias.like("%철회"))))
                .fetchOne();

        Long countOfInProgress = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(poly).on(bill.assembly.poly.id.eq(poly.id))
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(polyCondition, committeeCondition, (procResultAlias.isNull()))
                .fetchOne();


        Long countOfAlternativeIncorporated = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(poly).on(bill.assembly.poly.id.eq(poly.id))
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(polyCondition, committeeCondition, (procResultAlias.like("%" + "반영" + "%")))
                .fetchOne();


        Long countOfTotalCount = queryFactory
                .select(bill.count().coalesce(0L))
                .from(bill)
                .leftJoin(poly).on(bill.assembly.poly.id.eq(poly.id))
                .leftJoin(assembly).on(assembly.id.eq(bill.assembly.id))
                .leftJoin(committee).on(committee.id.eq(bill.committee.id))
                .where(polyCondition, committeeCondition)
                .fetchOne();

        int approved = countOfApproved == null ? 0 : countOfApproved.intValue();
        int rejected = countOfRejected == null ? 0 : countOfRejected.intValue();
        int disposedOrWithdrawn = countOfDisposedOrWithdrawn == null ? 0 : countOfDisposedOrWithdrawn.intValue();
        int inProgress = countOfInProgress == null ? 0 : countOfInProgress.intValue();
        int alternativeIncorporated = countOfAlternativeIncorporated == null ? 0 : countOfAlternativeIncorporated.intValue();
        int total = countOfTotalCount == null ? 0 : countOfTotalCount.intValue();
        return new BillStatResponse(approved, rejected, disposedOrWithdrawn, inProgress, alternativeIncorporated, total);

    }

    @Override
    public Long countByPolyIdAndCmitId(String word, Long cmitId, Long polyId) {
        return queryFactory
                .select(bill.count())
                .from(bill)
                .leftJoin(poly).on(bill.assembly.poly.id.eq(poly.id))
                .leftJoin(assembly).on(bill.assembly.id.eq(assembly.id))
                .leftJoin(committee).on(bill.committee.id.eq(committee.id))
                .where(polyId != null ? bill.assembly.poly.id.eq(polyId) : null,
                        cmitId != 0 ? committee.id.eq(cmitId) : null,
                        word != null ? bill.billName.like("%" + word + "%") : null)
                .orderBy(bill.billNo.desc())
                .fetchOne();

    }

}
