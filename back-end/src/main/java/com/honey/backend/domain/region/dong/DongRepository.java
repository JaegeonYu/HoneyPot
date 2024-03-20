package com.honey.backend.domain.region.dong;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DongRepository extends JpaRepository<Dong,Long> {

    List<Dong> findAllBySigunguId(Long sigunguId);
}
