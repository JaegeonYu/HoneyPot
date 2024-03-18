package com.honey.backend.controller;

import com.honey.backend.load.bill.Response;
import com.honey.backend.response.BillResponse;
import com.honey.backend.service.BillService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bill")
public class BIllController {
    private final BillService billService;

    @GetMapping()
    public ResponseEntity<List<BillResponse>> findAll(@RequestParam Map<String,String> params) {
        Integer page = params.get("page") != null ?Integer.parseInt(params.get("page")) : 0;
        String word = params.get("word");
        return ResponseEntity.status(HttpStatus.OK).body(billService.findAll(page,word));
    }

    @GetMapping("/{bill_id}")
    public ResponseEntity<BillResponse> findById(@PathVariable(name = "bill_id") Long billId){
        return ResponseEntity.status(HttpStatus.OK).body(billService.findById(billId));
    }

    @GetMapping("/committee")
    public ResponseEntity<List<BillResponse>> findAllByCommittee(@RequestParam Map<String,String> params) {
        Integer page = params.get("page") != null ?Integer.parseInt(params.get("page")) : 0;
        String word = params.get("word");
        Long cmitId = params.get("cmitId") != null ? Long.parseLong(params.get("cmitId")) : null;
        return ResponseEntity.status(HttpStatus.OK).body(billService.findAllByCommittee(page,word,cmitId));
    }
}
