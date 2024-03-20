package com.honey.backend.response;

import java.util.List;

public record BillListResponse(

        BillStatResponse billStatResponse,
        List<BillResponse> billResponse
) {
}
