package com.honey.backend.load.poly;

import com.honey.backend.domain.poly.Poly;
import com.honey.backend.domain.poly.PolyRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.configurationprocessor.json.JSONArray;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class PolyLoadService {

    private final PolyRepository polyRepository;
    @Value("${POLY_INFO_URL}")
    private String baseurl;

    @Value("${POLY_INFO_KEY}")
    private String secret;

    @Transactional
    public void insertPoly() {

        if (initFlag()) {
            System.out.println("============LOAD POLY============");

            List<PolyInfoResponse> polyInfoResponseList = getPolyInfo();
            for (PolyInfoResponse polyInfoResponse : polyInfoResponseList) {
                polyRepository.save(Poly.createPoly(polyInfoResponse.POLY_NM(), "logoURL", polyInfoResponse.N3(), ""));
            }
            System.out.println("============LOAD POLY COMPLETE============");
        }

    }


    public List<PolyInfoResponse> getPolyInfo() {
        String responseBody = WebClient.create(baseurl)
                .get()
                .uri("/?KEY=" + secret + "&Type=json")
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class).block();

        try {
            JSONObject jsonObject = new JSONObject(responseBody);
            JSONObject row = (JSONObject) ((JSONArray) jsonObject.get("nepjpxkkabqiqpbvk")).get(1);
            JSONArray list = (JSONArray) row.get("row");
            ObjectMapper mapper = new ObjectMapper();
            List<PolyInfoResponse> polyInfoResponseList = mapper.readValue(list.toString(), new TypeReference<List<PolyInfoResponse>>() {
            });
            return polyInfoResponseList;


        } catch (JSONException e) {
            throw new RuntimeException(e);
        } catch (JsonMappingException e) {
            throw new RuntimeException(e);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }

    }

    public boolean initFlag() {
        if (polyRepository.count() == 0)
            return true;
        else return false;
    }

}
