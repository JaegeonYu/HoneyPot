package com.honey.backend.response.hotissue;

import com.honey.backend.domain.hotissue.HotIssue;
import jakarta.persistence.Column;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@Data
public class HotIssueResponseDto {
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT", nullable = true)
    private String summary;

    @Column(columnDefinition = "TEXT", nullable = true)
    private String original;

    private String url;

    private String createdAt;

    private String updatedAt;

    public HotIssueResponseDto(Long id, String title, String summary, String original, String url, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.original = original;
        this.url = url;
        this.createdAt = createdAt.toString();
        this.updatedAt = updatedAt.toString();
    }

    public HotIssueResponseDto(HotIssue hotIssue) {
        this.id = hotIssue.getId();
        this.title = hotIssue.getTitle();
        this.summary = hotIssue.getSummary();
        this.original = hotIssue.getOriginal();
        this.url = hotIssue.getUrl();
        this.createdAt = hotIssue.getCreatedAt().toString();
        this.updatedAt = hotIssue.getUpdatedAt().toString();
    }
}
