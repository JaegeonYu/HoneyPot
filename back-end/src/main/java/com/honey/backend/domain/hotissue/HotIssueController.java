package com.honey.backend.domain.hotissue;

import com.honey.backend.load.hotissue.HotIssueLoadService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hot-issue")
public class HotIssueController {
    private final HotIssueLoadService hotIssueLoadService;

    @GetMapping("/{hotissueId}")
    public String addHotSummary(@PathVariable Long hotissueId){
        return hotIssueLoadService.getSummary(hotissueId);
    }
}
