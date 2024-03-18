package com.honey.backend.domain.assembly;

import com.honey.backend.domain.bill.QBill;
import com.honey.backend.domain.committee.QCommittee;
import com.honey.backend.domain.poly.QPoly;
import com.honey.backend.domain.region.dong.QDong;
import com.honey.backend.domain.region.sido.QSido;
import com.honey.backend.domain.region.sigungu.QSigungu;
import com.honey.backend.exception.AssemblyErrorCode;
import com.honey.backend.exception.BaseException;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Collectors;

@Repository
@RequiredArgsConstructor
public class AssemblyRepositoryImpl implements AssemblyRepositoryCustom {

    private final JPAQueryFactory queryFactory;
    QAssembly assembly = QAssembly.assembly;
    QPoly poly = QPoly.poly;
    QDong dong = QDong.dong;
    QSigungu sigungu = QSigungu.sigungu;
    QSido sido = QSido.sido;
    QBill bill = QBill.bill;
    QCommittee committee = QCommittee.committee;

    @Override
    public List<Assembly> findAllByRegion(String word, String sidoName, String sigunguName, String dongName) {
        List<Assembly> assemblyList = queryFactory
                .select(assembly)
                .from(assembly)
                .innerJoin(dong).on(assembly.electionRegion.eq(dong.electionRegion))
                .innerJoin(sigungu).on(dong.sigungu.id.eq(sigungu.id))
                .innerJoin(sido).on(sigungu.sido.id.eq(sido.id))
                .where(
                        sidoName != null ? sido.sidoName.eq(sidoName) : null,
                        sigunguName != null ? sigungu.sigunguName.eq(sigunguName) : null,
                        dongName != null ? dong.dongName.eq(dongName) : null,
                        word != null ? assembly.hgName.like("%" + word + "%") : null
                )
                .orderBy(dong.electionRegion.id.asc())
                .fetch().stream().distinct().collect(Collectors.toList());

        return assemblyList;

    }

    @Override
    public Page<Assembly> findAllByPoly(Pageable pageable, String word, Long polyId) {

        List<Assembly> assemblyList = queryFactory
                .select(assembly)
                .from(assembly)
                .innerJoin(poly)
                .on(assembly.poly.id.eq(poly.id))
                .where(polyId != null ? assembly.poly.id.eq(polyId) : null
                        , word != null ? assembly.hgName.like("%" + word + "%") : null)
                .orderBy(assembly.id.asc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        return new PageImpl<>(assemblyList);
    }

    @Override
    public Page<Assembly> findAllByCommittee(Pageable pageable, String word, Long cmitId) {

        List<Assembly> assemblyList = queryFactory
                .select(assembly)
                .from(bill)
                .join(bill.assembly, assembly)
                .join(bill.committee, committee)
                .groupBy(assembly.id)
                .where(cmitId != null ? committee.id.eq(cmitId) : null
                        , assembly.hgName.ne("unknown")
                        , (assembly.id.in(
                                JPAExpressions.select(bill.assembly.id)
                                        .from(bill)
                                        .join(bill.committee, committee)
                                        .groupBy(bill.assembly.id)
                                        .orderBy(assembly.id.count().desc())
                                        .limit(3)
                        ))
                )
                .orderBy(assembly.id.asc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        if(pageable.getOffset() >= assemblyList.size() || assemblyList.size() == 0 )
            throw new BaseException(AssemblyErrorCode.ASSEMBLY_NO_MORE_LIST);
        return new PageImpl<>(assemblyList);
    }
}
