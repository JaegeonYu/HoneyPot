package com.honey.backend.controller;

import com.honey.backend.request.AssemblyListRequest;
import com.honey.backend.request.BillRequest;
import com.honey.backend.request.PledgeRequest;
import com.honey.backend.response.*;
import com.honey.backend.response.pledge.PledgeListResponse;
import com.honey.backend.response.pledge.PledgeResponse;
import com.honey.backend.service.AssemblyService;
import com.honey.backend.service.BillService;
import com.honey.backend.service.CommitteeService;
import com.honey.backend.service.PledgeService;
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
@RequestMapping("/assembly")
@Tag(name = "Assembly Info", description = "Assembly Info(국회의원 정보) API")
public class AssemblyController {

    private final AssemblyService assemblyService;
    private final BillService billService;
    private final CommitteeService committeeService;
    private final PledgeService pledgeService;

    @GetMapping("")
    @Operation(summary = "국회의원 리스트 조회", description = "지역/ 이름 / 정당별 국회  의원 리스트 API")
    public ResponseEntity<AssemblyListResponse> findAllAssembly(@Valid AssemblyListRequest assemblyListRequest) {
        AssemblyListResponse assemblyListResponse = assemblyService.findAll(assemblyListRequest);
        return assemblyListResponse.assemblyCardResponseList().isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.status(HttpStatus.OK).body(assemblyListResponse);
    }

    @GetMapping("/{assembly_id}")
    @Operation(summary = "국회의원 상세 조회", description = "국회의원 상세 API")
    public ResponseEntity<AssemblyResponse> findById(@PathVariable(name = "assembly_id") Long assemblyId) {

        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findById(assemblyId));
    }

    @GetMapping("/{assembly_id}/bill")
    @Operation(summary = "국회의원의 발의안 리스트 조회", description = "국회의원의 발의안 리스트 API")
    public ResponseEntity<BillListResponse> findAllBillByAssemblyId(@PathVariable(name = "assembly_id") Long assemblyId, @Valid BillRequest billRequest) {
        List<BillResponse> billResponseList = billService.getBillListAssembly(assemblyId, billRequest);
        BillStatResponse billStatResponse = billService.getBillStatAssembly(assemblyId, billRequest.cmit());
        List<CommitteeResponse> committeeResponseList = committeeService.findMostCommitteeByAssemblyId(assemblyId);
        int searchCount = billService.getCountAssembly(billRequest, assemblyId);
        BillListResponse billListResponse = new BillListResponse(billStatResponse, searchCount, committeeResponseList, null, billResponseList);
        return billResponseList.isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.status(HttpStatus.OK).body(billListResponse);
    }

    @GetMapping("/{assembly_id}/sns")
    @Operation(summary = "국회의원의 SNS 정보 조회", description = "국회의원의 SNS API")
    public ResponseEntity<SnsResponse> findByAssemblyId(@PathVariable(name = "assembly_id") Long assemblyId) {

        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findSnsByAssemblyId(assemblyId));
    }

    @GetMapping("/{assembly_id}/most")
    @Operation(summary = "국회의원의 가장 많이 발의한 분야 리스트 조회", description = "국회의원의 가장 많이 발의한 분야 리스트 API")
    public ResponseEntity<List<CommitteeResponse>> findMostCmitByAssemblyId(@PathVariable(name = ("assembly_id")) Long assemblyId) {

        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findMostCommitteeByAssemblyId(assemblyId));
    }

    @GetMapping("/{assembly_id}/pledgeList")
    @Operation(summary = "국회의원의 공약 리스트 조회", description = "국회의원의 공약 리스트 API")
    public ResponseEntity<PledgeListResponse> findPledgeList(@PathVariable(name = ("assembly_id")) Long assemblyId, PledgeRequest pledgeRequest) {
        PledgeResponse pledgeResponse = pledgeService.getPledge(assemblyId);
        PledgeListResponse pledgeDetailResponseList = pledgeService.getPledgeDetailList(pledgeRequest, pledgeResponse.id());
        return pledgeDetailResponseList.pledgeDetailResponse().isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).body(pledgeDetailResponseList) : ResponseEntity.status(HttpStatus.OK).body(pledgeDetailResponseList);
    }

    @GetMapping("/{assembly_id}/pledgeRateInfo")
    @Operation(summary = "국회의원의 공약 이행률 조회", description = "국회의원의 공약 이행률 API")
    public ResponseEntity<PledgeResponse> findPledge(@PathVariable(name = ("assembly_id")) Long assemblyId) {

        return ResponseEntity.status(HttpStatus.OK).body(pledgeService.getPledge(assemblyId));
    }
}

