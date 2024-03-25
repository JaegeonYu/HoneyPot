package com.honey.backend.service;

import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.assembly.AssemblyRepository;
import com.honey.backend.domain.attendance.Attendance;
import com.honey.backend.domain.attendance.AttendanceRepository;
import com.honey.backend.domain.attendance.StandingAttendance;
import com.honey.backend.domain.attendance.StandingAttendanceRepository;
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

    private final AttendanceRepository attendanceRepository;
    private final StandingAttendanceRepository standingAttendanceRepository;



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

    public List<MostCmitAssemblyResponse> findMostAssembly(Long cmitId) {
        List<Assembly> assemblyList = assemblyRepository.findMostAssembly(cmitId);

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

    public SnsResponse findSnsByAssemblyId(Long assemblyId) {
        Sns sns = snsRepository.findByAssemblyId(assemblyId).orElseThrow();
        return new SnsResponse(sns.getId(), sns.getFacebookUrl(), sns.getTwitterUrl(), sns.getYoutubeUrl(), sns.getBlogUrl());
    }

    public List<CommitteeResponse> findMostCommitteeByAssemblyId(Long assemblyId) {
        List<Committee> committeeList = committeeRepository.findMostCommitteeByAssemblyId(assemblyId);
        List<CommitteeResponse> committeeResponseList = new ArrayList<>();
        for (Committee committee : committeeList) {
            committeeResponseList.add(new CommitteeResponse(committee.getId(), committee.getCmitCode(), committee.getCmitName()));
        }
        return committeeResponseList;
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
                getAttendanceInfo(assembly.getId())

        );

    }
    public AttendanceResponse getAttendanceInfo(Long assemblyId) {
        Attendance attendance = attendanceRepository.findByAssemblyId(assemblyId).orElse(null);
        StandingAttendance standingAttendance = standingAttendanceRepository.findByAssemblyId(assemblyId).orElse(null);

        int attendanceRate = attendance != null ? attendance.getAttendance() + attendance.getLeaves() + attendance.getBusinessTrip() + attendance.getAbsenceReport() : 0;
        int absenceRate = attendance != null ? attendance.getAbsence() : 0;
        int standingAttendanceRate = standingAttendance != null ? standingAttendance.getAttendance() + standingAttendance.getLeaves() + standingAttendance.getBusinessTrip() + standingAttendance.getAbsenceReport() : 0;
        int standingAbsenceRate = standingAttendance != null ? standingAttendance.getAbsence() : 0;

        return new AttendanceResponse(attendanceRate, absenceRate, standingAttendanceRate, standingAbsenceRate);
    }

    public boolean polySearch() {
        return true;
    }

    public boolean regionSearch() {
        return true;
    }
}
