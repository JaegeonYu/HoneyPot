package com.honey.backend.domain.attendance;

import java.util.List;
import java.util.Optional;

public interface AttendanceRepositoryCustom {


    Optional<List<Attendance>> findAllByPolyId(Long polyId);

}
