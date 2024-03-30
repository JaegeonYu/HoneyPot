package com.honey.backend.domain.video;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface VideoRepositoryCustom {

//    Page<Video> findAllWithKeywords(Pageable pageable);

    Page<Video> findAllWithKeywordsByVideoName(Pageable pageable, String videoName);

    Page<Video> findAllWithKeywordsByCategoryAndVideoName(Pageable pageable, String videoName, Long CategoryId);
}
