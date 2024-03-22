package com.honey.backend.load.committee;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.honey.backend.domain.committee.Committee;
import com.honey.backend.domain.committee.CommitteeRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CommitteeLoadService {

    @Value("${CMIT_INFO_URL}")
    private String infoUrl;
    @Value("${CMIT_INFO_KEY}")
    private String infoKey;

    private final CommitteeRepository committeeRepository;

    public void insertCommittee() {
        if (initFlag()) {
            List<CommitteeLoadResponse> committeeLoadResponseList = getCommitteeList();
            float size = committeeLoadResponseList.size();
            int a = 0;

            for (CommitteeLoadResponse committeeLoadResponse : committeeLoadResponseList) {
                System.out.print("Committee Load : " + String.format("%.2f", a++ / (size / 100)) + "% " + "\r");

                committeeRepository.save(Committee.createCommittee(committeeLoadResponse.COMMITTEE_NAME(), committeeLoadResponse.HR_DEPT_CD(), committeeLoadResponse.HG_NM(), true));

            }
            System.out.println("Committee Load : COMPLETE");

            committeeRepository.save(Committee.createCommittee("미배정", null, null, false));


        }
    }


    public List<CommitteeLoadResponse> getCommitteeList() {
        String responseBody = WebClient.create(infoUrl)
                .get()
                .uri("?KEY=" + infoKey + "&Type=json" + "&pIndex=" + 1 + "&pSize=" + 100)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class).block();

        try {
            JSONObject jsonObject = new JSONObject(responseBody);
            JSONObject row = (JSONObject) ((JSONArray) jsonObject.get("nxrvzonlafugpqjuh")).get(1);
            JSONArray list = (JSONArray) row.get("row");

            ObjectMapper mapper = new ObjectMapper();

            List<CommitteeLoadResponse> responseList;
            responseList = mapper.readValue(list.toString(), new TypeReference<List<CommitteeLoadResponse>>() {
            });
            return responseList;


        } catch (JSONException e) {
            throw new RuntimeException(e);
        } catch (JsonMappingException e) {
            throw new RuntimeException(e);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

    }

    public boolean initFlag() {
        return committeeRepository.count() == 0;
    }

}
