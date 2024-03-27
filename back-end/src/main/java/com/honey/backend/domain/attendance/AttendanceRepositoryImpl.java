package com.honey.backend.domain.attendance;

import com.honey.backend.domain.assembly.QAssembly;
import com.honey.backend.domain.bill.QBill;
import com.honey.backend.domain.committee.QCommittee;
import com.honey.backend.domain.poly.QPoly;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class AttendanceRepositoryImpl implements AttendanceRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    QBill bill = QBill.bill;
    QAssembly assembly = QAssembly.assembly;
    QCommittee committee = QCommittee.committee;
    QPoly poly = QPoly.poly;
    QAttendance attendance = QAttendance.attendance1;

    @Override
    public Optional<List<Attendance>> findAllByPolyId(Long polyId) {
        List<Attendance> attendanceList = queryFactory
                .select(attendance)
                .from(attendance)
                .join(assembly).on(assembly.id.eq(attendance.assembly.id))
                .where(polyId != null?assembly.poly.id.eq(polyId):null)
                .fetch();

        return Optional.of(attendanceList);
    }
}
