package com.honey.backend.domain.video;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoKeywordRepository extends JpaRepository<VideoKeyword, Long> {
    @EntityGraph(attributePaths = "keywordCategory")
    VideoKeyword findWithCategoryById(Long id);
}
