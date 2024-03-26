package com.honey.backend.response.poly;

public record PolyListResponse(
        Long polyId,
        String polyName,
        String logoUrl,
        PolySeatsResponse polySeatsResponse,
        String leader
) {
}
