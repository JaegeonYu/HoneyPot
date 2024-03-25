package com.honey.backend.domain.attendance;

import com.honey.backend.domain.assembly.Assembly;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Entity
@Getter
@RequiredArgsConstructor
@Table(name = "standing_committee_attendance_rate")
public class StandingAttendance {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "assembly_id")
    private Assembly assembly;
    
    private int absence;
    private int absenceReport;
    private int attendance;
    private int businessTrip;
    private int leaves;
    private int meetingDays;
}
