export interface BilProps {
  assemblyId: number;
  billId: number;
  billName: string | null;
  billNo: string | null;
  billProgressResponse: any;
  cmitId: number;
  cmitName: string | null;
  cmitProcDt: string | null;
  detailLink: string | null;
  hgName: string | null;
  lawProcDt: string | null;
  polyId: number;
  procDt: string | null;
  procResult: string | null;
  proposeDt: string | null;
  proposer: string | null;
  publProposer: string | null;
  rstProposer: string | null;
  summary: string | null;
  textBody: string | null;

  // progressbar: string[];
  // panelsectiondata: string[]; // ProgressBar랑 이거는 어떤식으로 데이터 올지 모름. 추후 수정필요.
}
