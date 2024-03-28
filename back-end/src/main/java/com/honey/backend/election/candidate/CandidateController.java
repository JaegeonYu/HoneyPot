package com.honey.backend.election.candidate;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
@RequestMapping("/candidate")
@Tag(name = "Candidate Info", description = "Candidate Info(후보자 정보) API")
public class CandidateController {

    private final CandidateService candidateService;


    @GetMapping("/{candidate_id}")
    public ResponseEntity<CandidateResponse> detailCandidate(@PathVariable(name = "candidate_id") Long candidateId) {

        return ResponseEntity.status(HttpStatus.OK).body(candidateService.getDetailCandidate(candidateId));
    }

    @GetMapping()
    public ResponseEntity<CandidateListResponse> CandidateList(CandidateRequest candidateRequest) {
        CandidateListResponse candidateListResponse = candidateService.getList(candidateRequest);

        return candidateListResponse.candidateResponseList().isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).body(candidateListResponse) :
                ResponseEntity.status(HttpStatus.OK).body(candidateService.getList(candidateRequest));
    }
}
