package com.honey.backend.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum AssemblyErrorCode implements ErrorCode {

    ASSEMBLY_NO_MORE_LIST(HttpStatus.BAD_REQUEST, "ASSEMBLY_001", "더이상 불러 올 리스트가 없습니다."),
    ;

    private final HttpStatus status;
    private final String errorCode;
    private final String message;
}
