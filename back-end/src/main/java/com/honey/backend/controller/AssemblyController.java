package com.honey.backend.controller;

import com.honey.backend.response.AssemblyListResponse;
import com.honey.backend.response.AssemblyResponse;
import com.honey.backend.response.BillResponse;
import com.honey.backend.service.AssemblyService;
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


    @GetMapping("/region")
    public ResponseEntity<List<AssemblyListResponse>> findAllAssemblyByRegion(@RequestParam Map<String, String> params) {
        String sidoName = params.get("sido");
        String sigunguName = params.get("sigungu");
        String dongName = params.get("dong");
        String word = params.get("word");
        Integer page = params.get("page") != null ? Integer.parseInt(params.get("page")) : 0;
        Integer limit = params.get("limit") != null ? Integer.parseInt(params.get("limit")) : 10;
        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findAllByRegion(sidoName, sigunguName, dongName, page, limit, word));
    }

    @GetMapping("/poly")
    public ResponseEntity<List<AssemblyListResponse>> findAllAssemblyByPoly(@RequestParam Map<String, String> params) {
        String word = params.get("word");
        Long polyId = params.get("polyId") != null ? Long.parseLong(params.get("polyId")) : null;
        Integer page = params.get("page") != null ? Integer.parseInt(params.get("page")) : 0;
        Integer limit = params.get("limit") != null ? Integer.parseInt(params.get("limit")) : 10;
        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findAllByPoly(word, polyId, page, limit));
    }

    @GetMapping("/cmit")
    public ResponseEntity<List<AssemblyListResponse>> findAllAssemblyByCommittee(@RequestParam Map<String, String> params) {
        String word = params.get("word");
        Long cmitId = params.get("cmitId") != null ? Long.parseLong(params.get("cmitId")) : null;
        Integer page = params.get("page") != null ? Integer.parseInt(params.get("page")) : 0;
        Integer limit = params.get("limit") != null ? Integer.parseInt(params.get("limit")) : 10;
        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findAllByCommittee(word, cmitId, page, limit));
    }

    @GetMapping("/{assembly_id}")
    public ResponseEntity<AssemblyResponse> findById(@PathVariable(name = "assembly_id") Long assemblyId) {

        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findById(assemblyId));
    }

    @GetMapping("/{assembly_id}/bill")
    public ResponseEntity<List<BillResponse>> findAllBillById(@PathVariable(name = "assembly_id") Long assemblyId) {

        return ResponseEntity.status(HttpStatus.OK).body(assemblyService.findBillByAssemblyId(assemblyId));
    }
}
