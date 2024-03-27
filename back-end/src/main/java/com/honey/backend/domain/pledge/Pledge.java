package com.honey.backend.domain.pledge;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@RequiredArgsConstructor
@Transactional
@Table(name = "detailed_pledge_execution_status")
public class Pledge {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private int turn;
    private String pledgeName;
    private String pledgeSummary;
    private String natureDivisionNationalRegional;
    private String natureDivisionLegislationFinance;
    private String contentDivisionInTermOutTerm;
    private String contentDivisionContinuedNew;
    private String fulfillmentRate;
    private String legislativeName;
    private String proposal;
    private String standingCommittee;
    private String generalScope;
    private String plenarySessionResolution;
    private String legislativeDetails;
    private String requiredBudgetAmount;
    private String securedBudgetAmount;
    private String executedBudgetAmount;
    private String securedDetails;
    private String executionDetails;
    private String otherImplementationBasis;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "pledge_fulfillment_rate_id")
    private PledgeFulfillmentRate pledgeFulfillmentRate;

    // 생성자, getter, setter 등 필요한 코드는 생략
}
