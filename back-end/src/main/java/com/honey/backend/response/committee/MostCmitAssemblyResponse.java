package com.honey.backend.response.committee;

public record MostCmitAssemblyResponse(
        Long assemblyId,
        String hgName,
        Long polyId,
        String polyName
) {
}
