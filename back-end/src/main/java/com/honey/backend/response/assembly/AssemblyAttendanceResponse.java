package com.honey.backend.response.assembly;

public record AssemblyAttendanceResponse(
        Long assemblyId,
        String assemblyImgUrl,
        String hgName,
        Long polyId,
        int attendance
) {
}
