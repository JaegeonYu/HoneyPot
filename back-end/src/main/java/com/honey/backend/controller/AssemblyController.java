package com.honey.backend.controller;

import com.honey.backend.exception.AssemblyErrorCode;
import com.honey.backend.response.AssemblyListResponse;
import com.honey.backend.response.AssemblyResponse;
import com.honey.backend.response.BillResponse;
import com.honey.backend.response.SnsResponse;
import com.honey.backend.service.AssemblyService;
import jakarta.annotation.Nullable;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/assembly")

public class AssemblyController {

    private final AssemblyService assemblyService;


    @GetMapping()
    public ResponseEntity<List<AssemblyListResponse>> findAllAssemblyByRegion(@RequestParam Map<String, String> params) {
        String sidoName = params.get("sido");
        String sigunguName = params.get("sigungu");
        String dongName = params.get("dong");
        String word = params.get("word");
        Integer page = params.get("page") != null ? Integer.parseInt(params.get("page")) : 0;
        Integer limit = params.get("limit") != null ? Integer.parseInt(params.get("limit")) : 10;
        String poly = params.get("poly");

        List<AssemblyListResponse> assemblyListResponseList = assemblyService.findAll(sidoName,sigunguName,dongName,page,limit,word,poly);
        return assemblyListResponseList.isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.status(HttpStatus.OK).body(assemblyListResponseList);
    }

    @GetMapping("/{assembly_id}")
    public ResponseEntity<AssemblyResponse> findById(@PathVariable(name = "assembly_id") Long assemblyId) {

        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findById(assemblyId));
    }

    @GetMapping("/{assembly_id}/bill")
    public ResponseEntity<List<BillResponse>> findAllBillByAssemblyId(@PathVariable(name = "assembly_id") Long assemblyId, @RequestParam(required = false) Long cmitId) {

        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findAllBillByAssemblyIdAndCmitId(assemblyId, cmitId));
    }

    @GetMapping("/{assembly_id}/sns")
    public ResponseEntity<SnsResponse> findByAssemblyId(@PathVariable(name = "assembly_id") Long assemblyId) {

        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findSnsByAssemblyId(assemblyId));
    }
}
