import { Video } from "@core/model/video";
import { categories } from "./category";
import { uploaders } from "./uploader";

const thumbnails = [
  "https://i.ytimg.com/vi/TZcY2bwand0/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhjIFQoZTAP&rs=AOn4CLC1KNSuhBuLMGLn_B8gK9jNUpxwPg",
  "https://i.ytimg.com/vi/qkzjd5k2vUM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVhink_INkgr1UxQ1eSioKU-cZdQ",
  "https://i.ytimg.com/vi/UPJcSkRs_XE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxil-5NQjs8BE_FmjIaCLo_d4iug"
];

const videos = [
  "https://www.youtube.com/watch?v=UPJcSkRs_XE",
  "https://www.youtube.com/watch?v=fLPS4sIpYh0",
  "https://www.youtube.com/watch?v=bUxd3jqCr94"
];

const sampleVideos: Video[] = Array.from({ length: 50 }, (_, i) => ({
  id: `video_${i + 1}`,
  title: `Sample Video Title ${i + 1}`,
  description: `This is the description for Sample Video Title ${i + 1}. It provides an overview of the content and what viewers can expect.`,
  videoUrl: videos[Math.floor(Math.random() * videos.length)],
  category: categories[Math.floor(Math.random() * categories.length)],
  uploader: uploaders[Math.floor(Math.random() * uploaders.length)],
  views: Math.floor(Math.random() * 10000),
  likes: Math.floor(Math.random() * 5000),
  uploadDate: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
  isFavorite: false,
  thumbnailUrl: thumbnails[Math.floor(Math.random() * thumbnails.length)],
}));

export default sampleVideos;
