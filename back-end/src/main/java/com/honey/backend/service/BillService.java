package com.honey.backend.service;

import com.honey.backend.domain.assembly.AssemblyRepository;
import com.honey.backend.domain.bill.Bill;
import com.honey.backend.domain.bill.BillRepository;
import com.honey.backend.domain.committee.Committee;
import com.honey.backend.domain.committee.CommitteeRepository;
import com.honey.backend.domain.poly.PolyRepository;
import com.honey.backend.request.BillRequest;
import com.honey.backend.response.BillProgressResponse;
import com.honey.backend.response.BillResponse;
import com.honey.backend.response.BillStatResponse;
import com.honey.backend.response.CommitteeResponse;
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
    private final PolyRepository polyRepository;

    public BillResponse findById(Long billId) {
        return insertToBillResponse(billRepository.findById(billId).orElseThrow());
    }

    public List<BillResponse> getBillList(Long assemblyId, BillRequest billRequest) {
        int page = billRequest.page();
        int limit = billRequest.limit();
        String word = billRequest.word();
        Long cmitId = billRequest.cmit();
        List<Bill> billList = billRepository.findAllByAssemblyIdAndCmitId(PageRequest.of(page, limit), word, cmitId, assemblyId).getContent();
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
                bill.getAssembly().getId(),
                bill.getCommittee().getId(),
                assemblyRepository.findById(bill.getAssembly().getId()).orElseThrow().getHgName(),
                bill.getPublProposer(),
                committeeRepository.findById(bill.getCommittee().getId()).orElseThrow().getCmitName(),
                bill.getProposeDt(),
                bill.getCmtProcDt(),
                bill.getLawProcDt(),
                bill.getProcDt(),
                bill.getProcResult(),
                bill.getDetailLink(),
                bill.getTextBody(),
                bill.getSummary(),
                polyRepository.findByAssemblyId(bill.getAssembly().getId()).getId(),
                polyRepository.findByAssemblyId(bill.getAssembly().getId()).getPolyName(),
                setStatus(bill)
        );
    }

    private BillProgressResponse setStatus(Bill bill) {

        String procResult = bill.getProcResult();
        // 알수없음 0 , 가결 1, 부결 2, 철회/폐기 3, 대안반영 4, 수정안반영 5, 계류 6
        int result = 0;
        int present;
        String resultName;

        if (procResult == null) {
            result = 6;
            resultName = "계류";
        } else if (procResult.contains("가결")) {
            result = 1;
            resultName = "가결";
        } else if (procResult.contains("부결")) {
            result = 2;
            resultName = "부결";
        } else if (procResult.contains("대안반영")) {
            result = 4;
            resultName = "대안반영";
        } else if (procResult.contains("수정안반영")) {
            result = 5;
            resultName = "수정안반영";
        }
        else {
            result = 3;
            resultName = "철회/폐기";
        }
        if (1 <= result && result <= 2) present = 3;

        else if ( result <= 5) present = 0;
            // 미배정 0 , 상임위 1, 법사위 2, 본회의 3  (결과기준)
        else present = setPresent(bill);

        return new BillProgressResponse("R" + result, resultName, "P" + present);
    }

    private int setPresent(Bill bill) {
        String proposeDt = bill.getProposeDt();

        String cmitSubmitDt = bill.getCommitteeDt();
        String cmitProcDt = bill.getCmtProcDt();

        String lawSubmitDt = bill.getLawSubmitDt();
        String lawProcDt = bill.getLawProcDt();

        String procDt = bill.getProcDt();
        int present;
        if (proposeDt == null) present = 0;
        else {
            present =
                    cmitSubmitDt == null ? 0 :
                            cmitProcDt == null ? 1 :
                                    lawSubmitDt == null ? 1 :
                                            lawProcDt == null ? 2 :
                                                    procDt == null ? 2 : 3;
        }
        return present;
    }

}
