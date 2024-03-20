package com.honey.backend.service;

import com.honey.backend.AssemblyListRequest;
import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.assembly.AssemblyRepository;
import com.honey.backend.domain.bill.Bill;
import com.honey.backend.domain.bill.BillRepository;
import com.honey.backend.domain.committee.Committee;
import com.honey.backend.domain.committee.CommitteeRepository;
import com.honey.backend.domain.poly.PolyRepository;
import com.honey.backend.domain.sns.Sns;
import com.honey.backend.domain.sns.SnsRepository;
import com.honey.backend.exception.BaseException;
import com.honey.backend.exception.GlobalErrorCode;
import com.honey.backend.response.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
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

    public List<AssemblyListResponse> findAll(AssemblyListRequest assemblyListRequest) {
        Long sido = assemblyListRequest.sido();
        Long sigungu = assemblyListRequest.sigungu();
        Long dong = assemblyListRequest.dong();
        Long poly = assemblyListRequest.poly();
        int page = assemblyListRequest.page();
        int limit = assemblyListRequest.limit();
        String word = assemblyListRequest.word();

        List<Assembly> assemblyList = null;
        if (poly != null && (sido == null && sigungu == null && dong == null)) {
            assemblyList = assemblyRepository.findAllByPoly(PageRequest.of(page, limit), word, poly).getContent();
        } else if (poly == null)
            assemblyList = getPaginatedAssemblies(page, limit, assemblyRepository.findAllByRegion(word, sido, sigungu, dong));
        else {
            throw new BaseException(GlobalErrorCode.NOT_SUPPORTED_URI_ERROR);
        }
        return insertToListResponse(assemblyList);

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


    public List<AssemblyListResponse> insertToListResponse(List<Assembly> assemblyList) {
        List<AssemblyListResponse> assemblyResponseList = new ArrayList<>();
        for (Assembly assembly : assemblyList) {
            assemblyResponseList.add(new AssemblyListResponse(
                    assembly.getId(),
                    assembly.getAssemblyImgUrl(),
                    polyRepository.findById(assembly.getPoly().getId()).orElseThrow().getPolyName(),
                    assembly.getMonaCd(),
                    assembly.getHgName(),
                    assembly.getOrigName()
            ));
        }
        return assemblyResponseList;
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
}
