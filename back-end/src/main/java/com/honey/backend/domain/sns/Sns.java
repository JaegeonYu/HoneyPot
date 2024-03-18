package com.honey.backend.domain.sns;

import com.honey.backend.domain.assembly.Assembly;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@RequiredArgsConstructor
@Transactional
@Table(name = "sns")
public class Sns {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sns_id")
    private Long id;
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "assembly_id")
    private Assembly assembly;

    private String facebookUrl;
    private String twitterUrl;
    private String youtubeUrl;
    private String blogUrl;

    private Sns(Assembly assembly, String facebookUrl, String twitterUrl, String youtubeUrl, String blogUrl) {
        this.assembly = assembly;
        this.facebookUrl = facebookUrl;
        this.twitterUrl = twitterUrl;
        this.youtubeUrl = youtubeUrl;
        this.blogUrl = blogUrl;
    }

    public static Sns createSns(Assembly assembly, String facebookUrl, String twitterUrl, String youtubeUrl, String blogUrl) {
        return new Sns(assembly,facebookUrl,twitterUrl,youtubeUrl,blogUrl);

    }


}
