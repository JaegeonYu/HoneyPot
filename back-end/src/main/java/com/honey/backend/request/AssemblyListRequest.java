package com.honey.backend.request;

import jakarta.annotation.Nullable;

public record AssemblyListRequest(
        @Nullable
        Long sido,
        @Nullable
        Long sigungu,
        @Nullable
        Long dong,
        @Nullable
        Long poly,

        int page,

        int limit,
        @Nullable
        String word
) {
}
