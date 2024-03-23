package com.honey.backend.controller;

import com.honey.backend.request.BillRequest;
import com.honey.backend.response.*;
import com.honey.backend.service.BillService;
import com.honey.backend.service.CommitteeService;
import com.honey.backend.service.PolyService;
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
@RequestMapping("/poly")
@Tag(name = "Poly Info", description = "Poly Info(정당 정보) API")
public class PolyController {

    private final PolyService polyService;
    private final BillService billService;
    private final CommitteeService committeeService;

    @GetMapping()
    @Operation(summary = "정당 리스트 조회", description = "정당 리스트 API")
    public ResponseEntity<List<PolyResponse>> findAll() {

        return ResponseEntity.status(HttpStatus.OK).body(polyService.findAll());
    }

    @GetMapping("/{poly_id}")
    @Operation(summary = "정당 상세 조회", description = "정당 상세 API")
    public ResponseEntity<PolyResponse> findById(@PathVariable(name = "poly_id") Long polyId) {

        return ResponseEntity.status(HttpStatus.OK).body(polyService.findById(polyId));
    }


    @GetMapping("/{poly_id}/bill")
    @Operation(summary = "국회의원의 발의안 리스트 조회", description = "국회의원의 발의안 리스트 API")
    public ResponseEntity<BillListResponse> findAllBillByAssemblyId(@PathVariable(name = "poly_id") Long polyId, @Valid BillRequest billRequest) {
        List<BillResponse> billResponseList = billService.getBillListPoly(polyId, billRequest);
        BillStatResponse billStatResponse = billService.getBillStatPoly(polyId, billRequest.cmit());
        List<MostCmitAssemblyResponse> mostCmitAssemblyResponseList = polyService.findMostAssemblyByPoly(billRequest.cmit(), polyId);
        List<CommitteeResponse> committeeResponseList = committeeService.findMostCommitteeByPolyId(polyId);

        int searchCount = billService.getCountPoly(billRequest,polyId);

        BillListResponse billListResponse = new BillListResponse(billStatResponse, searchCount, committeeResponseList, mostCmitAssemblyResponseList, billResponseList);

        return billResponseList.isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.status(HttpStatus.OK).body(billListResponse);
    }

}
