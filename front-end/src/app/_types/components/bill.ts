export interface BillProps {
  cmitId: number;

  billId: number;
  billName: string | null;
  billNo: string | null;
  cmitName: string | null;
  cmtPresentDt: string | null;
  cmtProcDt: string | null;
  cmtProcResultCd: string | null;
  committeeDt: string | null;
  detailLink: string | null;
  hgName: string | null;
  lawPresentDt: string | null;
  lawProcDt: string | null;
  lawProcResultCd: string | null;
  lawSubmitDt: string | null;
  procDt: string | null;
  procResult: string | null;
  proposeDt: string | null;
  proposer: string | null;
  publProposer: string | null;
  rstProposer: string | null;
  textBody: string | null;
  summary: string | null;

  // progressbar: string[];
  // panelsectiondata: string[]; // ProgressBar랑 이거는 어떤식으로 데이터 올지 모름. 추후 수정필요.
}
