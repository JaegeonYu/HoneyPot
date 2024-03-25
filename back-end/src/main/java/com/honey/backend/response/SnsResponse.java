package com.honey.backend.response;

public record SnsResponse(
        Long snsId,
        String facebookUrl,
        String twitterUrl,
        String youtubeUrl,
        String blogUrl
) {

}
