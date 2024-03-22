package com.honey.backend.response;

import java.util.List;

public record BillListResponse(

        BillStatResponse billStatResponse,
        int searchCount,
        List<CommitteeResponse> committeeResponse,
        List<MostCmitAssemblyResponse> mostCmitAssemblyResponseList,
        List<BillResponse> billResponse
) {
}
