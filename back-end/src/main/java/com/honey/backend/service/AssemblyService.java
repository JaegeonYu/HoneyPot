package com.honey.backend.service;

import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.assembly.AssemblyRepository;
import com.honey.backend.domain.bill.Bill;
import com.honey.backend.domain.bill.BillRepository;
import com.honey.backend.domain.committee.Committee;
import com.honey.backend.domain.committee.CommitteeRepository;
import com.honey.backend.domain.poly.Poly;
import com.honey.backend.domain.poly.PolyRepository;
import com.honey.backend.domain.region.dong.DongRepository;
import com.honey.backend.domain.region.electionregion.ElectionRegion;
import com.honey.backend.domain.region.electionregion.ElectionRegionRepository;
import com.honey.backend.exception.AssemblyErrorCode;
import com.honey.backend.exception.BaseException;
import com.honey.backend.response.AssemblyListResponse;
import com.honey.backend.response.AssemblyResponse;
import com.honey.backend.response.BillResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AssemblyService {

    private final AssemblyRepository assemblyRepository;
    private final PolyRepository polyRepository;
    private final BillRepository billRepository;
    private final BillService billService;

    public List<AssemblyListResponse> findAllByRegion(String sidoName, String sigunguName, String dongName, Integer page,Integer limit, String word) {

        List<Assembly> assemblyList = getPaginatedAssemblies(page, limit, assemblyRepository.findAllByRegion(word, sidoName, sigunguName, dongName));

        return insertToListResponse(assemblyList);

    }

    public List<AssemblyListResponse> findAllByPoly(String word, Long polyId, Integer page, Integer limit) {
        List<Assembly> assemblyList = assemblyRepository.findAllByPoly(PageRequest.of(page, limit), word, polyId).getContent();

        if (assemblyList.isEmpty()) {
            throw new BaseException(AssemblyErrorCode.ASSEMBLY_NO_MORE_LIST);
        }
        return insertToListResponse(assemblyList);
    }

    public List<AssemblyListResponse> findAllByCommittee(String word, Long cmitId, Integer page, Integer limit) {
        List<Assembly> assemblyList = assemblyRepository.findAllByCommittee(PageRequest.of(page, limit), word, cmitId).getContent();
        if (assemblyList.isEmpty()) {
            throw new BaseException(AssemblyErrorCode.ASSEMBLY_NO_MORE_LIST);
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
            throw new BaseException(AssemblyErrorCode.ASSEMBLY_NO_MORE_LIST);
        }
        return assemblyList.subList(startIndex, endIndex);
    }

    public List<BillResponse> findBillByAssemblyId(Long assemblyId) {
        List<Bill> billList = billRepository.findAllByAssemblyId(assemblyId);
        List<BillResponse> billResponseList = new ArrayList<>();
        for (Bill bill : billList) {
            billResponseList.add(billService.insertToBillResponse(bill));
        }
        return billResponseList;
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
