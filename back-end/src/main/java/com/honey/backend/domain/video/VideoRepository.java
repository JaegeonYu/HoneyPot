package com.honey.backend.domain.video;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VideoRepository extends JpaRepository<Video, Long>, VideoRepositoryCustom{
    @EntityGraph(attributePaths = "videoKeywords")
    Page<Video> findAllWithKeywordsByVideoName(Pageable pageable, String videoName);


}
