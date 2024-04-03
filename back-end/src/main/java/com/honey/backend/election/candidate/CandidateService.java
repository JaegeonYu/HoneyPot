package com.honey.backend.election.candidate;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.honey.backend.election.exception.ElectionErrorCode;
import com.honey.backend.election.region.TotalRegion;
import com.honey.backend.election.region.TotalRegionRepository;
import com.honey.backend.exception.BaseException;
import com.honey.backend.service.S3Upload;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CandidateService {

    private final CandidateRepository candidateRepository;
    private final TotalRegionRepository totalRegionRepository;
    private final AmazonS3 s3Client;
    private final CandidateImageRepository candidateImageRepository;
    private final S3Upload s3Upload;


    public CandidateResponse getDetailCandidate(Long candidateId) {
        Candidate candidate = candidateRepository.findById(candidateId).orElseThrow();

        return convertToCandidateResponse(candidate);
    }

    public CandidateListResponse getList(CandidateRequest candidateRequest) {
        int limit = candidateRequest.limit();
        int page = candidateRequest.page();
        String sido = candidateRequest.sido();
        ;
        String sigungu = candidateRequest.sigungu();
        String dong = candidateRequest.dong();
        TotalRegion totalRegion = totalRegionRepository.findBySidoAndSigunguAndDongContains(sido, sigungu, dong).orElseThrow(
                () -> new BaseException(ElectionErrorCode.REGION_NOT_FOUND)
        );
        Page<Candidate> candidateList = candidateRepository.findAllBySggName(PageRequest.of(page, limit), totalRegion.getElectionRegion());

        List<CandidateResponse> candidateResponseList = new ArrayList<>();

        for (Candidate candidate : candidateList) {
            candidateResponseList.add(convertToCandidateResponse(candidate));
        }
        return new CandidateListResponse(candidateList.getNumberOfElements(), candidateResponseList);
    }


    public void convertPdfToImages(Long candidateId) {
//        Candidate candidate = candidateRepository.findById(candidateId).orElseThrow();
        List<Candidate> all = candidateRepository.findAll();

//        for(Candidate candidate : all){
//            saveImage(candidate);
//
//        }



    }

//    @Transactional
//    protected void saveImage(Candidate candidate) {
//        System.out.println(candidate.getId());
//        System.out.println(candidate.getHgname());
//        if(candidate.getId() < 10L) return;
//
//        String sggName = candidate.getSggName();
//        String hgName = candidate.getHgname();
//        String fileName = "20240410_" + sggName + "_" + hgName + "_선거공보.pdf";
//        List<byte[]> pageImages = new ArrayList<>();
//
//        try {
//            String encodedFileName = URLEncoder.encode(fileName, "UTF-8");
//            String pdfUrl = "https://d1x6bubco94kr4.cloudfront.net/pdfs/" + encodedFileName;
//
//            URL url = new URL(pdfUrl);
//            URLConnection connection = url.openConnection();
//            InputStream inputStream = connection.getInputStream();
//
//            PDDocument document = PDDocument.load(inputStream);
//            PDFRenderer pdfRenderer = new PDFRenderer(document);
//
//            for (int pageIndex = 0; pageIndex < document.getNumberOfPages(); pageIndex++) {
//                BufferedImage image = pdfRenderer.renderImage(pageIndex);
//                ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
//                ImageIO.write(image, "png", outputStream);
//                byte[] imageBytes = outputStream.toByteArray();
//                InputStream in = new ByteArrayInputStream(imageBytes);
//                ObjectMetadata objectMetadata = new ObjectMetadata();
//                objectMetadata.setContentLength(imageBytes.length);
//                String imageUrl = s3Upload.uploadImageInput(in, objectMetadata).get();
//                CandidateImage candidateImage = new CandidateImage(pageIndex, s3Upload.convertImageUrl(imageUrl), candidate);
//                candidateImageRepository.save(candidateImage);
////                pageImages.add(outputStream.toByteArray());
//                outputStream.close();
//            }
//
//            document.close();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }

    private CandidateResponse convertToCandidateResponse(Candidate candidate) {
        return new CandidateResponse(
                candidate.getId(),
                candidate.getCandidateImgUrl(),
                candidate.getSgDate(),
                candidate.getSgTypeCode(),
                candidate.getHuboid(),
                candidate.getSggName(),
                candidate.getSdName(),
                candidate.getWiwName(),
                candidate.getGiho(),
                candidate.getJdName(),
                candidate.getHgname(),
                candidate.getHjName(),
                candidate.getGender(),
                candidate.getBirthday(),
                candidate.getAge(),
                candidate.getAddr(),
                candidate.getJob(),
                candidate.getEdu(),
                candidate.getCareer1(),
                candidate.getCareer2(),
                candidate.getStatus()
        );
    }


}
