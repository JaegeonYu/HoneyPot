package com.honey.backend.controller;

import com.honey.backend.request.AssemblyListRequest;
import com.honey.backend.request.BillRequest;
import com.honey.backend.response.assembly.AssemblyListResponse;
import com.honey.backend.response.bill.BillListResponse;
import com.honey.backend.response.bill.BillResponse;
import com.honey.backend.response.bill.BillStatResponse;
import com.honey.backend.response.committee.CommitteeResponse;
import com.honey.backend.response.committee.MostCmitAssemblyResponse;
import com.honey.backend.response.poly.PolyListResponse;
import com.honey.backend.response.poly.PolyResponse;
import com.honey.backend.service.AssemblyService;
import com.honey.backend.service.BillService;
import com.honey.backend.service.CommitteeService;
import com.honey.backend.service.PolyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/poly")
@Tag(name = "Poly Info", description = "Poly Info(정당 정보) API")
public class    PolyController {

    private final PolyService polyService;
    private final BillService billService;
    private final AssemblyService assemblyService;
    private final CommitteeService committeeService;

    @GetMapping()
    @Operation(summary = "정당 리스트 조회", description = "정당 리스트 API")
    public ResponseEntity<List<PolyListResponse>> findAll() {

        return ResponseEntity.status(HttpStatus.OK).body(polyService.findAll());
    }

    @GetMapping("/{poly_id}")
    @Operation(summary = "정당 상세 조회", description = "정당 상세 API")
    public ResponseEntity<PolyResponse> findById(@PathVariable(name = "poly_id") Long polyId) {
        PolyResponse polyResponse = polyService.findById(polyId);
        return ResponseEntity.status(HttpStatus.OK).body(polyResponse);
    }

    @GetMapping("/{poly_id}/assembly")
    @Operation(summary = "정당 소속 국회의원 리스트 조회", description = "정당 소속 국회의원 리스트 API")
    public ResponseEntity<AssemblyListResponse> findAllAssemblyByPolyId(@PathVariable(name = "poly_id") Long polyId, @RequestParam Map<String, String> params) {
        int page = params.get("page") != null ? Integer.parseInt(params.get("page")) : 0;
        int limit = params.get("page") != null ? Integer.parseInt(params.get("limit")) : 10;

        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findAll(new AssemblyListRequest(0L, 0L, 0L, polyId, page, limit, null)));
    }


    @GetMapping("/{poly_id}/bill")
    @Operation(summary = "국회의원의 발의안 리스트 조회", description = "국회의원의 발의안 리스트 API")
    public ResponseEntity<BillListResponse> findAllBillByAssemblyId(@PathVariable(name = "poly_id") Long polyId, @Valid BillRequest billRequest) {
        List<BillResponse> billResponseList = billService.getBillListPoly(polyId, billRequest);
        BillStatResponse billStatResponse = billService.getBillStatPoly(polyId, billRequest.cmit());
        List<MostCmitAssemblyResponse> mostCmitAssemblyResponseList = polyService.findMostAssemblyByPoly(billRequest.cmit(), polyId);
        List<CommitteeResponse> committeeResponseList = committeeService.findMostCommitteeByPolyId(polyId);

        int searchCount = billService.getCountPoly(billRequest, polyId);

        BillListResponse billListResponse = new BillListResponse(billStatResponse, searchCount, committeeResponseList, mostCmitAssemblyResponseList, billResponseList);

        return billResponseList.isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.status(HttpStatus.OK).body(billListResponse);
    }
}
