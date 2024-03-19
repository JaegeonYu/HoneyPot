package com.honey.backend.response;

public record SnsResponse(
        Long snsId,
        Long assemblyId,
        String facebookUrl,
        String twitterUrl,
        String youtubeUrl,
        String blogUrl
) {

}
