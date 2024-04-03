package com.honey.backend.response.video;

import com.honey.backend.domain.video.VideoKeyword;
import lombok.Data;

@Data
public class KeywordResponse {
    private Long id;
    private String keyword;

    public KeywordResponse(VideoKeyword videoKeyword) {
        this.id = videoKeyword.getId();
        this.keyword = videoKeyword.getKeywordName();
    }
}
