package com.honey.backend.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum BillErrorCode implements ErrorCode{
    BILL_NOT_FOUND(HttpStatus.NOT_FOUND, " BILL_001", "NOT_FOUND"),
    BILL_BAD_REQUEST(HttpStatus.BAD_REQUEST, " BILL_002","BAD_REQUEST")
    ;

    private final HttpStatus status;
    private final String errorCode;
    private final String message;
}