package com.honey.backend.response.poly;

public record PolyResponse(
        Long polyId,
        String polyName,
        String logoUrl,
        int seats,
        String leader
) {
}
