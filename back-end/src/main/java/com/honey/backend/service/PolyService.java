package com.honey.backend.service;

import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.assembly.AssemblyRepository;
import com.honey.backend.domain.attendance.Attendance;
import com.honey.backend.domain.attendance.AttendanceRepository;
import com.honey.backend.domain.poly.Poly;
import com.honey.backend.domain.poly.PolyRepository;
import com.honey.backend.exception.AttendanceErrorCode;
import com.honey.backend.exception.BaseException;
import com.honey.backend.exception.PolyErrorCode;
import com.honey.backend.response.assembly.AssemblyAttendanceResponse;
import com.honey.backend.response.committee.MostCmitAssemblyResponse;
import com.honey.backend.response.poly.PolyAttendanceResponse;
import com.honey.backend.response.poly.PolyListResponse;
import com.honey.backend.response.poly.PolyResponse;
import com.honey.backend.response.poly.PolySeatsResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PolyService {

    private final PolyRepository polyRepository;
    private final AssemblyRepository assemblyRepository;
    private final AttendanceRepository attendanceRepository;

    public List<PolyListResponse> findAll() {
        List<Poly> polyList = polyRepository.findAll();
        List<PolyListResponse> polyResponseList = new ArrayList<>();
        int totalSeats = getTotalSeats();
        for (Poly poly : polyList) {
            if (poly.getPolyName().equals("합계")) continue;
            polyResponseList.add(new PolyListResponse(
                    poly.getId(),
                    poly.getPolyName(),
                    poly.getLogoUrl(),
                    new PolySeatsResponse(poly.getSeats(), totalSeats),
                    ""

            ));
        }
        return polyResponseList;
    }

    public PolyResponse findById(Long polyId) {
        Poly poly = polyRepository.findById(polyId).orElseThrow(
                () -> new BaseException(PolyErrorCode.POLY_NOT_FOUND)
        );
        int totalSeats = getTotalSeats();
        return new PolyResponse(
                poly.getId(),
                poly.getPolyName(),
                poly.getLogoUrl(),
                new PolySeatsResponse(poly.getSeats(), totalSeats),
                getPolyAttendanceInfo(poly.getId())
        );

    }

    public List<MostCmitAssemblyResponse> findMostAssemblyByPoly(Long cmitId, Long polyId) {
        List<Assembly> assemblyList = assemblyRepository.findMostAssemblyByPoly(cmitId, polyId);

        List<MostCmitAssemblyResponse> mostCmitAssemblyResponseList = new ArrayList<>();
        for (Assembly assembly : assemblyList) {
            Poly poly = polyRepository.findByAssemblyId(assembly.getId());
            mostCmitAssemblyResponseList.add(new MostCmitAssemblyResponse(
                    assembly.getId(), assembly.getHgName(), poly.getId(), poly.getPolyName()));
        }
        return mostCmitAssemblyResponseList;
    }

    public PolyAttendanceResponse getPolyAttendanceInfo(Long polyId) {

        List<Attendance> attendanceList = attendanceRepository.findAllByPolyId(polyId).orElseThrow(
                () -> new BaseException(AttendanceErrorCode.ATTENDANCE_NOT_FOUND)
        );
        List<Attendance> totalAttendanceList = attendanceRepository.findAllByPolyId(null).orElseThrow(
                () -> new BaseException(AttendanceErrorCode.ATTENDANCE_NOT_FOUND)
        );


        int[] polyAttendance = getAverageAttendance(attendanceList);
        int[] totalAttendance = getAverageAttendance(totalAttendanceList);

        int polyAverageAttendance = (polyAttendance[0] * 100 / polyAttendance[2]);
        int totalAverageAttendance = (totalAttendance[0] * 100 / totalAttendance[2]);

        List<Assembly> descAssemblyList = assemblyRepository.findAssemblyByPolyAttendanceRateDesc(polyId);
        List<AssemblyAttendanceResponse> assemblyAttendanceDescList = new ArrayList<>();

        for (Assembly assembly : descAssemblyList) {
            Attendance attendance = attendanceRepository.findByAssemblyId(assembly.getId()).orElseThrow(
                    () -> new BaseException(AttendanceErrorCode.ATTENDANCE_NOT_FOUND)
            );
            int rate = (attendance.getMeetingDays() - attendance.getAbsence()) * 100 / attendance.getMeetingDays();
            assemblyAttendanceDescList.add(new AssemblyAttendanceResponse(assembly.getId(), assembly.getHgName(), rate));

        }
        List<Assembly> ascAssemblyList = assemblyRepository.findAssemblyByPolyAttendanceRateAsc(polyId);
        List<AssemblyAttendanceResponse> assemblyAttendanceAscList = new ArrayList<>();
        for (Assembly assembly : ascAssemblyList) {
            Attendance attendance = attendanceRepository.findByAssemblyId(assembly.getId()).orElseThrow(
                    () -> new BaseException(AttendanceErrorCode.ATTENDANCE_NOT_FOUND)
            );
            int rate = (attendance.getMeetingDays() - attendance.getAbsence()) * 100 / attendance.getMeetingDays();

            assemblyAttendanceAscList.add(new AssemblyAttendanceResponse(assembly.getId(), assembly.getHgName(), rate));

        }
        return new PolyAttendanceResponse(polyAverageAttendance, totalAverageAttendance, assemblyAttendanceDescList, assemblyAttendanceAscList);
    }

    private int[] getAverageAttendance(List<Attendance> attendanceList) {
        int sumAttendance = 0;
        int sumAbsence = 0;
        int totalDays = 0;
        for (Attendance attendance : attendanceList) {
            sumAttendance += attendance.getAttendance();
            sumAbsence += attendance.getAbsence();
            totalDays += attendance.getMeetingDays();
        }
        return new int[]{sumAttendance, sumAbsence, totalDays};
    }

    private int getTotalSeats() {
        List<Poly> polyList = polyRepository.findAll();
        int totalSeats = 0;
        for (Poly poly : polyList) {
            if (poly.getPolyName().equals("합계")) continue;
            totalSeats += poly.getSeats();
        }
        return totalSeats;
    }
}
