package com.honey.backend.service;

import com.honey.backend.domain.region.dong.Dong;
import com.honey.backend.domain.region.dong.DongRepository;
import com.honey.backend.domain.region.sido.Sido;
import com.honey.backend.domain.region.sido.SidoRepository;
import com.honey.backend.domain.region.sigungu.Sigungu;
import com.honey.backend.domain.region.sigungu.SigunguRepository;
import com.honey.backend.response.RegionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RegionService {

    private final DongRepository dongRepository;
    private final SidoRepository sidoRepository;
    private final SigunguRepository sigunguRepository;


    public List<RegionResponse> getSidoList() {
        List<Sido> sidoList = sidoRepository.findAll();
        List<RegionResponse> regionResponseList = new ArrayList<>();
        for (Sido sido : sidoList) {
            regionResponseList.add(new RegionResponse(sido.getId(), sido.getSidoName()));
        }
        return regionResponseList;
    }

    public List<RegionResponse> getSigunguList(Long sidoId) {
        List<Sigungu> sigunguList = sigunguRepository.findAllBySidoId(sidoId);
        List<RegionResponse> regionResponseList = new ArrayList<>();
        for (Sigungu sigungu : sigunguList) {
            regionResponseList.add(new RegionResponse(sigungu.getId(), sigungu.getSigunguName()));
        }
        return regionResponseList;
    }

    public List<RegionResponse> getDongList(Long sigunguId) {
        List<Dong> dongList = dongRepository.findAllBySigunguId(sigunguId);
        List<RegionResponse> regionResponseList = new ArrayList<>();

        for (Dong dong : dongList) {
            regionResponseList.add(new RegionResponse(dong.getId(), dong.getDongName()));
        }
        return regionResponseList;
    }

}
