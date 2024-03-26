package com.honey.backend.response.bill;

import com.honey.backend.response.committee.CommitteeResponse;
import com.honey.backend.response.committee.MostCmitAssemblyResponse;

import java.util.List;

public record BillListResponse(

        BillStatResponse billStatResponse,
        int searchCount,
        List<CommitteeResponse> committeeResponse,
        List<MostCmitAssemblyResponse> mostCmitAssemblyResponseList,
        List<BillResponse> billResponse
) {
}
