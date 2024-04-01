package com.honey.backend.response.video;

import ch.qos.logback.core.joran.action.AppenderRefAction;
import com.honey.backend.domain.video.Video;
import com.honey.backend.response.hotissue.HotIssueResponseDto;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.stream.Collectors;

@Data
@ToString
public class VideoPage {
    private int totalPage;
    private int size;
    private long totalElements;
    private int page;
    private List<VideoResponse> videos;

    public VideoPage(Page<Video> videoPage) {
        this.totalPage = videoPage.getTotalPages();
        this.size = videoPage.getSize();
        this.totalElements = videoPage.getTotalElements();
        this.page = videoPage.getNumber();
        this.videos = videoPage.getContent().stream().map(VideoResponse::new).collect(Collectors.toList());
    }
}
