package com.honey.backend.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum PolyErrorCode implements ErrorCode{
    POLY_NOT_FOUND(HttpStatus.NOT_FOUND, " POLY_001", "NOT_FOUND"),
    POLY_BAD_REQUEST(HttpStatus.BAD_REQUEST, " POLY_002","BAD_REQUEST")
    ;

    private final HttpStatus status;
    private final String errorCode;
    private final String message;
}
