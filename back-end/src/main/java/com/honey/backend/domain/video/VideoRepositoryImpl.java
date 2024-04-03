package com.honey.backend.domain.video;

import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class VideoRepositoryImpl implements VideoRepositoryCustom{
    private final JPAQueryFactory queryFactory;


    @Override
    public Page<Video> findAllWithKeywordsByVideoName(Pageable pageable, String videoName) {
        QVideo video = QVideo.video;

        List<Long> ids = queryFactory.select(video.id)
                .from(video)
                .where((videoName.length() != 0 ? video.videoName.containsIgnoreCase(videoName) : null))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .orderBy(video.createdAt.desc())
                .fetch();


        List<Video> videos = queryFactory.selectFrom(video)
                .leftJoin(video.videoKeywords)
                .fetchJoin()
                .where(video.id.in(ids))
                .orderBy(video.createdAt.desc())
                .fetch();

        JPAQuery<Long> countQuery = queryFactory
                .select(video.count())
                .where((videoName.length() != 0 ? video.videoName.containsIgnoreCase(videoName) : null))
                .from(video);

        return new PageImpl<>(videos, pageable, countQuery.fetchOne());
    }

    @Override
    public Page<Video> findAllWithKeywordsByCategoryAndVideoName(Pageable pageable, String videoName, Long categoryId) {
        QVideo video = QVideo.video;
        QVideoKeyword keyword = QVideoKeyword.videoKeyword;
        QKeywordCategory category = QKeywordCategory.keywordCategory;

        List<Long> ids = queryFactory.selectDistinct(video.id)
                .from(video)
                .join(video.videoKeywords, keyword)
                .join(keyword.keywordCategory, category)
                .where(category.id.eq(categoryId)
                , (videoName.length() != 0 ? video.videoName.containsIgnoreCase(videoName) : null))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        if(ids.isEmpty()){
            return new PageImpl<>(Collections.emptyList(), pageable, 0);
        }
        // category Id -> video_keyowrd -> video들 찾기

        // video -> 키워드 포함
        List<Video> videos = queryFactory.selectFrom(video)
                .leftJoin(video.videoKeywords)
                .fetchJoin()
                .where(video.id.in(ids))
                .orderBy(video.createdAt.desc())
                .fetch();


        JPAQuery<Long> countQuery = queryFactory
                .select(video.count())
                .from(video)
                .join(video.videoKeywords, keyword)
                .join(keyword.keywordCategory, category)
                .where(category.id.eq(categoryId)
                , (videoName.length() != 0 ? video.videoName.containsIgnoreCase(videoName) : null));

        return new PageImpl<>(videos, pageable, countQuery.fetchOne());
    }


}
