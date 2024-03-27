package com.honey.backend.response.assembly;

public record SnsResponse(
        Long snsId,
        String facebookUrl,
        String twitterUrl,
        String youtubeUrl,
        String blogUrl
) {

}
