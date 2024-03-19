package com.honey.backend.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum AssemblyErrorCode implements ErrorCode {

    ASSEMBLY_NO_MORE_LIST(HttpStatus.NOT_FOUND, "ASSEMBLY_001", "국회의원을 찾을 수 없습니다."),
    ;

    private final HttpStatus status;
    private final String errorCode;
    private final String message;
}
