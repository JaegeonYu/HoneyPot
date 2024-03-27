package com.honey.backend.service;

import com.honey.backend.domain.committee.Committee;
import com.honey.backend.domain.committee.CommitteeRepository;
import com.honey.backend.exception.BaseException;
import com.honey.backend.exception.CommitteeErrorCode;
import com.honey.backend.response.committee.CommitteeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommitteeService {
    private final CommitteeRepository committeeRepository;

    public List<CommitteeResponse> findMostCommittee() {
        List<Committee> committeeList = committeeRepository.findMostCommittee().orElseThrow(
                () -> new BaseException(CommitteeErrorCode.COMMITTEE_NOT_FOUND)
        );
        return makeCommitteeList(committeeList);
    }

    public List<CommitteeResponse> findMostCommitteeByAssemblyId(Long assemblyId) {
        List<Committee> committeeList = committeeRepository.findMostCommitteeByAssemblyId(assemblyId).orElseThrow(
                () -> new BaseException(CommitteeErrorCode.COMMITTEE_NOT_FOUND)
        );
        return makeCommitteeList(committeeList);
    }

    public List<CommitteeResponse> findMostCommitteeByPolyId(Long polyId) {
        List<Committee> committeeList = committeeRepository.findMostCommitteeByPolyId(polyId).orElseThrow(
                () -> new BaseException(CommitteeErrorCode.COMMITTEE_NOT_FOUND)
        );
        return makeCommitteeList(committeeList);
    }

    private List<CommitteeResponse> makeCommitteeList(List<Committee> committeeList) {
        List<CommitteeResponse> committeeResponseList = new ArrayList<>();
        for (Committee committee : committeeList) {
            committeeResponseList.add(new CommitteeResponse(
                    committee.getId(),
                    committee.getCmitCode(),
                    committee.getCmitName().substring(0, committee.getCmitName().length() - 3)
            ));
        }
        return committeeResponseList;

    }
}
