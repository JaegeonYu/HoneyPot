package com.honey.backend.controller;

import com.honey.backend.domain.video.KeywordCategoryRepository;
import com.honey.backend.domain.video.Video;
import com.honey.backend.domain.video.VideoRepository;
import com.honey.backend.response.video.KeywordCategoryResponse;
import com.honey.backend.response.video.VideoPage;
import com.honey.backend.service.VideoService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/video")
@RequiredArgsConstructor
public class VideoController {
    private final VideoRepository videoRepository;
    private final VideoService videoService;
    private final KeywordCategoryRepository keywordCategoryRepository;

    @GetMapping
    public ResponseEntity<VideoPage> searchVideos(@PageableDefault(size = 9, sort = "createdAt",
            direction = Sort.Direction.DESC) Pageable pageable, @RequestParam(defaultValue = "")String keyword,
                                                  @RequestParam(defaultValue = "0") Long categoryId){
        if(categoryId == 0L){
            return convertVideoPage(videoRepository.findAllWithKeywordsByVideoName(pageable, keyword));
        }
        return convertVideoPage(videoRepository.findAllWithKeywordsByCategoryAndVideoName(pageable, keyword, categoryId));
    }

    private ResponseEntity<VideoPage> convertVideoPage(Page<Video> videos){
        return videos.getContent().isEmpty() ? ResponseEntity.status(HttpStatus.NO_CONTENT).build():
                ResponseEntity.ok(new VideoPage(videos));
    }

    @GetMapping("/{videoId}")
    public ResponseEntity<Void> searchVideo(@PathVariable Long videoId){
        videoService.updateHits(videoId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/category")
    public ResponseEntity<List<KeywordCategoryResponse>> findAllCategory(){
        return ResponseEntity.ok(keywordCategoryRepository.findAll()
                .stream()
                .map(KeywordCategoryResponse::new)
                .collect(Collectors.toList()));
    }
}
