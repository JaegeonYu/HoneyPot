package com.honey.backend.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum CommitteeErrorCode implements ErrorCode{
    COMMITTEE_NOT_FOUND(HttpStatus.NOT_FOUND, " COMMITTEE_001", "NOT_FOUND"),
    COMMITTEE_BAD_REQUEST(HttpStatus.BAD_REQUEST, " COMMITTEE_002","BAD_REQUEST")
    ;

    private final HttpStatus status;
    private final String errorCode;
    private final String message;
}