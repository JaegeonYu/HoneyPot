export interface ModalProps {
  width: string;
  height: string;
  children: React.ReactNode;
  isOpen: boolean;
  isOpenHandler: ([...args]: any) => void;
}
