package com.honey.backend.response;

public record PolyResponse(
        Long polyId,
        String polyName,
        String logoUrl,
        int seats,
        String leader
) {
}
