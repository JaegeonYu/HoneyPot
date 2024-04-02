export interface Poly {
  polyId: number;
  polyName: string;
  logoUrl: string;
  polySeatsResponse: {
    seats: number;
    totalSeats: number;
  };
  leader?: string;
}
export interface PolyMember {
  assemblyId: number;
  hgName: string;
  attendance: number;
}
export interface PolyDetail extends Poly {
  polyAttendanceResponse: {
    averageAttendance: number;
    totalAverageAttendance: number;
    topAttendanceRate: PolyMember[];
    bottomAttendanceRate: PolyMember[];
  };
}

export interface Assembly {
  assemblyId: number;
  assemblyImgUrl: string;
  hgName: string;
  monaCd: string;
  origName: string;
  polyName: string;
}

export interface Video {
  id: number;
  videoName: string;
  videoUrl: string;
  imageUrl: string;
  creatAt: string;
  hits: number;
  keywords: { id: number; keyword: string }[];
  videoSummary: string;
  videoTime: string;
}

export interface Candidate {
  addr: string;
  age: number;
  birthday: string;
  candidateImgUrl: string;
  career1: string;
  career2: string;
  edu: string;
  candidateId: number;
  gender: string;
  giho: number;
  hgname: string;
  hjName: string;
  huboid: number;
  jdName: string;
  job: string;
  sdName: string;
  sgDate: string;
  sgTypeCode: number;
  sggName: string;
  status: string;
  wiwName: string;
}
