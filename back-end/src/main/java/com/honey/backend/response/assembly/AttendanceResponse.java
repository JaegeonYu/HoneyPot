package com.honey.backend.response.assembly;

public record AttendanceResponse(

        int attendances,
        int absence,
        int standingAttendances,
        int standingAbsence

) {
}
