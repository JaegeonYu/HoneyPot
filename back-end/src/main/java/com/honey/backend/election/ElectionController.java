package com.honey.backend.election;

import com.honey.backend.election.candidate.CandidateListResponse;
import com.honey.backend.election.candidate.CandidateRequest;
import com.honey.backend.election.candidate.CandidateResponse;
import com.honey.backend.election.candidate.CandidateService;
import com.honey.backend.election.region.TotalRegionService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/election")
@Tag(name = "22Election Info", description = "22Election Info API")
public class ElectionController {

    private final CandidateService candidateService;
    private final TotalRegionService totalRegionService;

    @GetMapping("/candidate/{candidate_id}")
    public ResponseEntity<CandidateResponse> detailCandidate(@PathVariable(name = "candidate_id") Long candidateId) {

        return ResponseEntity.status(HttpStatus.OK).body(candidateService.getDetailCandidate(candidateId));
    }

    @GetMapping()
    public ResponseEntity<CandidateListResponse> CandidateList(CandidateRequest candidateRequest) {
        CandidateListResponse candidateListResponse = candidateService.getList(candidateRequest);

        return candidateListResponse.candidateResponseList().isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).body(candidateListResponse) :
                ResponseEntity.status(HttpStatus.OK).body(candidateService.getList(candidateRequest));
    }

    @GetMapping("/region/sido")
    public ResponseEntity<List<String>> getSido() {

        return ResponseEntity.status(HttpStatus.OK).body(totalRegionService.getSido());
    }

    @GetMapping("/region/sigungu")
    public ResponseEntity<List<String>> getSigungu(@RequestParam("sido") String sido) {

        return ResponseEntity.status(HttpStatus.OK).body(totalRegionService.getSigungu(sido));
    }

    @GetMapping("/region/dong")
    public ResponseEntity<List<String>> getSigungu(@RequestParam("sido") String sido, @RequestParam("sigungu") String sigungu) {

        return ResponseEntity.status(HttpStatus.OK).body(totalRegionService.getDong(sido, sigungu));
    }
}
