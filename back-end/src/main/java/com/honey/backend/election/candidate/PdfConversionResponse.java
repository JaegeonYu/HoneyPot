package com.honey.backend.election.candidate;

import java.util.List;

public record PdfConversionResponse(
        List<byte[]> imageList
) {

}

