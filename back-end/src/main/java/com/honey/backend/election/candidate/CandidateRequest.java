package com.honey.backend.election.candidate;

public record CandidateRequest(
        int page,
        int limit,
        String sido,
        String sigungu,
        String dong
) {
}
