package com.honey.backend.domain.sns;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SnsRepository extends JpaRepository<Sns, Long> {

    Optional<Sns> findByAssemblyId(Long assemblyId);

}
