package com.honey.backend.domain.attendance;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> , AttendanceRepositoryCustom{

    Optional<Attendance> findByAssemblyId(Long assemblyId);
}
