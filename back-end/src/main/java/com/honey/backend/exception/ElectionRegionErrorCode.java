package com.honey.backend.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum ElectionRegionErrorCode implements ErrorCode{
    ELECTION_REGION_NOT_FOUND(HttpStatus.NOT_FOUND, " ELECTION_REGION_001", "NOT_FOUND"),
    ELECTION_REGION_BAD_REQUEST(HttpStatus.BAD_REQUEST, " ELECTION_REGION_002","BAD_REQUEST")
    ;

    private final HttpStatus status;
    private final String errorCode;
    private final String message;
}
