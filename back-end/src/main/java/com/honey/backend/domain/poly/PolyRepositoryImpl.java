package com.honey.backend.domain.poly;

import com.honey.backend.domain.assembly.QAssembly;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class PolyRepositoryImpl implements PolyRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    QPoly poly = QPoly.poly;
    QAssembly assembly = QAssembly.assembly;

    @Override
    public Poly findByAssemblyId(Long assemblyId) {
        Poly p = queryFactory
                .select(poly)
                .from(poly)
                .rightJoin(assembly).on(assembly.poly.id.eq(poly.id))
                .where(assembly.id.eq(assemblyId))
                .fetchFirst();

        return p;
    }
}
