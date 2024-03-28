package com.honey.backend.domain.video;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Getter
public class Video {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "video_id")
    private Long id;

    private String videoName;

    @Column(length = 400)
    private String videoUrl;
    @Column(length = 400)
    private String imageUrl;

    private Long hits;
    private LocalDateTime creatAt;

}
