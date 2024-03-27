package com.honey.backend.response.pledge;

public record PledgeResponse(
        Long id,
        PledgeFulfillmentStatus pledgeFulfillmentStatus
) {
}