package com.honey.backend.load.assembly;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public record AssemblyInfoResponse(String HG_NM,
                                   String HJ_NM,
                                   String ENG_NM,
                                   String BTH_GBN_NM,
                                   String BTH_DATE,
                                   String JOB_RES_NM,
                                   String POLY_NM,
                                   String ORIG_NM,
                                   String ELECT_GBN_NM,
                                   String CMIT_NM,
                                   String CMITS,
                                   String REELE_GBN_NM,
                                   String UNITS,
                                   String SEX_GBN_NM,
                                   String TEL_NO,
                                   String E_MAIL,
                                   String HOMEPAGE,
                                   String STAFF,
                                   String SECRETARY,
                                   String SECRETARY2,
                                   String MONA_CD,
                                   String MEM_TITLE,
                                   String ASSEM_ADDR
) {
}
