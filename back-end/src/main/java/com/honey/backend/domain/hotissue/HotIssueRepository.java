package com.honey.backend.domain.hotissue;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotIssueRepository extends JpaRepository<HotIssue, Long> {
//    @EntityGraph(attributePaths = "newses")
//    Page<HotIssue> findAllWithNewses(Pageable pageable);
}
