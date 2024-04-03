package com.honey.backend.response.assembly;

public record MostCmitAssemblyResponse(
        Long assemblyId,
        String assebmlyImgUrl,
        String hgName,
        Long polyId,
        String polyName,
        int count
) {
}
