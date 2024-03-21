export interface AreaSelectorProps {}

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
}
