package com.honey.backend.service;

import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.assembly.AssemblyRepository;
import com.honey.backend.domain.committee.Committee;
import com.honey.backend.domain.committee.CommitteeRepository;
import com.honey.backend.domain.poly.Poly;
import com.honey.backend.domain.poly.PolyRepository;
import com.honey.backend.response.CommitteeResponse;
import com.honey.backend.response.MostCmitAssemblyResponse;
import com.honey.backend.response.PolyResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PolyService {

    private final PolyRepository polyRepository;
    private final AssemblyRepository assemblyRepository;
    private final CommitteeRepository committeeRepository;

    public List<PolyResponse> findAll() {
        List<Poly> polyList = polyRepository.findAll();
        List<PolyResponse> polyResponseList = new ArrayList<>();
        for (Poly poly : polyList) {
            if (poly.getPolyName().equals("합계")) continue;
            polyResponseList.add(new PolyResponse(
                    poly.getId(),
                    poly.getPolyName(),
                    poly.getLogoUrl(),
                    poly.getSeats(),
                    poly.getLeader()
            ));
        }
        return polyResponseList;
    }

    public PolyResponse findById(Long polyId) {
        Poly poly = polyRepository.findById(polyId).orElseThrow();
        return new PolyResponse(
                poly.getId(),
                poly.getPolyName(),
                poly.getLogoUrl(),
                poly.getSeats(),
                poly.getLeader()
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

}
