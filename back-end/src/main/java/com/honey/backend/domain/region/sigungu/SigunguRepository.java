package com.honey.backend.domain.region.sigungu;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface SigunguRepository extends JpaRepository<Sigungu,Long> {


    @Query("select s " +
            "from Sigungu s " +
            "inner join Sido d " +
            "on s.sido.sidoName = :sidoName " +
            "where s.sigunguName = :sigunguName "
            )
    Optional<Sigungu> findBySigunguNameAndSidoName(@Param("sigunguName")String sigunguName,@Param("sidoName") String sidoName);

    List<Sigungu> findAllBySidoId(Long sidoId);
}
