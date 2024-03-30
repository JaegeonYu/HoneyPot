export interface VideoCardProps {
  creatAt: string;
  hits: number;
  id: number;
  imageUrl: string;
  keywords: string[];
  videoName: string;
  videoUrl: string;
  onClick: ([...args]: any) => void;
}
