package com.honey.backend.election.region;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TotalRegionRepository extends JpaRepository<TotalRegion, Long> {


    Optional<TotalRegion> findByElectionRegionAndSigunguAndSido(String electionRegion, String sigunguName, String sido);

    Optional<TotalRegion> findBySidoAndSigunguAndDongContains(String sido, String sigungu, String dong);

    @Query("select distinct dong " +
            "from TotalRegion " +
            "where sido = :sido " +
            "and  sigungu = :sigungu")
    Optional<List<String>> findDongBySidoAndSigungu(@Param("sido") String sido, @Param("sigungu") String sigungu);

    @Query("select distinct sigungu " +
            "from TotalRegion " +
            "where sido = :sido")
    Optional<List<String>> findAllSigunguBySido(@Param("sido")String sido);


    @Query("select distinct sido " +
            "from TotalRegion ")
    Optional<List<String>> findAllSido();

}
