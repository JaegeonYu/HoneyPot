package com.honey.backend.election.candidate;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CandidateService {

    private final CandidateRepository candidateRepository;

    public CandidateResponse getDetailCandidate(Long candidateId) {
        Candidate candidate = candidateRepository.findById(candidateId).orElseThrow();

        return convertToCandidateResponse(candidate);
    }

    private CandidateResponse convertToCandidateResponse(Candidate candidate) {
        return new CandidateResponse(
                candidate.getCandidateImgUrl(),
                candidate.getSgDate(),
                candidate.getSgTypeCode(),
                candidate.getHuboid(),
                candidate.getSggName(),
                candidate.getSdName(),
                candidate.getWiwName(),
                candidate.getGiho(),
                candidate.getJdName(),
                candidate.getHgname(),
                candidate.getHjName(),
                candidate.getGender(),
                candidate.getBirthday(),
                candidate.getAge(),
                candidate.getAddr(),
                candidate.getJob(),
                candidate.getEdu(),
                candidate.getCareer1(),
                candidate.getCareer2(),
                candidate.getStatus()
        );
    }

}
