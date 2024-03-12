export interface TabProps {
  tabTitleList: string[];
  selectedIdx: number;
  selectedIdxHandler: ([...arg]: any) => void;
}
