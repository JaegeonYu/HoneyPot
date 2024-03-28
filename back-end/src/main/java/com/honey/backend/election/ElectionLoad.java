package com.honey.backend.election;

import com.honey.backend.election.candidate.CandidateLoad;
import com.honey.backend.election.region.TotalRegionLoad;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;

@RequiredArgsConstructor
@Service
public class ElectionLoad {


    private final CandidateLoad candidateLoad;
    private final TotalRegionLoad totalRegionLoad;

    @PostConstruct
    public void load() throws IOException {
        totalRegionLoad.insertRegion();
        candidateLoad.saveCandidate();
    }
}
