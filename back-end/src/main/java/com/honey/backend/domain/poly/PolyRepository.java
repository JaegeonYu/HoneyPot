package com.honey.backend.domain.poly;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PolyRepository extends JpaRepository<Poly,Long> {

    boolean existsByPolyName(String polyName);
    Optional<Poly> findByPolyName(String polyName);

}
