package com.honey.backend.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class S3Config {
    final String endPoint = "https://kr.object.ncloudstorage.com";
    final String regionName = "kr-standard";

    @Value("${s3.id}")
    private String accessKey;
    @Value("${s3.secret}")
    private String secretKey;


}

