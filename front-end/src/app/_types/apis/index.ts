export interface Poly {
  polyId: number;
  polyName: string;
  logoUrl: string;
  polySeatsResponse: {
    seats: number;
    totalSeats: number;
  };
  leader: string;
}

export interface Assembly {
  assemblyId: number;
  assemblyImgUrl: string;
  hgName: string;
  monaCd: string;
  origName: string;
  polyName: string;
}
