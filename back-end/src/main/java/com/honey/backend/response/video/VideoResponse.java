package com.honey.backend.response.video;

import com.honey.backend.domain.video.Video;
import com.honey.backend.domain.video.VideoKeyword;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.joda.time.DateTime;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Data
@NoArgsConstructor
public class VideoResponse {
    private Long id;
    private String videoName;
    private String videoUrl;
    private String imageUrl;
    private String creatAt;
    private Long hits;
    private List<String> keywords;
    private String videoSummary;

    public VideoResponse(Video video) {
        this.id = video.getId();
        this.videoName = video.getVideoName();
        this.videoUrl = video.getVideoUrl();
        this.imageUrl = video.getImageUrl();
        this.creatAt = video.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd")).toString();
        this.hits = video.getHits();
        this.keywords = video.getVideoKeywords().stream().map(VideoKeyword::getKeywordName).collect(Collectors.toList());
        this.videoSummary = video.getVideoSummary();
    }
}
