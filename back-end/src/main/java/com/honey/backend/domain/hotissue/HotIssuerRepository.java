package com.honey.backend.domain.hotissue;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HotIssuerRepository extends JpaRepository<HotIssue, Long> {
    
}
