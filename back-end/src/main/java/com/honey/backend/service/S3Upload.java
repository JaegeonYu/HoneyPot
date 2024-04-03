package com.honey.backend.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Optional;
import java.util.UUID;

@Component
@Slf4j
@RequiredArgsConstructor
public class S3Upload {
    private final AmazonS3 s3;

    @Value("${cloud_front.url}")
    private String url;

    @Value("${aws.s3.bucket}")
    private String bucket;

    public Optional<String> uploadImage(MultipartFile multipartFile) throws IOException {
        File uploadFile = convert(multipartFile)
                .orElseThrow(() -> new IllegalArgumentException("MultipartFile -> File 전환 실패"));
        return Optional.of(putS3AndReturnURL(uploadFile));
    }

    public Optional<String> uploadImageInput(InputStream in, ObjectMetadata objectMetadata) throws IOException {
        String uuid = UUID.randomUUID().toString();
        String fileName = uuid +".jpg";

        s3.putObject(bucket, "images/"+fileName, in, objectMetadata);
        return Optional.of(fileName);
    }


    // MultipartFile -> File convert
    private Optional<File> convert(MultipartFile file) throws IOException {
        if(verify(file)){
            File convertFile = new File(file.getOriginalFilename());
            if(convertFile.createNewFile()) {
                try (FileOutputStream fos = new FileOutputStream(convertFile)) {
                    fos.write(file.getBytes());
                }
                return Optional.of(convertFile);
            }
            return Optional.empty();
        }
        throw new RuntimeException("not image"); // TODO Exception
    }
    // S3 업로드 및 url 반환
    private String putS3AndReturnURL(File uploadFile) {
        String uuid = UUID.randomUUID().toString();
        String fileName = "images" + "/" + uuid + uploadFile.getName();
        String uploadImageUrl = putS3(uploadFile, fileName);

        removeNewFile(uploadFile);

        return uploadImageUrl;      // 업로드된 파일의 S3 URL 주소 반환
    }

    // null 체크, 이미지 타입 체크
    private boolean verify(MultipartFile multipartFile) {
        if (multipartFile != null && multipartFile.getSize() > 0 && multipartFile.getOriginalFilename() != null) {
            String contentType = multipartFile.getContentType();
            return (contentType != null) && contentType.toLowerCase().startsWith("image");
        }
        return false;
    }

    // s3 버킷 put
    private String putS3(File uploadFile, String fileName) {
        s3.putObject(
                new PutObjectRequest(bucket, fileName, uploadFile)
                        .withCannedAcl(CannedAccessControlList.PublicRead)    // PublicRead 권한 업로드
        );
        return url + "/" + fileName;
    }

    // 로컬에 생성된 File 삭제 (MultipartFile -> File 전환 하며 로컬에 파일 생성)
    private void removeNewFile(File targetFile) {
        if (targetFile.delete()) {
            log.info("파일이 삭제되었습니다.");
        } else {
            log.info("파일이 삭제되지 못했습니다.");
        }
    }


    public String convertImageUrl(String imageName){
        return url+"/images/"+imageName;
    }
}
