import { Video } from "@core/model/video";
import { categories } from "./category";
import { uploaders } from "./uploader";
import { cutRandomText, generateRandomText } from "@features/_global/helper/generatedText";

const thumbnails = [
  "https://i.ytimg.com/vi/TZcY2bwand0/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhjIFQoZTAP&rs=AOn4CLC1KNSuhBuLMGLn_B8gK9jNUpxwPg",
  "https://i.ytimg.com/vi/qkzjd5k2vUM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCVhink_INkgr1UxQ1eSioKU-cZdQ",
  "https://i.ytimg.com/vi/UPJcSkRs_XE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxil-5NQjs8BE_FmjIaCLo_d4iug",
  "https://i.ytimg.com/vi/lWMlgX_1xdU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsEDcWxaQ7G0UbYzMSXNm3gui0lg",
  "https://i.ytimg.com/vi/2cBHu2450TM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2x-2aoGSeKXfmusJmdB19u_cp1A",
  "https://i.ytimg.com/vi/JfW7tg0yWsc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDftY_saivOa4Y7BbwiP6E4D9BQrg",
  "https://i.ytimg.com/vi/Q1qOaKKlUTs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvv_rCX72WKmkobO3ePI723zHxQg",
  "https://i.ytimg.com/vi/3ojvLexb4mM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaImwcXwGAwgN6l_fnUgrgEp3Hvw",
  "https://i.ytimg.com/vi/ajRCfGZwVhM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB9K4SIkTZ-Dv5f_689_3HJNJJ96w",
  "https://i.ytimg.com/vi/8E_WMcSpayw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7EyUcX-oIEY2bld4AZHeX0sxVdw",
  "https://i.ytimg.com/vi/SlTyP6SJwRI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoLSomevUdrX-KJwnon5Zm3hNcLw",
  "https://i.ytimg.com/vi/YtvDJ1g5PsU/hq720.jpg?v=6731f284&sqp=CPS-yLkG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDiLJo_VDgAvdTUFd-0QCHGJtDgZg",
  "https://i.ytimg.com/vi/fg72DS56lwE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIhWO871KM_MSMkhazFkvw7ceMEQ",
  "https://i.ytimg.com/vi/Xu1wA7CfhQg/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYZSBcKFcwDw==&rs=AOn4CLCvyIEXSwJBMHcnZZYh6d75OLeOkA",
];

const videos = [
  "https://www.youtube.com/embed/qmgA_WejI8w?si=1exk98bEfqxkuvec",
  "https://www.youtube.com/embed/fLPS4sIpYh0?si=e1KgGHvYrIqOwSlK",
  "https://www.youtube.com/embed/bUxd3jqCr94?si=aQKBnu1iF3Akv1kH",
  "https://www.youtube.com/embed/lWMlgX_1xdU?si=Xq-lIqHBA3oQElGb",
  "https://www.youtube.com/embed/2cBHu2450TM?si=eLnISYriMe_jgJJ2",
];

const sampleVideos: Video[] = Array.from({ length: 10000 }, (_, i) => ({
  id: `video_${i + 1}`,
  title: generateRandomText(),
  videoUrl: videos[Math.floor(Math.random() * videos.length)],
  category: categories[Math.floor(Math.random() * categories.length)],
  // category: "Education",
  uploader: uploaders[Math.floor(Math.random() * uploaders.length)],
  views: Math.floor(Math.random() * 10000000),
  likes: Math.floor(Math.random() * 5000000),
  uploadDate: new Date(
    2023,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1
  ),
  isFavorite: false,
  thumbnailUrl: thumbnails[Math.floor(Math.random() * thumbnails.length)],
  description: `This is the description for Sample Video Title ${
    i + 1
  }. ${cutRandomText()}`,
}));

export default sampleVideos;
