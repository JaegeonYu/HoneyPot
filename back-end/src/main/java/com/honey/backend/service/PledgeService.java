package com.honey.backend.service;

import com.honey.backend.domain.pledge.Pledge;
import com.honey.backend.domain.pledge.PledgeFulfillmentRate;
import com.honey.backend.domain.pledge.PledgeFulfillmentRateRepository;
import com.honey.backend.domain.pledge.PledgeRepository;
import com.honey.backend.exception.BaseException;
import com.honey.backend.exception.PledgeErrorCode;
import com.honey.backend.response.pledge.PledgeDetailResponse;
import com.honey.backend.response.pledge.PledgeFulfillmentStatus;
import com.honey.backend.response.pledge.PledgeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PledgeService {

    private final PledgeRepository pledgeRepository;
    private final PledgeFulfillmentRateRepository pledgeFulfillmentRateRepository;


    public PledgeResponse getPledge(Long assemblyId) {
        PledgeFulfillmentRate pledgeFulfillmentRate = pledgeFulfillmentRateRepository.findByAssemblyId(assemblyId)
                .orElse(null);

        if(pledgeFulfillmentRate == null) {
            return new PledgeResponse(-1L,new PledgeFulfillmentStatus(0,0,0,0,0,0));
        }
        return new PledgeResponse(
                pledgeFulfillmentRate.getId(),
                getPledgeFulfillmentStatus(pledgeFulfillmentRate)
        );
    }

    public List<PledgeDetailResponse> getPledgeDetail(Long pledgeFulfilmentRateId) {
        List<Pledge> pledgeList = pledgeRepository.findAllByPledgeFulfillmentRateId(pledgeFulfilmentRateId)
                .orElse(null);
        if(pledgeList == null)
            return null;
        List<PledgeDetailResponse> pledgeDetailResponseList = new ArrayList<>();
        for (Pledge pledge : pledgeList) {
            pledgeDetailResponseList.add(getPledgeDetail(pledge));
        }
        return pledgeDetailResponseList;
    }

    private PledgeFulfillmentStatus getPledgeFulfillmentStatus(PledgeFulfillmentRate pledgeFulfillmentRate) {
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

    private PledgeDetailResponse getPledgeDetail(Pledge pledge) {
        return new PledgeDetailResponse(
                pledge.getId(),
                pledge.getTurn(),
                deleteTitle(pledge.getPledgeName(), "공약명"),
                deleteTitle(pledge.getPledgeSummary(), "공약내용요약"),
                pledge.getNatureDivisionNationalRegional(),
                pledge.getNatureDivisionLegislationFinance(),
                pledge.getFulfillmentRate(),
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
            String[] split = src.split(":");
            return  split.length == 1 ? null : split[1].trim();
        } else return src;

    }
}
