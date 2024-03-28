package com.honey.backend.response.video;

import com.honey.backend.domain.video.Video;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class VideoResponse {
    private Long id;
    private String videoName;
    private String videoUrl;
    private String imageUrl;
    private String creatAt;
    private Long hits;
    public VideoResponse(Long id, String videoName, String videoUrl, String imageUrl, Long hits) {
        this.id = id;
        this.videoName = videoName;
        this.videoUrl = videoUrl;
        this.imageUrl = imageUrl;
        this.hits = hits;
    }

    public VideoResponse(Video video) {
        this.id = video.getId();
        this.videoName = video.getVideoName();
        this.videoUrl = video.getVideoUrl();
        this.imageUrl = video.getImageUrl();
        this.creatAt = video.getCreatAt().toString();
        this.hits = video.getHits();
    }
}
