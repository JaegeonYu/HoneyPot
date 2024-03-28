package com.honey.backend.election.exception;

import com.honey.backend.exception.ErrorCode;
import lombok.Getter;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum ElectionErrorCode implements ErrorCode {
    CANDIDATE_NOT_FOUND(HttpStatus.NOT_FOUND, " CANDIDATE_001", "NOT_FOUND"),
    CANDIDATE_BAD_REQUEST(HttpStatus.BAD_REQUEST, " CANDIDATE_002","BAD_REQUEST"),
    REGION_NOT_FOUND(HttpStatus.NOT_FOUND, " REGION_001", "NOT_FOUND"),
    REGION_BAD_REQUEST(HttpStatus.BAD_REQUEST, " REGION_002","BAD_REQUEST")

            ;

    private final HttpStatus status;
    private final String errorCode;
    private final String message;
}