package com.honey.backend.controller;

import com.honey.backend.response.AssemblyResponse;
import com.honey.backend.response.PolyResponse;
import com.honey.backend.service.PolyService;
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
public class PolyController {

    private final PolyService polyService;
    @GetMapping()
    public ResponseEntity<List<PolyResponse>> findAll() {

        return ResponseEntity.status(HttpStatus.OK).body(polyService.findAll());
    }

    @GetMapping("/{poly_id}")
    public ResponseEntity<PolyResponse> findById(@PathVariable(name = "poly_id") Long polyId) {

        return ResponseEntity.status(HttpStatus.OK).body(polyService.findById(polyId));
    }

}
