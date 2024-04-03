package com.honey.backend.domain.assembly;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AssemblyRepository extends JpaRepository<Assembly,Long>, AssemblyRepositoryCustom
{

    Optional<Assembly> findByMonaCd(String monaCd);

    Optional<Assembly> findByHgName(String hgName);

    Optional<Assembly> findByHgNameAndOrigName(String hgName, String origName);



}
