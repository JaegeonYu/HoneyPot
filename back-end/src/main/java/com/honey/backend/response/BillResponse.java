package com.honey.backend.response;

public record BillResponse(
        Long billId,
        String billNo,
        String billName,
        String proposer,
        String rstProposer,
        String hgName,
        String publProposer,
        String cmitName,
        String cmtProcDt,
        String cmtPresentDt,
        String committeeDt,
        String cmtProcResultCd,
        String lawProcDt,
        String lawPresentDt,
        String lawSubmitDt,
        String lawProcResultCd,
        String proposeDt,
        String procDt,
        String procResult,
        String detailLink,
        String textBody
) {
}
