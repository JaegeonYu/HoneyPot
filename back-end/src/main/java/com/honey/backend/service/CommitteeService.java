package com.honey.backend.service;

import com.honey.backend.domain.committee.Committee;
import com.honey.backend.domain.committee.CommitteeRepository;
import com.honey.backend.response.CommitteeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommitteeService {
    private final CommitteeRepository committeeRepository;

    public List<CommitteeResponse> findMostCommittee() {
        List<Committee> committeeList = committeeRepository.findMostCommittee();
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

    public List<CommitteeResponse> findMostCommitteeByAssemblyId(Long assemblyId) {
        List<Committee> committeeList = committeeRepository.findMostCommitteeByAssemblyId(assemblyId);
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

    public List<CommitteeResponse> findMostCommitteeByPolyId(Long polyId) {
        List<Committee> committeeList = committeeRepository.findMostCommitteeByPolyId(polyId);
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
