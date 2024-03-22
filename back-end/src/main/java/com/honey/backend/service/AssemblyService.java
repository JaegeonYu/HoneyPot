package com.honey.backend.service;

import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.assembly.AssemblyRepository;

import com.honey.backend.domain.committee.Committee;

import com.honey.backend.domain.committee.CommitteeRepository;
import com.honey.backend.domain.poly.Poly;
import com.honey.backend.domain.poly.PolyRepository;
import com.honey.backend.domain.region.sido.SidoRepository;
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
    private final SnsRepository snsRepository;
    private final CommitteeRepository committeeRepository;
    private final SidoRepository sidoRepository;

    public AssemblyListResponse findAll(AssemblyListRequest assemblyListRequest) {
        Long sido = assemblyListRequest.sido();
        Long sigungu = assemblyListRequest.sigungu();
        Long dong = assemblyListRequest.dong();
        Long poly = assemblyListRequest.poly();
        int page = assemblyListRequest.page();
        int limit = assemblyListRequest.limit();
        String word = assemblyListRequest.word();
        Long jeJuId = (sidoRepository.findBySidoName("제주특별자치도").orElseThrow(
                () -> new BaseException(AssemblyErrorCode.ASSEMBLY_NOT_FOUND)
        )).getId();
        List<Assembly> assemblyList;
        assemblyList = (sido == jeJuId + 1) ?
                assemblyRepository.findAllByNonRegion(word, sido, sigungu, dong, poly) :
                assemblyRepository.findAllByRegion(word, sido, sigungu, dong, poly);

        if (sido == 0)
            assemblyList.addAll(assemblyRepository.findAllByNonRegion(word, sido, sigungu, dong, poly));

        int totalCount = assemblyList.size();
        assemblyList.sort((o1, o2) -> o1.getHgName().compareTo(o2.getHgName()));
        assemblyList = getPaginatedAssemblies(page, limit, assemblyList);

        return insertToListResponse(assemblyList, totalCount);

    }

    public AssemblyResponse findById(Long assemblyId) {
        Assembly assembly = assemblyRepository.findById(assemblyId).orElseThrow();
        return insertToResponse(assembly);
    }

    public List<MostCmitAssemblyResponse> findMostAssembly() {
        List<Assembly> assemblyList = assemblyRepository.findMostAssembly();

        List<MostCmitAssemblyResponse> mostCmitAssemblyResponseList = new ArrayList<>();
        for (Assembly assembly : assemblyList) {
            Poly poly = polyRepository.findByAssemblyId(assembly.getId());
            mostCmitAssemblyResponseList.add(new MostCmitAssemblyResponse(
                    assembly.getId(), assembly.getHgName(), poly.getId(), poly.getPolyName()));
        }
        return mostCmitAssemblyResponseList;
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
        Sns sns = snsRepository.findByAssemblyId(assembly.getId()).orElseThrow();
        ;
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
                assembly.getStandingAttendance(),
                new SnsResponse(sns.getId(), sns.getFacebookUrl(), sns.getTwitterUrl(), sns.getYoutubeUrl(), sns.getBlogUrl())
        );

    }


    public boolean polySearch() {
        return true;
    }

    public boolean regionSearch() {
        return true;
    }
}
