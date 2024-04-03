package com.honey.backend.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum AssemblyErrorCode implements ErrorCode {

    ASSEMBLY_NOT_FOUND(HttpStatus.NOT_FOUND, "ASSEMBLY_001", "NOT_FOUND"),
    ASSEMBLY_BAD_REQUEST(HttpStatus.BAD_REQUEST, "ASSEMBLY_002","BAD_REQUEST"),
    SNS_NOT_FOUND(HttpStatus.NOT_FOUND, "SNS_01", "NOT_FOUND"),
    SNS_BAD_REQUEST(HttpStatus.BAD_REQUEST, "SNS_02","BAD_REQUEST")
    ;

    private final HttpStatus status;
    private final String errorCode;
    private final String message;
}
