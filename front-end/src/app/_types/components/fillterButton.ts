import { Poly } from '../apis';

export interface FillterButtonProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: ([...args]: any) => void;
}
