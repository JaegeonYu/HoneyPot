package com.honey.backend.request;

import jakarta.annotation.Nullable;
import org.springframework.boot.context.properties.bind.DefaultValue;

public record BillRequest(

        int page,
        int limit,

        Long cmit,
        @Nullable
        String word
) {

}
