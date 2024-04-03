package com.honey.backend.response.hotissue;

import com.honey.backend.domain.hotissue.HotIssue;
import lombok.Data;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.stream.Collectors;

@Data

public class HotIssuePage {
    private int totalPage;
    private int size;

    private long totalElements;
    private int page;
    private List<HotIssueResponseDto> hotIssues;

    public HotIssuePage(Page<HotIssue> hotIssuePage) {
        this.totalPage = hotIssuePage.getTotalPages();
        this.size = hotIssuePage.getSize();
        this.totalElements = hotIssuePage.getTotalElements();
        this.page = hotIssuePage.getNumber();
        this.hotIssues = hotIssuePage.getContent().stream().map(HotIssueResponseDto::new).collect(Collectors.toList());
    }
}
