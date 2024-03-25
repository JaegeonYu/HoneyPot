package com.honey.backend.response.pledge;

public record PledgeDetailResponse(
        Long id,
        int turn,
        String pledgeName,
        String pledgeSummary,
        String natureDivisionNationalRegional,
        String natureDivisionLegislationFinance,
        String fulfillmentRate,
        String requiredBudgetAmount,
        String securedBudgetAmount,
        String otherImplementationBasis
) {}