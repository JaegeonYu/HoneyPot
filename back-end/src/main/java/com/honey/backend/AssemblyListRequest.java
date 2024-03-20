package com.honey.backend;

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
        @Nullable
        int page,
        @Nullable
        int limit,
        @Nullable
        String word
) {
}
