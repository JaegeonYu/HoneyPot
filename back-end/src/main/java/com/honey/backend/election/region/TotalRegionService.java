package com.honey.backend.election.region;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TotalRegionService {

    private final TotalRegionRepository totalRegionRepository;


    public List<String> getSido() {
        List<String> totalRegionList = totalRegionRepository.findAllSido().orElseThrow();

        return totalRegionList;
    }

    public List<String> getSigungu(String sido) {
        List<String> totalRegionList = totalRegionRepository.findAllSigunguBySido(sido).orElseThrow();

        return totalRegionList;
    }

    public List<String> getDong(String sido, String sigungu) {
        List<String> dongStringList = totalRegionRepository.findDongBySidoAndSigungu(sido, sigungu).orElseThrow();
        List<String> dongList = new ArrayList<>();
        for (String str : dongStringList) {
            String[] split = str.split(" ");
            dongList.addAll(Arrays.asList(split));
        }
        return dongList;
    }
}
