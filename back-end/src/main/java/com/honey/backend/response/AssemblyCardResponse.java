package com.honey.backend.response;

public record AssemblyCardResponse(
        Long assemblyId,
        String assemblyImgUrl,
        String polyName,
        String monaCd,
        String hgName,
        String origName
) {
}
