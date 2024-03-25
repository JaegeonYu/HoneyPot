package com.honey.backend.load.hotissue;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SummaryResponseDto {
    String[] result;
    String keyword;
}
