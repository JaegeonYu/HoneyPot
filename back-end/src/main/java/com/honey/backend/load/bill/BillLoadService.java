package com.honey.backend.load.bill;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.assembly.AssemblyRepository;
import com.honey.backend.domain.bill.Bill;
import com.honey.backend.domain.bill.BillRepository;
import com.honey.backend.domain.committee.Committee;
import com.honey.backend.domain.committee.CommitteeRepository;
import jakarta.transaction.Transactional;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;
import lombok.RequiredArgsConstructor;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.DefaultUriBuilderFactory;

import java.io.StringReader;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class BillLoadService {

    private final Logger logger = LoggerFactory.getLogger("LoggingDataLoad");
    @Value("${BILL_INFO_URL}")
    private String infoUrl;
    @Value("${BILL_INFO_KEY}")
    private String infoKey;
    @Value("${BODY_INFO_URL}")
    private String bodyUrl;
    @Value("${BODY_INFO_KEY}")
    private String bodyKey;

    private final BillRepository billRepository;
    private final AssemblyRepository assemblyRepository;
    private final CommitteeRepository committeeRepository;

    @Transactional
    public void insert() {
        if (initFlag()) {
        insertBill();
        updateTextBody();
        }
    }

    @Scheduled(cron = "0 0 3 * * *", zone = "Asia/Seoul")
    public void updateWithSchedule() {
        if (!initFlag()) {
            insertBill();
            updateTextBody();
        }
    }

    @Transactional
    public void insertBill() {
        List<Bill> billsToSave = new ArrayList<>();
        List<BillLoadResponse> infoResponseList = getBillList();
        int count = 1;
        float size = infoResponseList.size();
        for (BillLoadResponse billLoadResponse : infoResponseList) {
            // COMMITTEE와 연결
            Committee committee = connectCommittee(billLoadResponse);

            // ASSEMBLY와 연결
            String[] splitName = billLoadResponse.RST_PROPOSER().split(",");
            String[] splitCode = billLoadResponse.RST_MONA_CD().split(",");

            for (int i = 0; i < splitCode.length; i++) {
                Assembly assembly = assemblyRepository.findByMonaCd(splitCode[i]).orElse(
                        assemblyRepository.findByHgName("UNKNOWN").orElseThrow()
                );

                billsToSave.add(createBillInfo(committee, assembly, billLoadResponse, splitName[i]));

            }

            logger.info("Bill Saving : " + String.format("%.2f", count++ / (size / 100)) + "% " + "\r");
        }
        if (!billsToSave.isEmpty()) {
            billRepository.saveAll(billsToSave);
        }
        logger.info("Bill Saving : COMPLETE");
    }

    public void updateTextBody() {

        List<BillTextBodyResponse> billTextBodyResponseList = getTextBody();
        float size = billTextBodyResponseList.size();
        int count = 0;
        for (BillTextBodyResponse billTextBodyResponse : billTextBodyResponseList) {

            List<Bill> bills = billRepository.findAllByBillNo(billTextBodyResponse.billNo()).orElse(null);

            if (bills == null) continue;
            for (Bill bill : bills) {

                logger.info("Bill Body Update : " + String.format("%.2f", count++ / (size / 100)) + "% " + "\r");
                billRepository.updateTextBodyByBillNo(
                        billTextBodyResponse.summary(),
                        bill.getBillNo()
                );

            }
        }

        logger.info("Bill Body Update  : COMPLETE");

    }


    public List<BillLoadResponse> getBillList() {
        List<BillLoadResponse> billLoadResponseList = new ArrayList<>();
        int count = 0;
        int totalCount = 5;
        int limit = 150;
        ExchangeStrategies exchangeStrategies = ExchangeStrategies.builder()
                .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(-1))
                .build();
        for (int i = 1; i <= totalCount; i++) {

            String uri = "?KEY=" + infoKey + "&Type=json" + "&pIndex=" + i + "&pSize=" + limit + "&PROPOSER_KIND=의원" + "&AGE=21";
            String responseBody = WebClient.builder().
                    exchangeStrategies(exchangeStrategies).
                    baseUrl(infoUrl).
                    build()
                    .get()
                    .uri(uri)
                    .accept(MediaType.APPLICATION_JSON)
                    .retrieve()
                    .bodyToMono(String.class).block();
            try {
                JSONArray list = getJsonArray("TVBPMBILL11", responseBody);
                int totalLength = getTotalLength(responseBody);
                ObjectMapper mapper = new ObjectMapper();
                float size = (float) totalLength;
                totalCount = (totalLength / limit) + 1;
                for (int j = 0; j < list.length(); j++) {
                    JSONObject item = ((JSONObject) list.get(j));
                    BillLoadResponse billLoadResponse = mapper.readValue(item.toString(), BillLoadResponse.class);
                    billLoadResponseList.add(billLoadResponse);
                    System.out.print("Bill Api Call : " + String.format("%.2f", count++ / (size / 100)) + "% " + "\r");

                }
            } catch (JSONException e) {
                throw new RuntimeException(e);
            } catch (JsonMappingException e) {
                throw new RuntimeException(e);
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        }
        System.out.println("Bill Api Call : COMPLETE");
        return billLoadResponseList;
    }

    public List<BillTextBodyResponse> getTextBody() {
        DefaultUriBuilderFactory factory = new DefaultUriBuilderFactory();
        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.NONE);
        ExchangeStrategies exchangeStrategies = ExchangeStrategies.builder()
                .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(-1))
                .build();
        int totalCount = 5;
        int a = 1;
        int limit = 150;
        List<BillTextBodyResponse> responseList = new ArrayList<>();

        for (int i = 1; i <= totalCount; i++) {

            String uri = "?serviceKey=" + bodyKey + "&numOfRows=" + limit + "&pageNo=" + i + "&ord=A01"
                    + "&start_ord=21&end_ord=21" + "&proposer_kind_cd=F01" + "&bill_kind_cd=B04";

            String responseBody = WebClient.builder()
                    .exchangeStrategies(exchangeStrategies)
                    .uriBuilderFactory(factory)
                    .build()
                    .get()
                    .uri(bodyUrl + uri)
                    .retrieve()
                    .bodyToMono(String.class).block();

            try {
                JAXBContext jaxbContext = JAXBContext.newInstance(Response.class);
                Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
                Response apiResponse = (Response) unmarshaller.unmarshal(new StringReader(responseBody));

                Items items = apiResponse.getBody().getItems();
                int totalLength = apiResponse.getBody().getTotalCount();
                totalCount = (totalLength / limit) + 1;
                float size = (float) totalLength;
                for (Item item : items.getItem()) {
                    System.out.print("Bill Body Api Call : " + String.format("%.2f", a++ / (size / 100)) + "% " + "\r");
                    BillTextBodyResponse billTextBodyResponse = new BillTextBodyResponse(
                            item.getBillId(), item.getBillNo(),
                            item.getSummary() == null ? null : item.getSummary());

                    responseList.add(billTextBodyResponse);
                }
            } catch (JAXBException e) {

                throw new RuntimeException();

            }
        }
        System.out.println("Bill Body Api Call : COMPLETE");
        return responseList;
    }

    private boolean initFlag() {
        return billRepository.count() == 0;
    }

    private Committee connectCommittee(BillLoadResponse billLoadResponse) {
        Committee committee = null;
        if (billLoadResponse.CURR_COMMITTEE() == null) {
            committee = committeeRepository.findByCmitName("미배정").orElseThrow();
        } else {
            committee = committeeRepository.findByCmitName(billLoadResponse.CURR_COMMITTEE()).orElse(
                    null);
            if (committee == null) {
                committee = Committee.createCommittee(billLoadResponse.CURR_COMMITTEE(), billLoadResponse.CURR_COMMITTEE_ID(), "UNKNOWN", false);
                committeeRepository.save(committee);
            }
        }
        return committee;
    }

    private Bill createBillInfo(Committee committee, Assembly assembly, BillLoadResponse billLoadResponse, String
            name) {

        Bill bill = Bill.createBill(billLoadResponse.BILL_NO(),
                billLoadResponse.BILL_NAME(), billLoadResponse.PROPOSER(),
                name, assembly,
                "EMPTY", committee,
                billLoadResponse.CMT_PROC_DT(),
                billLoadResponse.CMT_PRESENT_DT(),
                billLoadResponse.COMMITTEE_DT(),
                billLoadResponse.CMT_PROC_RESULT_CD(),
                billLoadResponse.LAW_PROC_DT(),
                billLoadResponse.LAW_PRESENT_DT(),
                billLoadResponse.LAW_SUBMIT_DT(),
                billLoadResponse.LAW_PROC_RESULT_CD(),
                billLoadResponse.PROPOSE_DT(),
                billLoadResponse.PROC_DT(),
                billLoadResponse.PROC_RESULT_CD(),
                billLoadResponse.LINK_URL());

        return bill;
    }

    private JSONArray getJsonArray(String root, String responseBody) {
        JSONObject jsonObject = new JSONObject(responseBody);
        JSONObject row = (JSONObject) ((JSONArray) jsonObject.get(root)).get(1);
        return (JSONArray) row.get("row");
    }

    private int getTotalLength(String responseBody) {
        JSONObject jsonObject = new JSONObject(responseBody);
        JSONObject head = (JSONObject) ((JSONArray) jsonObject.get("TVBPMBILL11")).get(0);
        String totalCount = ((JSONObject) ((JSONArray) head.get("head")).get(0)).get("list_total_count").toString();
        return Integer.parseInt(totalCount);
    }
}
