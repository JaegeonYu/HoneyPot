package com.honey.backend.domain.video;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VideoRepository extends JpaRepository<Video, Long> {
    @EntityGraph(attributePaths = "videoKeywords")
    Page<Video> findAllByVideoNameWithKeywords(Pageable pageable, String videoName);

    @EntityGraph(attributePaths = "videoKeywords")
    Page<Video> findAllWithKeywords(Pageable pageable);
}
