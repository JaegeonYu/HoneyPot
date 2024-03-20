package com.honey.backend.response;

public record BillResponse(
        Long billId,
        String billNo,
        String billName,
        String proposer,
        String rstProposer,
        Long assemblyId,
        Long cmitId,
        String hgName,
        String publProposer,
        String cmitName,
        String proposeDt,
        String cmitProcDt,
        String lawProcDt,
        String procDt,
        String procResult,
        String detailLink,
        String textBody,
        String summary,
        Long polyId,
        BillProgressResponse billProgressResponse

) {
}
