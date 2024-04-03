package com.honey.backend.response.video;

import com.honey.backend.domain.video.KeywordCategory;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class KeywordCategoryResponse {
    private Long id;
    private String categoryName;

    public KeywordCategoryResponse(KeywordCategory keywordCategory) {
        this.id = keywordCategory.getId();
        this.categoryName = keywordCategory.getCategoryName();
    }
}
