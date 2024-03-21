package com.honey.backend.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum RegionErrorCode implements ErrorCode {


    SIDO_NOT_FOUND(HttpStatus.NOT_FOUND, "REGION_001", "NOT_FOUND"),
    SIGUNGU_NOT_FOUND(HttpStatus.NOT_FOUND, "REGION_002", "NOT_FOUND"),
    DONG_NOT_FOUND(HttpStatus.NOT_FOUND, "REGION_003", "NOT_FOUND");


    private final HttpStatus status;
    private final String errorCode;
    private final String message;


    }
