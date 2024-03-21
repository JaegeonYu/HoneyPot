package com.honey.backend.domain.assembly;

import com.honey.backend.domain.bill.QBill;
import com.honey.backend.domain.committee.QCommittee;
import com.honey.backend.domain.poly.QPoly;
import com.honey.backend.domain.region.dong.QDong;
import com.honey.backend.domain.region.sido.QSido;
import com.honey.backend.domain.region.sigungu.QSigungu;
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
    QCommittee committee = QCommittee.committee;

    @Override
    public List<Assembly> findAll(String word, Long sidoId, Long sigunguId, Long dongId, Long polyId) {
        List<Assembly> assemblyList = queryFactory
                .select(assembly)
                .from(assembly)
                .innerJoin(dong).on(assembly.electionRegion.eq(dong.electionRegion))
                .innerJoin(sigungu).on(dong.sigungu.id.eq(sigungu.id))
                .innerJoin(sido).on(sigungu.sido.id.eq(sido.id))
                .innerJoin(poly).on(assembly.poly.id.eq(poly.id))
                .where(
                        sidoId != 0 ? sido.id.eq(sidoId) : null,
                        sigunguId != 0 ? sigungu.id.eq(sigunguId) : null,
                        dongId != 0 ? dong.id.eq(dongId) : null,
                        polyId != 0 ? poly.id.eq(polyId) : null,
                        word != null ? assembly.hgName.like("%" + word + "%") : null
                )
                .orderBy(dong.electionRegion.id.asc())
                .fetch().stream().distinct().collect(Collectors.toList());

        return assemblyList;

    }

}
