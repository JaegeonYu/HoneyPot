package com.honey.backend.election.candidate;

import lombok.Data;

import java.util.List;

@Data
public class PdfConversionImagesResponse {
    List<String> imageList;

    public PdfConversionImagesResponse(List<String> imageList) {
        this.imageList = imageList;
    }
}
