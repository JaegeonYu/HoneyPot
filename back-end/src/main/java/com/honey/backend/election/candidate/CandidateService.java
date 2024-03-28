package com.honey.backend.election.candidate;

import com.honey.backend.election.exception.ElectionErrorCode;
import com.honey.backend.election.region.TotalRegion;
import com.honey.backend.election.region.TotalRegionRepository;
import com.honey.backend.exception.BaseException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CandidateService {

    private final CandidateRepository candidateRepository;
    private final TotalRegionRepository totalRegionRepository;

    public CandidateResponse getDetailCandidate(Long candidateId) {
        Candidate candidate = candidateRepository.findById(candidateId).orElseThrow();

        return convertToCandidateResponse(candidate);
    }

    public CandidateListResponse getList(CandidateRequest candidateRequest) {
        int limit = candidateRequest.limit();
        int page = candidateRequest.page();
        String sido = candidateRequest.sido();
        ;
        String sigungu = candidateRequest.sigungu();
        String dong = candidateRequest.dong();
        TotalRegion totalRegion = totalRegionRepository.findBySidoAndSigunguAndDongContains(sido, sigungu, dong).orElseThrow(
                () -> new BaseException(ElectionErrorCode.REGION_NOT_FOUND)
        );
        Page<Candidate> candidateList = candidateRepository.findAllBySggName(PageRequest.of(page, limit), totalRegion.getElectionRegion());

        List<CandidateResponse> candidateResponseList = new ArrayList<>();

        for (Candidate candidate : candidateList) {
            candidateResponseList.add(convertToCandidateResponse(candidate));
        }
        return new CandidateListResponse(candidateList.getNumberOfElements(), candidateResponseList);
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
