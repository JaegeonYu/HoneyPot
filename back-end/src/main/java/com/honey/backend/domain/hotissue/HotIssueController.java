package com.honey.backend.domain.hotissue;

import com.honey.backend.load.hotissue.HotIssueLoadService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hot-issue")
public class HotIssueController {
    private final HotIssueLoadService hotIssueLoadService;
    private final HotIssuerRepository hotIssuerRepository;
    @GetMapping("/{hotissueId}")
    public String addHotSummary(@PathVariable Long hotissueId){
        return hotIssueLoadService.getSummary(hotissueId);
    }

    @GetMapping
    public HotIssuePage searchIssues(@PageableDefault(size = 9, sort = "createdAt",
            direction = Sort.Direction.DESC) Pageable pageable){
        Page<HotIssue> findIssue = hotIssuerRepository.findAll(pageable);

        return new HotIssuePage(findIssue);
    }
}
