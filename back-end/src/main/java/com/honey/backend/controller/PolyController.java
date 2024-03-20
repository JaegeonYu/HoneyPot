package com.honey.backend.controller;

import com.honey.backend.response.AssemblyResponse;
import com.honey.backend.response.PolyResponse;
import com.honey.backend.service.PolyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
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

}
