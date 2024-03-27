package com.honey.backend.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum PledgeErrorCode implements ErrorCode{
    PLEDGE_NOT_FOUND(HttpStatus.NOT_FOUND, " PLEDGE_001", "NOT_FOUND"),
    PLEDGE_BAD_REQUEST(HttpStatus.BAD_REQUEST, " PLEDGE_002","BAD_REQUEST")
    ;

    private final HttpStatus status;
    private final String errorCode;
    private final String message;
}
