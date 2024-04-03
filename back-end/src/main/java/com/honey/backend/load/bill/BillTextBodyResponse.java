package com.honey.backend.load.bill;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public record BillTextBodyResponse(
        String billId,
        String billNo,
        String summary
) {
}
