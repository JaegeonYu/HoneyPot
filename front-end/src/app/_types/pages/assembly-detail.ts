export interface AssemblyDetailLayoutProps {
  Tab1: React.ReactNode;
  Tab2: React.ReactNode;
  Tab3: React.ReactNode;
  params: { id: string };
}

export interface AssemblyDetailCardProps {
  assemblyImgUrl: string;
  polyName: string;
  hgName: string;
  units: string;
  origName: string;
  birthDate: string;
}

export interface AssemblyDetailChartsProps {
  polyName: string;
}

export interface AssemblyDetailTopBillCategoriesProps {}
