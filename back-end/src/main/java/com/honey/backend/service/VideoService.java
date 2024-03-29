package com.honey.backend.service;

import com.honey.backend.domain.video.Video;
import com.honey.backend.domain.video.VideoRepository;
import com.honey.backend.exception.BaseException;
import com.honey.backend.exception.RegionErrorCode;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class VideoService {
    private final VideoRepository videoRepository;

    public void updateHits(Long videoId){
        Video video = videoRepository.findById(videoId).orElseThrow(() ->
                new IllegalArgumentException("video not found");
        video.updateHits();
    }
}
