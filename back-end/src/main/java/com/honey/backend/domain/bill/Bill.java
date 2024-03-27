package com.honey.backend.domain.bill;

import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.committee.Committee;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Getter
@AllArgsConstructor
@RequiredArgsConstructor
@DynamicUpdate
@Table(name = "bill")
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bill_id")
    private Long id;

    private String billNo;
    private String billName;
    private String proposer;
    private String rstProposer;

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "assembly_id")
    @Nullable
    private Assembly assembly;

    private String publProposer;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "cmit_id")
    private Committee committee;

    private String cmtProcDt;
    private String cmtPresentDt;
    private String committeeDt;
    private String cmtProcResultCd;
    private String lawProcDt;
    private String lawPresentDt;
    private String lawSubmitDt;
    private String lawProcResultCd;
    private String proposeDt;
    private String procDt;
    private String procResult;
    private String detailLink;
    @Lob
    @Column(length = 65535)
    private String textBody;
    @Lob
    @Column(length = 65535)
    private String summary;

    private Bill(String billNo, String billName, String proposer, String rstProposer, Assembly assembly, String publProposer, Committee committee, String cmtProcDt, String cmtPresentDt, String committeeDt, String cmtProcResultCd, String lawProcDt, String lawPresentDt, String lawSubmitDt, String lawProcResultCd, String proposeDt, String procDt, String procResult, String detailLink, String textBody) {
        this.billNo = billNo;
        this.billName = billName;
        this.proposer = proposer;
        this.rstProposer = rstProposer;
        this.assembly = assembly;
        this.publProposer = publProposer;
        this.committee = committee;
        this.cmtProcDt = cmtProcDt;
        this.cmtPresentDt = cmtPresentDt;
        this.committeeDt = committeeDt;
        this.cmtProcResultCd = cmtProcResultCd;
        this.lawProcDt = lawProcDt;
        this.lawPresentDt = lawPresentDt;
        this.lawSubmitDt = lawSubmitDt;
        this.lawProcResultCd = lawProcResultCd;
        this.proposeDt = proposeDt;
        this.procDt = procDt;
        this.procResult = procResult;
        this.detailLink = detailLink;
        this.textBody = textBody;

    }

    public static Bill createBill(String billNo, String billName, String proposer, String rstProposer, Assembly assembly, String publProposer, Committee committee, String cmtProcDt, String cmtPresentDt, String committeeDt, String cmtProcResultCd, String lawProcDt, String lawPresentDt, String lawSubmitDt, String lawProcResultCd, String proposeDt, String procDt, String procResult, String detailLink, String textBody) {
        return new Bill(billNo, billName, proposer, rstProposer, assembly, publProposer, committee, cmtProcDt, cmtPresentDt, committeeDt, cmtProcResultCd, lawProcDt, lawPresentDt, lawSubmitDt, lawProcResultCd, proposeDt, procDt, procResult, detailLink, textBody);
    }

    public void updateTextBody(String textBody) {
        this.textBody = textBody;
    }

    public void updateSummary(String summary) {
        this.summary = summary;
    }

    public void updateSchedule(Bill bill) {

        this.billName = bill.getBillName();
        this.proposer = bill.getProposer();
        this.rstProposer = bill.getRstProposer();
        this.assembly = bill.getAssembly();
        this.publProposer = bill.getPublProposer();
        this.committee = bill.getCommittee();
        this.cmtProcDt = bill.getCmtProcDt();
        this.cmtPresentDt = bill.getCmtPresentDt();
        this.committeeDt = getCommitteeDt();
        this.cmtProcResultCd = getCmtProcResultCd();
        this.lawProcDt = getLawProcDt();
        this.lawPresentDt = getLawPresentDt();
        this.lawSubmitDt = getLawSubmitDt();
        this.lawProcResultCd = getLawProcResultCd();
        this.proposeDt = getProposeDt();
        this.procDt = getProcDt();
        this.procResult = getProcResult();
        this.detailLink = getDetailLink();
    }
}
