package com.honey.backend.controller;

import com.honey.backend.request.RegionNameRequest;
import com.honey.backend.response.RegionNameResponse;
import com.honey.backend.response.RegionResponse;
import com.honey.backend.service.RegionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/region")
public class RegionController {

    private final RegionService regionService;

    @GetMapping("/sido")
    public ResponseEntity<List<RegionResponse>> getSidoList() {
        return ResponseEntity.status(HttpStatus.OK).body(regionService.getSidoList());
    }

    @GetMapping("/sigungu")
    public ResponseEntity<List<RegionResponse>> getSigunguList(@RequestParam Long sido) {
        return ResponseEntity.status(HttpStatus.OK).body(regionService.getSigunguList(sido));

    }

    @GetMapping("/dong")
    public ResponseEntity<List<RegionResponse>> getDongList(@RequestParam Long sigungu) {
        return ResponseEntity.status(HttpStatus.OK).body(regionService.getDongList(sigungu));
    }

    @GetMapping("/name")
    public ResponseEntity<RegionNameResponse> getDongList(@Valid RegionNameRequest regionNameRequest) {
        return ResponseEntity.status(HttpStatus.OK).body(regionService.getRegionName(regionNameRequest));
    }

}