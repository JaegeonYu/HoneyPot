package com.honey.backend.load.sns;

import com.honey.backend.domain.assembly.Assembly;

public record SnsLoadResponse(
        String HG_NM,
        String F_URL,
        String T_URL,
        String Y_URL,
        String B_URL,
        String MONA_CD


) {
}
