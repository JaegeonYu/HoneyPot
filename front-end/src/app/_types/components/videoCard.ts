export interface VideoCardProps {
  creatAt: string;
  hits: number;
  id: number;
  imageUrl: string;
  keywords: { id: number; keyword: string }[];
  videoName: string;
  videoUrl: string;
  videoTime: string;
  onClick: ([...args]: any) => void;
}
