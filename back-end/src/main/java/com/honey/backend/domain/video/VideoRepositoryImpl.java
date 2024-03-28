package com.honey.backend.domain.video;

import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class VideoRepositoryImpl implements VideoRepositoryCustom{
    private final JPAQueryFactory queryFactory;


    @Override
    public Page<Video> findAllWithKeywords(Pageable pageable) {
        QVideo video = QVideo.video;

        List<Long> ids = queryFactory.select(video.id)
                .from(video)
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .orderBy(video.createdAt.desc())
                .fetch();

        List<Video> videos = queryFactory.selectFrom(video)
                .leftJoin(video.videoKeywords)
                .fetchJoin()
                .where(video.id.in(ids))
                .fetch();


        JPAQuery<Long> countQuery = queryFactory
                .select(video.count())
                .from(video);

        return new PageImpl<>(videos, pageable, countQuery.fetchOne());
    }

    @Override
    public Page<Video> findAllWithKeywordsByVideoName(Pageable pageable, String videoName) {
        QVideo video = QVideo.video;

        List<Long> ids = queryFactory.select(video.id)
                .from(video)
                .where(video.videoName.containsIgnoreCase(videoName))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .orderBy(video.createdAt.desc())
                .fetch();

        List<Video> videos = queryFactory.selectFrom(video)
                .leftJoin(video.videoKeywords)
                .fetchJoin()
                .where(video.id.in(ids))
                .fetch();


        JPAQuery<Long> countQuery = queryFactory
                .select(video.count())
                .from(video);
        System.out.println(countQuery.fetchOne());
        return new PageImpl<>(videos, pageable, countQuery.fetchOne());
    }


}
