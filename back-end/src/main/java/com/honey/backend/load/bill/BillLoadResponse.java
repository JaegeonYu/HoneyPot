package com.honey.backend.load.bill;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public record BillLoadResponse(
        String BILL_ID,
        String BILL_NO,
        String AGE,
        String BILL_NAME,
        String PROPOSER,
        String PROPOSER_KIND,
        String PROPOSE_DT,
        String CURR_COMMITTEE_ID,
        String CURR_COMMITTEE,
        String COMMITTEE_DT,
        String COMMITTEE_PROC_DT,
        String LINK_URL,
        String RST_PROPOSER,
        String LAW_PROC_RESULT_CD,
        String LAW_PROC_DT,
        String LAW_PRESENT_DT,
        String LAW_SUBMIT_DT,
        String CMT_PROC_RESULT_CD,
        String CMT_PROC_DT,
        String CMT_PRESENT_DT,
        String RST_MONA_CD,
        String PROC_RESULT_CD,
        String PROC_DT
) {}