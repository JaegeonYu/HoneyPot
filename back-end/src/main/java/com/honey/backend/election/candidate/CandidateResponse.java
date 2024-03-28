package com.honey.backend.election.candidate;

public record CandidateResponse(
        String candidateImgUrl,

        String sgDate,
        int sgTypeCode,
        Long huboid,

        String sggName,
        String sdName,
        String wiwName,
        int giho,
        String jdName,
        String hgname,
        String hjName,
        String gender,
        String birthday,
        int age,


        String addr,
        String job,
        String edu,
        String career1,
        String career2,
        String status
) {
}
