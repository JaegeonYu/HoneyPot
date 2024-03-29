package com.honey.backend.service;

import com.honey.backend.domain.video.Video;
import com.honey.backend.domain.video.VideoRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Transactional
public class VideoService {
    private final VideoRepository videoRepository;

    public void updateHits(Long videoId){
        Video video = videoRepository.findById(videoId).orElseThrow();
        video.updateHits();
    }
}
