package com.honey.backend.load.region;

import com.honey.backend.domain.region.dong.Dong;
import com.honey.backend.domain.region.dong.DongRepository;
import com.honey.backend.domain.region.electionregion.ElectionRegion;
import com.honey.backend.domain.region.electionregion.ElectionRegionRepository;
import com.honey.backend.domain.region.sido.Sido;
import com.honey.backend.domain.region.sido.SidoRepository;
import com.honey.backend.domain.region.sigungu.Sigungu;
import com.honey.backend.domain.region.sigungu.SigunguRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class RegionLoadService {


    private final SidoRepository sidoRepository;
    private final SigunguRepository sigunguRepository;
    private final DongRepository dongRepository;
    private final ElectionRegionRepository electionRegionRepository;

    @Transactional
    public void insertRegion() throws IOException {
        if (initFlag()) {
            System.out.println("============LOAD REGION============");
            Resource resource = new ClassPathResource("21region.csv"); //
            List<String> regionList = Files.readAllLines(resource.getFile().toPath(), StandardCharsets.UTF_8);

            for (String region : regionList) {
                String[] split = region.split(",");
                if (split.length == 1) {
                    insertSido(split);
                } else if (split.length == 2) {
                    insertSigungu(split);
                } else if (split.length == 4) {
                    insertElection(split);
                    insertDong(split);
                }
            }

            if (!electionRegionRepository.existsByElectionRegionName("비례대표"))
                electionRegionRepository.save(ElectionRegion.createElectionRegion("비례대표"));

            System.out.println("============LOAD REGION COMPLETE============");
        }
        }

    @Transactional
    public void insertSido(String[] split) {

        String tempSidoName = split[0];
        if (!sidoRepository.existsBySidoName(tempSidoName)) sidoRepository.save(Sido.createSido(tempSidoName));
    }

    @Transactional
    public void insertSigungu(String[] split) {

        String tempSidoName = split[0];
        String tempSigunguName = split[1];
        Sido sido = sidoRepository.findBySidoName(tempSidoName).orElseThrow();
        sigunguRepository.save(Sigungu.createSigungu(tempSigunguName, sido));

    }

    @Transactional
    public void insertDong(String[] split) {

        String tempSidoName = split[0];
        String tempSigunguName = split[1];
        String tempDongName = split[2];
        String tempElectionRegionName = split[3];

        Sigungu sigungu = sigunguRepository.findBySigunguNameAndSidoName(tempSigunguName, tempSidoName).orElseThrow();

        ElectionRegion electionRegion = electionRegionRepository.findByElectionRegionName(tempElectionRegionName.trim()).orElseThrow();

        dongRepository.save(Dong.createDong(tempDongName, sigungu, electionRegion));

    }

    @Transactional
    public void insertElection(String[] split) {

        String tempElection = split[3];
        if (!electionRegionRepository.existsByElectionRegionName(tempElection.trim())) {
            electionRegionRepository.save(ElectionRegion.createElectionRegion(tempElection.trim()));
        }

    }

    public boolean initFlag() {
        if (sidoRepository.count() == 0 || sigunguRepository.count() == 0 ||
                electionRegionRepository.count() == 0 || dongRepository.count() == 0)
            return true;
        else return false;
    }
}
