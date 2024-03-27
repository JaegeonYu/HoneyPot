package com.honey.backend.response.assembly;

public record AssemblyAttendanceResponse(
        Long assemblyId,
        String hgName,
        int attendance
) {
}
