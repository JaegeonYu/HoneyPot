package com.honey.backend.response.poly;

import com.honey.backend.response.assembly.AssemblyAttendanceResponse;
import com.honey.backend.response.assembly.AssemblyResponse;

import java.util.List;

public record PolyAttendanceResponse(
        int averageAttendance,
        int totalAverageAttendance,
        List<AssemblyAttendanceResponse> topAttendanceRate,
        List<AssemblyAttendanceResponse> bottomAttendanceRate
) {
}
