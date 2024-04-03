package com.honey.backend.election.candidate;

import java.util.List;

public record CandidateListResponse(

       int totalCount,
        List<CandidateResponse> candidateResponseList

) {
}
