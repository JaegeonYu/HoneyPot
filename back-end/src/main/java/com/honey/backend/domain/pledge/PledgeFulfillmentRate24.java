package com.honey.backend.domain.pledge;

import com.honey.backend.domain.assembly.Assembly;
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
@Table(name = "pledge_fulfillment_rate_24")
public class PledgeFulfillmentRate24 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "assembly_id")
    private Assembly assembly;

    private String totalPledges;
    private String completedPledges;
    private String ongoingPledges;
    private String pendingPledges;
    private String discardedPledges;
    private String otherPledges;

    private String nationalPledges;
    private String regionalPledges;
    private String legislativePledges;
    private String financialPledges;
    private String inTermPledges;
    private String outTermPledges;
    private String ongoingProjects;
    private String newProjects;

    private String totalRequiredLegislativePledges;
    private String totalLegislativeResolutionCompletedPledges;

    private String totalRequiredBudget;
    private String totalSecuredBudget;
    private String totalExecutedBudget;

}
