import * as T from '@/types';

export interface DetailModalProps extends T.Video {
  viewHandler: ([...args]: any) => void;
}
