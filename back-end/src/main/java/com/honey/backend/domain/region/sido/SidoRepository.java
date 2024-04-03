package com.honey.backend.domain.region.sido;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;


public interface SidoRepository extends JpaRepository<Sido,Long> {

    Optional<Sido> findBySidoName(String sidoName);

    boolean existsBySidoName(String sidoName);

}
