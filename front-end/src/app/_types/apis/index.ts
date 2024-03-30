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
  keywords: string[];
  videoSummary: string;
}
