export interface CategoryListProps {
  // onClick: ({ index }: { index: number }) => void;
  onCategoryClick: (categoryId: number) => void;
  selectedIdx: number;
}
