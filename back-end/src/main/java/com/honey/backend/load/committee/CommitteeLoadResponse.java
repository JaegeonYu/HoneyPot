package com.honey.backend.load.committee;

public record CommitteeLoadResponse(
        String CMT_DIV_CD,
        String CMT_DIV_NM,
        String HR_DEPT_CD,
        String COMMITTEE_NAME,
        String HG_NM,
        String HG_NM_LIST,
        String LIMIT_CNT,
        String CURR_CNT,
        String POLY99_CNT,
        String POLY_CNT
) {}