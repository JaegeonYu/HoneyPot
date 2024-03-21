package com.honey.backend.load.sns;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.assembly.AssemblyRepository;
import com.honey.backend.domain.sns.Sns;
import com.honey.backend.domain.sns.SnsRepository;
import com.honey.backend.load.committee.CommitteeLoadResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SnsLoadService {

    private final SnsRepository snsRepository;
    private final AssemblyRepository assemblyRepository;

    @Value("${SNS_INFO_URL}")
    private String snsInfoUrl;
    @Value("${SNS_INFO_KEY}")
    private String snsInfoKey;


    @Transactional
    public void insertSns() {

        if (initFlag()) {

            List<Assembly> assemblyList = assemblyRepository.findAll();
            float size = assemblyList.size();
            int a = 0;

            for (Assembly assembly : assemblyList) {
                System.out.print("SNS Load : " + String.format("%.2f", a++ / (size / 100)) + "% " + "\r");

                if (assembly.getMonaCd() == null) continue;
                SnsLoadResponse snsInfoResponse = getSnsInfo(assembly.getMonaCd());
                snsRepository.save(Sns.createSns(
                        assembly,
                        snsInfoResponse.F_URL() == null ? null : snsInfoResponse.F_URL(),
                        snsInfoResponse.T_URL() == null ? null : snsInfoResponse.T_URL(),
                        snsInfoResponse.Y_URL() == null ? null : snsInfoResponse.Y_URL(),
                        snsInfoResponse.B_URL() == null ? null : snsInfoResponse.B_URL()));
            }
            System.out.println("SNS Load : COMPLETE");

        }

    }


    public SnsLoadResponse getSnsInfo(String monaCd) {
        String responseBody = WebClient.create(snsInfoUrl)
                .get()
                .uri("?KEY=" + snsInfoKey + "&Type=json" + "&MONA_CD=" + monaCd)
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class).block();

        try {

            JSONObject jsonObject = new JSONObject(responseBody);
            JSONObject row = (JSONObject) ((JSONArray) jsonObject.get("negnlnyvatsjwocar")).get(1);
            JSONArray list = (JSONArray) row.get("row");
            JSONObject snsInfo = (JSONObject) list.get(0);
            ObjectMapper mapper = new ObjectMapper();
            SnsLoadResponse snsLoadResponse = mapper.readValue(snsInfo.toString(), SnsLoadResponse.class);
            return snsLoadResponse;


        } catch (JSONException e) {
            throw new RuntimeException(e);
        } catch (JsonMappingException e) {
            throw new RuntimeException(e);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

    }

    public boolean initFlag() {
        return snsRepository.count() == 0;
    }

}
