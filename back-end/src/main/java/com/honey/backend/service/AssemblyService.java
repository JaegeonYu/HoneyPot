package com.honey.backend.service;

import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.assembly.AssemblyRepository;
import com.honey.backend.domain.bill.Bill;
import com.honey.backend.domain.bill.BillRepository;
import com.honey.backend.domain.committee.Committee;
import com.honey.backend.domain.committee.CommitteeRepository;
import com.honey.backend.domain.poly.PolyRepository;
import com.honey.backend.domain.sns.Sns;
import com.honey.backend.domain.sns.SnsRepository;
import com.honey.backend.exception.AssemblyErrorCode;
import com.honey.backend.exception.BaseException;
import com.honey.backend.request.AssemblyListRequest;
import com.honey.backend.response.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AssemblyService {

    private final AssemblyRepository assemblyRepository;
    private final PolyRepository polyRepository;
    private final BillRepository billRepository;
    private final BillService billService;
    private final SnsRepository snsRepository;
    private final CommitteeRepository committeeRepository;

    public AssemblyListResponse findAll(AssemblyListRequest assemblyListRequest) {
        Long sido = assemblyListRequest.sido();
        Long sigungu = assemblyListRequest.sigungu();
        Long dong = assemblyListRequest.dong();
        Long poly = assemblyListRequest.poly();
        int page = assemblyListRequest.page();
        int limit = assemblyListRequest.limit();
        String word = assemblyListRequest.word();
        List<Assembly> assemblyList = assemblyRepository.findAll(word, sido, sigungu, dong, poly);
        int totalCount = assemblyList.size();
        if (assemblyList.isEmpty()) {
            throw new BaseException(AssemblyErrorCode.ASSEMBLY_BAD_REQUEST);
        }
        assemblyList = getPaginatedAssemblies(page, limit, assemblyList);

        return insertToListResponse(assemblyList, totalCount);

    }

    public AssemblyResponse findById(Long assemblyId) {
        Assembly assembly = assemblyRepository.findById(assemblyId).orElseThrow();
        return insertToResponse(assembly);
    }


    public List<Assembly> getPaginatedAssemblies(int page, int size, List<Assembly> assemblyList) {
        int totalSize = assemblyList.size();
        int startIndex = page * size;
        int endIndex = Math.min(startIndex + size, totalSize);

        if (startIndex >= totalSize || totalSize == 0) {
            return new ArrayList<>();
        }
        return assemblyList.subList(startIndex, endIndex);
    }

    public List<BillResponse> findAllBillByAssemblyIdAndCmitId(Long assemblyId, Long cmitId) {
        List<Bill> billList = billRepository.findAllByAssemblyIdAndCmitId(assemblyId, cmitId);
        List<BillResponse> billResponseList = new ArrayList<>();
        for (Bill bill : billList) {
            billResponseList.add(billService.insertToBillResponse(bill));
        }

        return billResponseList;
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

    public SnsResponse findSnsByAssemblyId(Long assemblyId) {
        Sns sns = snsRepository.findByAssemblyId(assemblyId).orElseThrow();

        return new SnsResponse(sns.getId(), assemblyId, sns.getFacebookUrl(), sns.getTwitterUrl(), sns.getYoutubeUrl(), sns.getBlogUrl());
    }


    public AssemblyListResponse insertToListResponse(List<Assembly> assemblyList, int totalCount) {
        List<AssemblyCardResponse> assemblyCardResponseList = new ArrayList<>();
        for (Assembly assembly : assemblyList) {
            assemblyCardResponseList.add(new AssemblyCardResponse(
                    assembly.getId(),
                    assembly.getAssemblyImgUrl(),
                    polyRepository.findById(assembly.getPoly().getId()).orElseThrow().getPolyName(),
                    assembly.getMonaCd(),
                    assembly.getHgName(),
                    assembly.getOrigName()
            ));
        }
        return new AssemblyListResponse(assemblyCardResponseList, totalCount);
    }

    public AssemblyResponse insertToResponse(Assembly assembly) {

        return new AssemblyResponse(
                assembly.getId(),
                assembly.getAssemblyImgUrl(),
                polyRepository.findById(assembly.getPoly().getId()).orElseThrow().getPolyName(),
                assembly.getMonaCd(),
                assembly.getHgName(),
                assembly.getHjName(),
                assembly.getEngName(),
                assembly.getBirthDate(),
                assembly.getOrigName(),
                assembly.getReeleGbn(),
                assembly.getUnits(),
                assembly.getGender(),
                assembly.getMemTitle(),
                assembly.getEmail(),
                assembly.getPlenaryAttendance(),
                assembly.getStandingAttendance());
    }

    public boolean polySearch() {
        return true;
    }

    public boolean regionSearch() {
        return true;
    }
}
