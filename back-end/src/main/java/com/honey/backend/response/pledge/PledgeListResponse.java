package com.honey.backend.response.pledge;

import java.util.List;

public record PledgeListResponse(
        int totalCount,
        List<PledgeDetailResponse> pledgeDetailResponse
) {
}
