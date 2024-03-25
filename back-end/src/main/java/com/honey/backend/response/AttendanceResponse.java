package com.honey.backend.response;

public record AttendanceResponse(

        int attendances,
        int absence,
        int standingAttendances,
        int standingAbsence

) {
}
