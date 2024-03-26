package com.honey.backend.response.assembly;

import java.util.List;

public record AssemblyListResponse(
        List<AssemblyCardResponse> assemblyCardResponseList,
        int count
) {
}
