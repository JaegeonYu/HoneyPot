package com.honey.backend.service;

import com.honey.backend.domain.assembly.AssemblyRepository;
import com.honey.backend.domain.bill.Bill;
import com.honey.backend.domain.bill.BillRepository;
import com.honey.backend.domain.committee.CommitteeRepository;
import com.honey.backend.domain.poly.Poly;
import com.honey.backend.domain.poly.PolyRepository;
import com.honey.backend.exception.AssemblyErrorCode;
import com.honey.backend.exception.BaseException;
import com.honey.backend.exception.BillErrorCode;
import com.honey.backend.exception.CommitteeErrorCode;
import com.honey.backend.request.BillRequest;
import com.honey.backend.response.bill.BillProgressResponse;
import com.honey.backend.response.bill.BillResponse;
import com.honey.backend.response.bill.BillStatResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class BillService {

    private final BillRepository billRepository;
    private final AssemblyRepository assemblyRepository;
    private final CommitteeRepository committeeRepository;
    private final PolyRepository polyRepository;

    @Value("${PYTHON_URL}")
    private String pythonUrl;

    public BillResponse findById(Long billId) {
        return insertToBillResponse(billRepository.findById(billId).orElseThrow(
                () -> new BaseException(BillErrorCode.BILL_NOT_FOUND)
        ));
    }

    public List<BillResponse> getBillListAssembly(Long assemblyId, BillRequest billRequest) {
        int page = billRequest.page();
        int limit = billRequest.limit();
        String word = billRequest.word();
        Long cmitId = billRequest.cmit();
        String accept = billRequest.accept();
        List<Bill> billList = billRepository.findAllByAssemblyIdAndCmitId(PageRequest.of(page, limit), word, cmitId, assemblyId, accept).getContent();
        List<BillResponse> billResponseList = new ArrayList<>();
        for (Bill bill : billList) {
            billResponseList.add(insertToBillResponse(bill));
        }
        return billResponseList;
    }

    public BillStatResponse getBillStatAssembly(Long assemblyId, Long cmitId) {
        return billRepository.findBillStatByAssemblyIdAndCmitId(assemblyId, cmitId);
    }

    public List<BillResponse> getBillListPoly(Long polyId, BillRequest billRequest) {
        int page = billRequest.page();
        int limit = billRequest.limit();
        String word = billRequest.word();
        Long cmitId = billRequest.cmit();
        String accept = billRequest.accept();
        List<Bill> billList = billRepository.findAllByPolyIdAndCmitId(PageRequest.of(page, limit), word, cmitId, polyId, accept).getContent();
        List<BillResponse> billResponseList = new ArrayList<>();
        for (Bill bill : billList) {
            billResponseList.add(insertToBillResponse(bill));
        }
        return billResponseList;
    }

    public BillStatResponse getBillStatPoly(Long polyId, Long cmitId) {
        return billRepository.findBillStatByPolyIdAndCmitId(polyId, cmitId);
    }

    @Transactional
    public String getSummary(Long billId) {
        Bill bill = billRepository.findById(billId).orElseThrow(
                () ->
                        new BaseException(BillErrorCode.BILL_NOT_FOUND)

        );
        Map<String, String> bodyMap = new HashMap<>();
        bodyMap.put("content", bill.getTextBody());
        String reponseBody = WebClient.create()
                .post()
                .uri(pythonUrl + "bill")
                .bodyValue(bodyMap)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class).block();

        bill.updateSummary(reponseBody);
        return reponseBody;
    }

    public BillResponse insertToBillResponse(Bill bill) {
        if (bill.getAssembly() == null) throw new BaseException(AssemblyErrorCode.ASSEMBLY_BAD_REQUEST);
        Poly poly = polyRepository.findByAssemblyId(bill.getAssembly().getId());
        if (poly == null) throw new BaseException(BillErrorCode.BILL_NOT_FOUND);
        return new BillResponse(
                bill.getId(),
                bill.getBillNo(),
                bill.getBillName(),
                bill.getProposer(),
                bill.getRstProposer(),
                bill.getAssembly().getId(),
                bill.getCommittee().getId(),
                assemblyRepository.findById(bill.getAssembly().getId()).orElseThrow(
                        () -> new BaseException(AssemblyErrorCode.ASSEMBLY_NOT_FOUND)
                ).getHgName(),
                bill.getPublProposer(),
                committeeRepository.findById(bill.getCommittee().getId()).orElseThrow(
                        () -> new BaseException(CommitteeErrorCode.COMMITTEE_NOT_FOUND)
                ).getCmitName(),
                bill.getProposeDt(),
                bill.getCmtProcDt(),
                bill.getLawProcDt(),
                bill.getProcDt(),
                bill.getProcResult(),
                bill.getDetailLink(),
                bill.getTextBody(),
                bill.getSummary(),
                poly.getId(),
                poly.getPolyName(),
                setStatus(bill)
        );
    }


    public int getCountAssembly(BillRequest billRequest, Long assemblyId) {

        return billRepository.countByAssemblyIdAndCmitId(
                billRequest.word(), billRequest.cmit(), assemblyId, billRequest.accept()).intValue();
    }

    public int getCountPoly(BillRequest billRequest, Long polyId) {

        return billRepository.countByPolyIdAndCmitId(
                billRequest.word(), billRequest.cmit(), polyId).intValue();
    }

    public List<BillResponse> getListByResult(BillRequest billRequest) {

        int page = billRequest.page();
        int limit = billRequest.limit();
        Long cmitId = billRequest.cmit();
        List<Bill> billList = billRepository.findAllByResultAndCmitId(PageRequest.of(page, limit), cmitId).getContent();
        List<BillResponse> billResponseList = new ArrayList<>();
        for (Bill bill : billList) {
            billResponseList.add(insertToBillResponse(bill));
        }
        return billResponseList;
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
        } else {
            result = 3;
            resultName = "철회/폐기";
        }
        if (1 <= result && result <= 2) present = 3;

        else if (result <= 5) present = 0;
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
