package com.honey.backend.domain.assembly;

import com.honey.backend.domain.bill.QBill;
import com.honey.backend.domain.poly.Poly;
import com.honey.backend.domain.poly.QPoly;
import com.honey.backend.domain.region.dong.QDong;
import com.honey.backend.domain.region.electionregion.ElectionRegion;
import com.honey.backend.domain.region.sido.QSido;
import com.honey.backend.domain.region.sigungu.QSigungu;
import com.honey.backend.exception.BaseException;
import com.honey.backend.exception.ElectionRegionErrorCode;
import com.honey.backend.exception.PolyErrorCode;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
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


    @Override
    public List<Assembly> findAllByRegion(String word, Long sidoId, Long sigunguId, Long dongId, Long polyId) {
        makeException(sidoId, sigunguId, dongId, polyId);

        return queryFactory
                .select(assembly)
                .from(assembly)
                .innerJoin(dong).on(assembly.electionRegion.eq(dong.electionRegion))
                .innerJoin(dong).on(dong.sigungu.id.eq(sigungu.id))
                .innerJoin(sigungu).on(sigungu.sido.id.eq(sido.id))
                .innerJoin(poly).on(assembly.poly.id.eq(poly.id))
                .where(
                        (assembly.hgName.notLike("UNKNOWN")),
                        (sidoId != 0 ? sido.id.eq(sidoId) : null),
                        (sigunguId != 0 ? sigungu.id.eq(sigunguId) : null),
                        (dongId != 0 ? dong.id.eq(dongId) : null),
                        (polyId != 0 ? poly.id.eq(polyId) : null),
                        (word != null ? assembly.hgName.like("%" + word + "%") : null)

                )
                .fetch().stream().distinct().collect(Collectors.toList());

    }

    @Override
    public List<Assembly> findAllByNonRegion(String word, Long sidoId, Long sigunguId, Long dongId, Long polyId) {
        makeException(sidoId, sigunguId, dongId, polyId);

        return queryFactory
                .select(assembly)
                .from(assembly)
                .innerJoin(poly).on(assembly.poly.id.eq(poly.id))
                .where(
                        (assembly.electionRegion.electionRegionName.eq("비례대표")),
                        (polyId != 0 ? poly.id.eq(polyId) : null),
                        (word != null ? assembly.hgName.like("%" + word + "%") : null),
                        (assembly.hgName.notLike("UNKNOWN"))
                )
                .orderBy(assembly.electionRegion.id.asc())
                .fetch().stream().distinct().collect(Collectors.toList());

    }

    public void makeException(Long sidoId, Long sigunguId, Long dongId, Long polyId) {
        ElectionRegion tempElectionRegion = queryFactory
                .select(assembly.electionRegion)
                .from(assembly)
                .innerJoin(dong).on(assembly.electionRegion.eq(dong.electionRegion))
                .innerJoin(sigungu).on(dong.sigungu.id.eq(sigungu.id))
                .innerJoin(sido).on(sigungu.sido.id.eq(sido.id))
                .where((sidoId != 0 ? sido.id.eq(sidoId) : null),
                        (sigunguId != 0 ? sigungu.id.eq(sigunguId) : null),
                        (dongId != 0 ? dong.id.eq(dongId) : null),
                        (sidoId == 0 && sigunguId != 0 ? Expressions.booleanTemplate("false") : null),
                        ((sidoId == 0 || sigunguId == 0) && dongId != 0 ? Expressions.booleanTemplate("false") : null),
                        (assembly.hgName.ne("UNKNOWN")))
                .fetchFirst();

        if (tempElectionRegion == null) throw new BaseException(ElectionRegionErrorCode.ELECTION_REGION_BAD_REQUEST);

        Poly tempPoly = queryFactory
                .select(assembly.poly)
                .from(assembly)
                .innerJoin(poly).on(assembly.poly.id.eq(poly.id))
                .where((polyId != 0 ? poly.id.eq(polyId) : null),
                        (assembly.hgName.ne("UNKNOWN")))
                .fetchFirst();

        if (tempPoly == null) throw new BaseException(PolyErrorCode.POLY_BAD_REQUEST);

    }

    @Override
    public List<Assembly> findMostAssemblyByPoly(Long polyId) {
        return queryFactory
                .select(assembly)
                .from(assembly)
                .innerJoin(bill).on(assembly.id.eq(bill.assembly.id))
                .innerJoin(poly).on(poly.id.eq(assembly.poly.id))
                .where(poly.id.eq(polyId))
                .groupBy(assembly)
                .orderBy(assembly.count().desc(), assembly.id.asc())
                .limit(3)
                .fetch();

    }

    @Override
    public List<Assembly> findMostAssembly() {
        return queryFactory
                .select(assembly)
                .from(assembly)
                .innerJoin(bill).on(assembly.id.eq(bill.assembly.id))
                .groupBy(assembly)
                .orderBy(assembly.count().desc(), assembly.id.asc())
                .limit(3)
                .fetch();

    }

}
