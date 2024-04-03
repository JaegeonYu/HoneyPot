package com.honey.backend.response.pledge;

public record PledgeFulfillmentStatus(
        int totalPledges,
        int completedPledges,
        int ongoingPledges,
        int pendingPledges,
        int discardedPledges,
        int otherPledges
) {}