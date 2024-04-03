package com.honey.backend.service;

import com.honey.backend.domain.pledge.*;
import com.honey.backend.request.PledgeRequest;
import com.honey.backend.response.pledge.PledgeDetailResponse;
import com.honey.backend.response.pledge.PledgeFulfillmentStatus;
import com.honey.backend.response.pledge.PledgeListResponse;
import com.honey.backend.response.pledge.PledgeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PledgeService {

    private final PledgeRepository24 pledgeRepository24;
    private final PledgeFulfillmentRateRepository24 pledgeFulfillmentRateRepository24;
    private final PledgeRepository22 pledgeRepository22;
    private final PledgeFulfillmentRateRepository22 pledgeFulfillmentRateRepository22;


    public PledgeResponse getPledge(Long assemblyId) {
        PledgeResponse pledgeResponse;
        if (pledgeFulfillmentRateRepository24.existsByAssemblyId(assemblyId)) {
            PledgeFulfillmentRate24 pledgeFulfillmentRate = pledgeFulfillmentRateRepository24.findByAssemblyId(assemblyId)
                    .orElse(null);
            if (pledgeFulfillmentRate == null) {
                pledgeResponse = new PledgeResponse(-1L, "", new PledgeFulfillmentStatus(0, 0, 0, 0, 0, 0));
            } else {
                // 이 위치에 날짜
                pledgeResponse = new PledgeResponse(
                        pledgeFulfillmentRate.getId(), pledgeFulfillmentRate.getImportDate(),
                        getPledgeFulfillmentStatus24(pledgeFulfillmentRate));
            }
        } else {
            PledgeFulfillmentRate22 pledgeFulfillmentRate = pledgeFulfillmentRateRepository22.findByAssemblyId(assemblyId)
                    .orElse(null);
            if (pledgeFulfillmentRate == null) {
                pledgeResponse = new PledgeResponse(-1L, "", new PledgeFulfillmentStatus(0, 0, 0, 0, 0, 0));
            } else {
                // 이 위치에 날짜
                pledgeResponse = new PledgeResponse(
                        pledgeFulfillmentRate.getId(), pledgeFulfillmentRate.getImportDate(),
                        getPledgeFulfillmentStatus22(pledgeFulfillmentRate));
            }
        }
        return pledgeResponse;
    }

    public PledgeListResponse getPledgeDetailList(PledgeRequest pledgeRequest, Long pledgeFulfilmentRateId, String date) {
        List<PledgeDetailResponse> pledgeDetailResponseList = new ArrayList<>();
        if (date.equals("2024-04")) {
            Page<Pledge24> pledgeList = pledgeRepository24.findAllByPledgeFulfillmentRateId(PageRequest.of(pledgeRequest.page(), pledgeRequest.limit()), pledgeFulfilmentRateId)
                    .orElse(null);
            if (pledgeList == null)
                return null;

            for (Pledge24 pledge : pledgeList) {
                pledgeDetailResponseList.add(getPledgeDetail24(pledge));
            }
            return new PledgeListResponse((int) pledgeList.getTotalElements(), pledgeDetailResponseList);

        } else {
            Page<Pledge22> pledgeList = pledgeRepository22.findAllByPledgeFulfillmentRateId(PageRequest.of(pledgeRequest.page(), pledgeRequest.limit()), pledgeFulfilmentRateId)
                    .orElse(null);
            if (pledgeList == null)
                return null;
            for (Pledge22 pledge : pledgeList) {
                pledgeDetailResponseList.add(getPledgeDetail22(pledge));
            }
            return new PledgeListResponse((int) pledgeList.getTotalElements(), pledgeDetailResponseList);

        }
    }

    private PledgeFulfillmentStatus getPledgeFulfillmentStatus24(PledgeFulfillmentRate24 pledgeFulfillmentRate) {
        // 여기서 int 로 변환을 시켜준다.
        // 값은 전부 String 으로 들어온다.
        // 숫자가 아닌 문자가 포함되는 경우도 있다.
        int defaultValue = 0;

        int completedPledges = extractFirstNumber(pledgeFulfillmentRate.getCompletedPledges(), defaultValue);
        int ongoingPledges = extractFirstNumber(pledgeFulfillmentRate.getOngoingPledges(), defaultValue);
        int pendingPledges = extractFirstNumber(pledgeFulfillmentRate.getPendingPledges(), defaultValue);
        int discardedPledges = extractFirstNumber(pledgeFulfillmentRate.getDiscardedPledges(), defaultValue);
        int otherPledges = extractFirstNumber(pledgeFulfillmentRate.getOtherPledges(), defaultValue);
        int totalPledges = completedPledges + ongoingPledges + pendingPledges + discardedPledges + otherPledges;
        return new PledgeFulfillmentStatus(
                totalPledges, completedPledges, ongoingPledges, pendingPledges, discardedPledges, otherPledges
        );
    }

    private PledgeFulfillmentStatus getPledgeFulfillmentStatus22(PledgeFulfillmentRate22 pledgeFulfillmentRate) {
        // 여기서 int 로 변환을 시켜준다.
        // 값은 전부 String 으로 들어온다.
        // 숫자가 아닌 문자가 포함되는 경우도 있다.
        int defaultValue = 0;

        int completedPledges = extractFirstNumber(pledgeFulfillmentRate.getCompletedPledges(), defaultValue);
        int ongoingPledges = extractFirstNumber(pledgeFulfillmentRate.getOngoingPledges(), defaultValue);
        int pendingPledges = extractFirstNumber(pledgeFulfillmentRate.getPendingPledges(), defaultValue);
        int discardedPledges = extractFirstNumber(pledgeFulfillmentRate.getDiscardedPledges(), defaultValue);
        int otherPledges = extractFirstNumber(pledgeFulfillmentRate.getOtherPledges(), defaultValue);
        int totalPledges = completedPledges + ongoingPledges + pendingPledges + discardedPledges + otherPledges;
        return new PledgeFulfillmentStatus(
                totalPledges, completedPledges, ongoingPledges, pendingPledges, discardedPledges, otherPledges
        );
    }

    private PledgeDetailResponse getPledgeDetail24(Pledge24 pledge) {
        String fulfillmentRate = "";
        if (pledge.getFulfillmentRate().contains("추진중") || pledge.getFulfillmentRate().contains("추진 중")) {
            fulfillmentRate = "추진중";
            if (pledge.getFulfillmentRate().contains("완료")) {
                fulfillmentRate = "기타";
            }
        } else if (pledge.getFulfillmentRate().contains("완료")) {
            fulfillmentRate = "완료";
        } else if (pledge.getFulfillmentRate().contains("폐기")) {
            fulfillmentRate = "폐기";
        } else if (pledge.getFulfillmentRate().contains("보류")) {
            fulfillmentRate = "보류";
        } else {
            fulfillmentRate = "기타";
        }
        String summary = pledge.getPledgeSummary();
        if (pledge.getPledgeSummary().contains("공약내용요약") || pledge.getPledgeSummary().contains("공약내용 요약")) {
            summary = "공약내용요약 :";
        }
        return new PledgeDetailResponse(
                pledge.getId(),
                pledge.getTurn(),
                deleteTitle(pledge.getPledgeName(), "공약명 :"),
                deleteTitle(pledge.getPledgeSummary(), summary),
                pledge.getNatureDivisionNationalRegional(),
                pledge.getNatureDivisionLegislationFinance(),
                fulfillmentRate,
                pledge.getRequiredBudgetAmount(),
                pledge.getSecuredBudgetAmount(),
                deleteTitle(pledge.getOtherImplementationBasis(), "기타 이행 근거")
        );

    }

    private PledgeDetailResponse getPledgeDetail22(Pledge22 pledge) {
        String fulfillmentRate = "";
        if (pledge.getFulfillmentRate().contains("추진중") || pledge.getFulfillmentRate().contains("추진 중")) {
            fulfillmentRate = "추진중";
            if (pledge.getFulfillmentRate().contains("완료")) {
                fulfillmentRate = "기타";
            }
        } else if (pledge.getFulfillmentRate().contains("완료")) {
            fulfillmentRate = "완료";
        } else if (pledge.getFulfillmentRate().contains("폐기")) {
            fulfillmentRate = "폐기";
        } else if (pledge.getFulfillmentRate().contains("보류")) {
            fulfillmentRate = "보류";
        } else {
            fulfillmentRate = "기타";
        }
        String summary = pledge.getPledgeSummary();
        if (pledge.getPledgeSummary().contains("공약내용요약") || pledge.getPledgeSummary().contains("공약내용 요약")) {
            summary = "공약내용요약 :";
        }
        return new PledgeDetailResponse(
                pledge.getId(),
                pledge.getTurn(),
                deleteTitle(pledge.getPledgeName(), "공약명 :"),
                deleteTitle(pledge.getPledgeSummary(), summary),
                pledge.getNatureDivisionNationalRegional(),
                pledge.getNatureDivisionLegislationFinance(),
                fulfillmentRate,
                pledge.getRequiredBudgetAmount(),
                pledge.getSecuredBudgetAmount(),
                deleteTitle(pledge.getOtherImplementationBasis(), "기타 이행 근거")
        );

    }

    private int extractFirstNumber(String value, int defaultValue) {
        // 문자열을 처음부터 순회하면서 숫자를 찾아냅니다.
        StringBuilder sb = new StringBuilder();
        for (char c : value.toCharArray()) {
            if (Character.isDigit(c)) {
                sb.append(c);
            } else if (!sb.isEmpty()) {
                // 숫자가 아닌 문자가 나오면 숫자 추출을 중단합니다.
                break;
            }
        }
        // 추출한 숫자가 없는 경우 기본값을 반환합니다.
        if (sb.isEmpty()) {
            return defaultValue;
        }
        // 추출한 숫자를 정수로 변환하여 반환합니다.
        return Integer.parseInt(sb.toString());
    }

    private String deleteTitle(String src, String tool) {
        if (src.startsWith(tool)) {
            String[] split = src.split(tool);
            return split[1];

        } else return src;

    }

}
