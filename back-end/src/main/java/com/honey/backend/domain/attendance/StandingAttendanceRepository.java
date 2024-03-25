package com.honey.backend.domain.attendance;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StandingAttendanceRepository extends JpaRepository<StandingAttendance,Long> {


    Optional<StandingAttendance> findByAssemblyId(Long assemblyId);
}
