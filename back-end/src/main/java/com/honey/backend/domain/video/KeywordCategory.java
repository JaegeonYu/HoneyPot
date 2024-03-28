package com.honey.backend.domain.video;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Getter
public class KeywordCategory {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "keyword_category_id")
    private Long id;

    private String categoryName;

    @OneToMany(mappedBy = "keywordCategory")
    private List<VideoKeyword> videoKeywords;
}
