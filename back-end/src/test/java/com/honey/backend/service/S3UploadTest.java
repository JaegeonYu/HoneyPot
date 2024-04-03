package com.honey.backend.service;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;

import java.io.IOException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class S3UploadTest {
    @Autowired
    private S3Upload s3Uploader;

    @Test
    @DisplayName("image contentType success")
    public void testS3Image() throws IOException {
        byte[] content = new byte[1024];
        MockMultipartFile multipartFile = new MockMultipartFile("image", "image.jpg", MediaType.IMAGE_JPEG_VALUE, content);

        Optional<String> returnUrl = s3Uploader.uploadImage(multipartFile);

        assertNotNull(returnUrl.get());
    }
}