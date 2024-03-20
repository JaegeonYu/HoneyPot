package com.honey.backend.service;

import com.honey.backend.domain.assembly.AssemblyRepository;
import com.honey.backend.domain.bill.Bill;
import com.honey.backend.domain.bill.BillRepository;
import com.honey.backend.domain.committee.CommitteeRepository;
import com.honey.backend.response.BillResponse;
import com.honey.backend.response.BillStatResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BillService {

    private final BillRepository billRepository;
    private final AssemblyRepository assemblyRepository;
    private final CommitteeRepository committeeRepository;


    public BillResponse findById(Long billId) {
        return insertToBillResponse(billRepository.findById(billId).orElseThrow());
    }

    public List<BillResponse> getBillList(Integer page, Integer limit, String word, Long cmitId) {
        List<Bill> billList = billRepository.findAllByCommittee(PageRequest.of(page, limit), word, cmitId).getContent();
        List<BillResponse> billResponseList = new ArrayList<>();
        for (Bill bill : billList) {
            billResponseList.add(insertToBillResponse(bill));
        }
        return billResponseList;
    }

    public BillStatResponse getBillStat(Long assemblyId, Long cmitId) {
        return billRepository.findBillStatByAssemblyIdAndCmitId(assemblyId, cmitId);
    }

    public BillResponse insertToBillResponse(Bill bill) {

        return new BillResponse(
                bill.getId(),
                bill.getBillNo(),
                bill.getBillName(),
                bill.getProposer(),
                bill.getRstProposer(),
                assemblyRepository.findById(bill.getAssembly().getId()).orElseThrow().getHgName(),
                bill.getPublProposer(),
                committeeRepository.findById(bill.getCommittee().getId()).orElseThrow().getCmitName(),
                bill.getCmtProcDt(),
                bill.getCmtPresentDt(),
                bill.getCommitteeDt(),
                bill.getCmtProcResultCd(),
                bill.getLawProcDt(),
                bill.getLawPresentDt(),
                bill.getLawSubmitDt(),
                bill.getLawProcResultCd(),
                bill.getProposeDt(),
                bill.getProcDt(),
                bill.getProcResult(),
                bill.getDetailLink(),
                bill.getTextBody()
        );
    }
}
