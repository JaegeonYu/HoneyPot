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
import com.honey.backend.load.sns.SnsLoadResponse;
import jakarta.transaction.Transactional;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.configurationprocessor.json.JSONArray;
import org.springframework.boot.configurationprocessor.json.JSONException;
import org.springframework.boot.configurationprocessor.json.JSONObject;
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
            System.out.println("============LOAD BILL============");
            insertBill();
            updateTextBody();
            System.out.println("============LOAD BILL COMPLETE============");
        }
    }

    @Scheduled(cron = "0 0 3 * * *", zone = "Asia/Seoul")
    public void updateWithSchedule() {
        if (!initFlag()) {
            System.out.println("==========UPDATE BILL============");
            List<Bill> billList = billRepository.findAllByProcResultIsNotNull().orElseThrow();
            for (Bill bill : billList) {
                BillLoadResponse billLoadResponse = scheduleUpdateBill(bill);
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
                if (billLoadResponse.RST_MONA_CD() != null) {
                    String[] splitName = billLoadResponse.RST_PROPOSER().split(",");
                    String[] splitCode = billLoadResponse.RST_MONA_CD().split(",");
                    for (int i = 0; i < splitCode.length; i++) {
                        Assembly assembly = assemblyRepository.findByMonaCd(splitCode[i]).orElse(
                                assemblyRepository.findByHgName("UNKNOWN").orElseThrow()
                        );

                        bill.updateSchedule(
                                billLoadResponse.BILL_NAME(),
                                billLoadResponse.PROPOSER(),
                                splitName[i],
                                assembly,
                                billLoadResponse.PROPOSER(),
                                committee,
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
                                billLoadResponse.LINK_URL(),
                                null,
                                null
                        );
                    }

                }

            }
            updateTextBody();
            System.out.println("==========UPDATE BILL COMPLETE============");
        }
    }
    private BillLoadResponse scheduleUpdateBill(Bill bill) {


        String responseBody = WebClient.create(infoUrl)
                .get()
                .uri("?KEY=" + infoKey + "&Type=json" + "&pIndex=" + 1 + "&pSize=" + 5 + "PROPOSER_KIND=의원" + "&BILL_NO=" + bill.getBillNo())
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class).block();

        BillLoadResponse billLoadResponse = null;
        try {
            JSONObject jsonObject = new JSONObject(responseBody);
            JSONObject row = (JSONObject) ((JSONArray) jsonObject.get("TVBPMBILL11")).get(1);
            JSONArray list = (JSONArray) row.get("row");
            JSONObject billInfo = (JSONObject) list.get(0);
            ObjectMapper mapper = new ObjectMapper();
            billLoadResponse = mapper.readValue(billInfo.toString(), BillLoadResponse.class);
        } catch (JSONException e) {
            throw new RuntimeException(e);
        } catch (JsonMappingException e) {
            throw new RuntimeException(e);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        return billLoadResponse;
    }

    @Transactional
    public void insertBill() {
        List<Bill> billsToSave = new ArrayList<>();
        List<BillLoadResponse> infoResponseList = getBillList();
        int count = 1;
        float size = infoResponseList.size();
        for (BillLoadResponse billLoadResponse : infoResponseList) {
            // COMMITTEE와 연결
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

            // ASSEMBLY와 연결
            if (billLoadResponse.RST_MONA_CD() != null) {
                String[] splitName = billLoadResponse.RST_PROPOSER().split(",");
                String[] splitCode = billLoadResponse.RST_MONA_CD().split(",");
                for (int i = 0; i < splitCode.length; i++) {
                    Assembly assembly = assemblyRepository.findByMonaCd(splitCode[i]).orElse(
                            assemblyRepository.findByHgName("UNKNOWN").orElseThrow()
                    );

                    if (!billRepository.existsByBillNo(billLoadResponse.BILL_NO())) {
                        Bill bill = Bill.createBill(billLoadResponse.BILL_NO(),
                                billLoadResponse.BILL_NAME(), billLoadResponse.PROPOSER(),
                                splitName[i], assembly,
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
                                billLoadResponse.LINK_URL(), null);
                        billsToSave.add(bill);
                    }
                }
            }
            System.out.print("Bill Saving : " + String.format("%.2f", count++ / (size / 100)) + "% " + "\r");
        }
        if (!billsToSave.isEmpty()) {
            billRepository.saveAll(billsToSave);
        }
        System.out.println("Bill Saving : COMPLETE");
    }


    public void updateTextBody() {
        List<BillTextBodyResponse> billTextBodyResponses = getTextBody();
        float size = billTextBodyResponses.size();
        int count = 0;
        for (BillTextBodyResponse billTextBodyResponse : billTextBodyResponses) {


            List<Bill> bills = billRepository.findAllByBillNo(billTextBodyResponse.billNo()).orElse(null);

            if (bills == null) continue;
            for (Bill bill : bills) {
                System.out.print("Bill Body Saving : " + String.format("%.2f", count++ / (size / 100)) + "% " + "\r");

                bill.updateTextBody(billTextBodyResponse.summary());
            }
        }
        System.out.println("Bill Body Saving  : COMPLETE");

    }


    public List<BillLoadResponse> getBillList() {
        List<BillLoadResponse> billLoadResponseList = new ArrayList<>();
        int count = 0;
        String firstResponseBody = WebClient.create(infoUrl)
                .get()
                .uri("?KEY=" + infoKey + "&Type=json" + "&pIndex=" + 1 + "&pSize=" + 5 + "PROPOSER_KIND=의원")
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(String.class).block();

        int totalLength = -1;

        try {
            JSONObject firstjsonObject = new JSONObject(firstResponseBody);
            JSONObject head = (JSONObject) ((JSONArray) firstjsonObject.get("TVBPMBILL11")).get(0);
            String totalCount = ((JSONObject) ((JSONArray) head.get("head")).get(0)).get("list_total_count").toString();
            totalLength = Integer.parseInt(totalCount) / 300;
        } catch (JSONException e) {
            throw new RuntimeException(e);
        }
        ExchangeStrategies exchangeStrategies = ExchangeStrategies.builder()
                .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(-1))
                .build();
        for (int i = 1; i <= totalLength; i++) {
            if (i == 3) break;
            String responseBody = WebClient.builder().
                    exchangeStrategies(exchangeStrategies).
                    baseUrl(infoUrl).
                    build()
                    .get()
                    .uri("?KEY=" + infoKey + "&Type=json" + "&pIndex=" + i + "&pSize=" + 300 + "&PROPOSER_KIND=의원" + "&AGE=21")
                    .accept(MediaType.APPLICATION_JSON)
                    .retrieve()
                    .bodyToMono(String.class).block();


            try {
                JSONObject jsonObject = new JSONObject(responseBody);
                JSONObject row = (JSONObject) ((JSONArray) jsonObject.get("TVBPMBILL11")).get(1);
                JSONArray list = (JSONArray) row.get("row");
                ObjectMapper mapper = new ObjectMapper();

                float size = totalLength;
                for (int j = 0; j < list.length(); j++) {
                    JSONObject item = ((JSONObject) list.get(j));
                    int age = Integer.parseInt((item.get("AGE").toString()));

                    if (age == 21) {
                        BillLoadResponse billLoadResponse = mapper.readValue(item.toString(), BillLoadResponse.class);
                        billLoadResponseList.add(billLoadResponse);
                        System.out.print("Bill Call : " + String.format("%.2f", count++ / (size / 100)) + "% " + "\r");
                    } else {
                        totalLength = 0;
                        break;
                    }
                }
            } catch (JSONException e) {
                throw new RuntimeException(e);
            } catch (JsonMappingException e) {
                throw new RuntimeException(e);
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        }
        System.out.println("Bill Call : COMPLETE");
        return billLoadResponseList;
    }

    public List<BillTextBodyResponse> getTextBody() {
        DefaultUriBuilderFactory factory = new DefaultUriBuilderFactory();
        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.NONE);
        int count = 100;
        int totalCount = 100;
        int a = 1;
        List<BillTextBodyResponse> responseList = new ArrayList<>();

        ExchangeStrategies exchangeStrategies = ExchangeStrategies.builder()
                .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(-1))
                .build();
        for (int i = 1; i <= totalCount / count; i++) {
            if (i == 3) break;
            String uri = "?serviceKey=" + bodyKey + "&numOfRows=" + count + "&pageNo=" + i + "&ord=A01"
                    + "&start_ord=21&end_ord=21" + "&proposer_kind_cd=F01";

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
                totalCount = apiResponse.getBody().getTotalCount();
                float size = totalCount;
                for (Item item : items.getItem()) {
                    System.out.print("Bill Body Call : " + String.format("%.2f", a++ / (size / 100)) + "% " + "\r");

                    if (!isNum(item.getBillNo())) continue;
                    if (!isTwentyOne(item.getBillNo())) continue;
                    if (Integer.parseInt(item.getBillNo()) < 2100000) {
                        totalCount = 0;
                        break;
                    }
                    BillTextBodyResponse billTextBodyResponse = new BillTextBodyResponse(
                            item.getBillId(), item.getBillNo(),
                            item.getSummary() == null ? "EMPTY" : item.getSummary());

                    responseList.add(billTextBodyResponse);
                }
            } catch (JAXBException e) {

                throw new RuntimeException();

            }
        }
        System.out.println("Bill Body Call : COMPLETE");
        return responseList;
    }

    private boolean isNum(String str) {
        int ch = str.charAt(0);
        return ch >= 48 && 57 >= ch ? true : false;
    }

    private boolean isTwentyOne(String str) {
        String sub = str.substring(0, 2);
        return (Integer.parseInt(sub) == 21) ? true : false;
    }

    private boolean initFlag() {
        if (billRepository.count() == 0)
            return true;
        else return false;
    }
}
