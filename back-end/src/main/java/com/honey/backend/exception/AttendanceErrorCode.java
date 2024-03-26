package com.honey.backend.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum AttendanceErrorCode implements ErrorCode{
    ATTENDANCE_NOT_FOUND(HttpStatus.NOT_FOUND, " ATTENDANCE_001", "NOT_FOUND"),
    ATTENDANCE_BAD_REQUEST(HttpStatus.BAD_REQUEST, " ATTENDANCE_002","BAD_REQUEST")
    ;

    private final HttpStatus status;
    private final String errorCode;
    private final String message;
}