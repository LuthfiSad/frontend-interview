export interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  category: string;
  uploader: string;
  views: number;
  likes: number;
  uploadDate: Date;
  isFavorite?: boolean;
}
