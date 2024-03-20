package com.honey.backend.request;

import jakarta.annotation.Nullable;

public record BillRequest(

        int page,
        int limit,
        @Nullable
        Long cmit,
        @Nullable
        String word
) {

}
