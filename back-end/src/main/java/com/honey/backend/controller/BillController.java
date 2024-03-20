package com.honey.backend.controller;

import com.honey.backend.response.BillResponse;
import com.honey.backend.response.BillStatResponse;
import com.honey.backend.service.BillService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bill")
@Tag(name = "Bill Info", description = "Bill Info(의안 정보) API")
public class BillController {
    private final BillService billService;

    @GetMapping()
    @Operation(summary = "의안 리스트 조회", description = "이름 / 의안번호별 의안 리스트 정보 API")
    public ResponseEntity<List<BillResponse>> getBillList(@RequestParam Map<String, String> params) {
        Integer page = params.get("page") != null ? Integer.parseInt(params.get("page")) : 0;
        Integer limit = params.get("limit") != null ? Integer.parseInt(params.get("limit")) : 10;
        String word = params.get("word");
        Long cmitId = params.get("cmitId") != null ? Long.parseLong(params.get("cmitId")) : null;

        List<BillResponse> billResponseList = billService.getBillList(page, limit, word, cmitId);
        return billResponseList.isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).build() : ResponseEntity.status(HttpStatus.OK).body(billResponseList);
    }

    @GetMapping("/{bill_id}")
    @Operation(summary = "의안 상세 조회", description = "의안 상세 API")
    public ResponseEntity<BillResponse> findById(@PathVariable(name = "bill_id") Long billId) {
        return ResponseEntity.status(HttpStatus.OK).body(billService.findById(billId));
    }

    @GetMapping("/stat")
    @Operation(summary = "의안 추진 현황 조회", description = "의안 추진 현황 API")
    public ResponseEntity<BillStatResponse> getBillStat(@RequestParam Map<String, String> params) {
        Long cmitId = params.get("cmitId") != null ? Long.parseLong(params.get("cmitId")) : null;
        return ResponseEntity.status(HttpStatus.OK).body(billService.getBillStat(null, cmitId));
    }
}
