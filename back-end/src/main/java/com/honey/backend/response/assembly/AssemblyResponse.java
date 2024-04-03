package com.honey.backend.response.assembly;

import com.querydsl.core.annotations.QueryEntity;

@QueryEntity
public record AssemblyResponse(
        Long assemblyId,
        String assemblyImgUrl,
        String polyName,
        String monaCd,
        String hgName,
        String hjName,
        String engName,
        String birthDate,
        String origName,
        String reeleGbn,
        String units,
        String gender,
        String memTitle,
        String email,
        AttendanceResponse attendanceResponse
) {
}
