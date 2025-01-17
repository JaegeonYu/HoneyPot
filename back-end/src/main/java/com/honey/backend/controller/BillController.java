package com.honey.backend.controller;

import com.honey.backend.request.BillRequest;
import com.honey.backend.response.bill.BillListResponse;
import com.honey.backend.response.bill.BillResponse;
import com.honey.backend.response.bill.BillStatResponse;
import com.honey.backend.response.committee.CommitteeResponse;
import com.honey.backend.response.assembly.MostCmitAssemblyResponse;
import com.honey.backend.service.AssemblyService;
import com.honey.backend.service.BillService;
import com.honey.backend.service.CommitteeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bill")
@Tag(name = "Bill Info", description = "Bill Info(의안 정보) API")
public class BillController {
    private final AssemblyService assemblyService;
    private final BillService billService;
    private final CommitteeService committeeService;

    @GetMapping()
    @Operation(summary = "의안 리스트 조회", description = "이름 / 의안번호별 의안 리스트 정보 API")
    public ResponseEntity<BillListResponse> getBillList(@Valid BillRequest billRequest) {

        List<BillResponse> billResponseList = billService.getBillListAssembly(null, billRequest);
        BillStatResponse billStatResponse = billService.getBillStatAssembly(null, billRequest.cmit());
        List<CommitteeResponse> committeeResponse = committeeService.findMostCommittee();
        List<MostCmitAssemblyResponse> mostCmitAssemblyResponseList = assemblyService.findMostAssembly(billRequest.cmit());
        int searchCount = billService.getCountAssembly(billRequest, null);
        BillListResponse billListResponse = new BillListResponse(billStatResponse, searchCount, committeeResponse, mostCmitAssemblyResponseList, billResponseList);
        return billResponseList.isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).body(billListResponse) : ResponseEntity.status(HttpStatus.OK).body(billListResponse);
    }

    @GetMapping("/accept")
    @Operation(summary = "가결된 의안 리스트 조회", description = "가결된 의안의 이름 / 의안번호별 정보 API")
    public ResponseEntity<List<BillResponse>> getBillAcceptList(@Valid BillRequest billRequest) {

        List<BillResponse> billResponseList = billService.getListByResult(billRequest);
        return billResponseList.isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).body(billResponseList) : ResponseEntity.status(HttpStatus.OK).body(billResponseList);
    }


    @GetMapping("/{bill_id}")
    @Operation(summary = "의안 상세 조회", description = "의안 상세 API")
    public ResponseEntity<BillResponse> findById(@PathVariable(name = "bill_id") Long billId) {
        return ResponseEntity.status(HttpStatus.OK).body(billService.findById(billId));
    }

    @GetMapping("/{bill_id}/summary")
    @Operation(summary = "의안 요약 조회", description = "의안 요약 API")
    public ResponseEntity<String> findBySummary(@PathVariable(name = "bill_id") Long billId) {
        return ResponseEntity.status(HttpStatus.OK).body(billService.getSummary(billId));
    }
}
