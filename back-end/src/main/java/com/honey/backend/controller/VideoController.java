package com.honey.backend.controller;

import com.honey.backend.domain.video.Video;
import com.honey.backend.domain.video.VideoRepository;
import com.honey.backend.response.video.VideoPage;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/video")
@RequiredArgsConstructor
public class VideoController {
    private final VideoRepository videoRepository;

    @GetMapping
    public ResponseEntity<VideoPage> searchVideo(@PageableDefault(size = 9, sort = "createdAt",
            direction = Sort.Direction.DESC) Pageable pageable, @RequestParam(required = false)String keyword){
        if(keyword==null || keyword.length() == 0 ) {
            return convertVideoPage(videoRepository.findAllWithKeywords(pageable));
        }
        return convertVideoPage(videoRepository.findAllWithKeywordsByVideoName(pageable, keyword));
    }

    private ResponseEntity<VideoPage> convertVideoPage(Page<Video> videos){
        return videos.getContent().isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).build():
                ResponseEntity.ok(new VideoPage(videos));
    }
}
