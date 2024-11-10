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
  videoUrl: videos[Math.floor(Math.random() * videos.length)],
  category: categories[Math.floor(Math.random() * categories.length)],
  uploader: uploaders[Math.floor(Math.random() * uploaders.length)],
  views: Math.floor(Math.random() * 10000),
  likes: Math.floor(Math.random() * 5000),
  uploadDate: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1),
  isFavorite: false,
  thumbnailUrl: thumbnails[Math.floor(Math.random() * thumbnails.length)],
  description: `This is the description for Sample Video Title ${i + 1}. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos perferendis maxime ullam quas expedita voluptatem, nostrum, dolor blanditiis dolorem ex placeat incidunt atque maiores cupiditate, magni exercitationem veniam eius quia impedit quibusdam eaque eum. Incidunt nulla deserunt commodi obcaecati cum tenetur expedita quam? Sapiente quos laborum quod quisquam cum, delectus reprehenderit commodi earum impedit? Nesciunt perferendis, odio autem inventore dolorem totam repellendus minima incidunt porro reiciendis excepturi eos accusamus exercitationem vel commodi mollitia quis quidem, impedit sunt vitae ratione illo sit quos hic? Molestiae placeat dicta tenetur. Nesciunt deserunt, rerum consequatur ipsam quia repellat ab. Recusandae impedit perferendis error deserunt rem temporibus quae quisquam aliquam exercitationem. Possimus optio, dolorem iure saepe numquam non. Dolor ut accusantium necessitatibus aut! Optio necessitatibus earum doloribus, at qui maxime aliquam perspiciatis, tempora molestiae rem exercitationem dolor error voluptate. Doloribus praesentium, quas et voluptas adipisci laboriosam eveniet ad fugit debitis qui pariatur distinctio molestiae quaerat alias eligendi, quod quae saepe explicabo iure possimus. Possimus, laborum sit esse corrupti a inventore nisi illo, corporis dicta sapiente nobis enim deserunt, hic voluptatem maiores ipsam. Eveniet tempore dolores vel repudiandae ab vero saepe praesentium est amet earum. Eaque et numquam odit minus, laborum quam. Quibusdam, aliquam dolore doloribus non, explicabo perferendis eveniet in laborum sequi magnam culpa reiciendis ducimus. Eius minima recusandae doloribus ipsum culpa mollitia magni molestias at necessitatibus quam nostrum alias quaerat dicta cum odit, pariatur velit incidunt labore sed. Aspernatur ad optio numquam repellendus, reiciendis, delectus debitis distinctio molestias exercitationem qui nisi recusandae nesciunt nobis sequi dolores, autem dolor id! Deserunt obcaecati culpa id aliquid quisquam maxime quasi, ullam sapiente nam exercitationem iste suscipit aspernatur voluptatibus porro! Debitis ea vel quisquam eveniet consequuntur minima reiciendis vero beatae non perspiciatis, quo corporis, tempora tenetur sint assumenda? Sunt beatae molestiae laborum maxime consequatur, voluptatum deserunt recusandae nobis. Magnam, quibusdam deleniti a eum sunt obcaecati fuga eaque sed eos inventore, autem vero, delectus ut repellat sint quasi ullam laboriosam totam commodi dolor dolore laborum velit illo ducimus. Ducimus, veniam quod esse saepe nihil earum doloremque autem magni placeat qui unde voluptatum dolorem? Cum, assumenda? Natus quibusdam quam sapiente exercitationem minus aut sed doloremque reiciendis, dolores amet est officia earum nostrum quaerat accusamus commodi ad ducimus necessitatibus labore veniam. Sed rem facilis quos! Quo, facilis? Ducimus, corrupti natus perspiciatis iure omnis eveniet modi voluptatum nemo eum, blanditiis, voluptatibus accusamus quam eligendi et repellat. Quos maxime sit alias rem harum unde ex libero consectetur mollitia esse repellat, soluta veniam, quis sunt! Pariatur nostrum iste ipsam accusantium vero, assumenda illum delectus nihil ullam adipisci facere eum cumque temporibus aut quibusdam qui! Dicta aut nobis, tempora voluptas asperiores dignissimos fugit nam est illo culpa quidem libero rerum, velit officia consequuntur quisquam aliquam laudantium eaque voluptatum iusto quas facere quae explicabo. Repudiandae, blanditiis praesentium. Repellat quibusdam voluptatibus quo voluptates dicta quia illo rem tempora sint veniam, eum eveniet magnam obcaecati quod non molestias iste accusamus, similique eius ab. Dicta veniam quam accusamus soluta natus, laboriosam ipsam nostrum eos animi libero dolor ipsum! Veniam.`,
}));

export default sampleVideos;
