export interface AreaSelectorProps {
  onSidoItemClick: (value: any) => void;
  onSiGunGuItemClick: (value: any) => void;
  onDongItemClick: (value: any) => void;
  placeholders: { sido: string | null; sigungu: string | null; dong: string | null };
  siDoList: any[];
  siGunGuList: any[];
  dongList: any[];
}

export interface Region {
  regionId: number;
}

export interface ResponseRegion extends Region {
  regionName: string;
}

export interface HandleQueryStringArgs {
  sido: number;
  siGunGu: number;
  dong: number;
  poly: number;
  word: string;
}
