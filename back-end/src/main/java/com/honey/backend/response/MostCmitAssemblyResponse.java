package com.honey.backend.response;

public record MostCmitAssemblyResponse(
        Long assemblyId,
        String hgName,
        Long polyId,
        String polyName
) {
}
