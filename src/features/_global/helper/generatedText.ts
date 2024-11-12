export const generateRandomText: () => string = () => {
  const phrases = [
    "Understanding Quantum Physics",
    "Exploring the Latest Gadgets",
    "Tips for a Healthy Lifestyle",
    "The Future of AI and Robotics",
    "Creative DIY Ideas",
    "Healthy Eating Habits",
    "The Benefits of Meditation",
    "The Art of Photography",
    "The Power of Mindfulness",
    "The Importance of Sleep",
    "Sustainable Living Habits",
    "Healthy Cooking Techniques",
    "The Science of Self-Development",
    "The Secrets of Successful Leadership",
    "The Power of Positive Thinking",
    "The Benefits of Yoga",
    "The Science of Human Behavior",
    "The Art of Writing",
    "Organizational Leadership",
    "The Science of Happiness",
    "Professional Networking",
    "Professional Development",
    "Professional Growth",
    "Organizational Culture",
    "Organizational Structure",
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
};

export const cutRandomText = (): string => {
  const randomText =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos perferendis maxime ullam quas expedita voluptatem, nostrum, dolor blanditiis dolorem ex placeat incidunt atque maiores cupiditate, magni exercitationem veniam eius quia impedit quibusdam eaque eum. Incidunt nulla deserunt commodi obcaecati cum tenetur expedita quam? Sapiente quos laborum quod quisquam cum, delectus reprehenderit commodi earum impedit? Nesciunt perferendis, odio autem inventore dolorem totam repellendus minima incidunt porro reiciendis excepturi eos accusamus exercitationem vel commodi mollitia quis quidem, impedit sunt vitae ratione illo sit quos hic? Molestiae placeat dicta tenetur. Nesciunt deserunt, rerum consequatur ipsam quia repellat ab. Recusandae impedit perferendis error deserunt rem temporibus quae quisquam aliquam exercitationem. Possimus optio, dolorem iure saepe numquam non. Dolor ut accusantium necessitatibus aut! Optio necessitatibus earum doloribus, at qui maxime aliquam perspiciatis, tempora molestiae rem exercitationem dolor error voluptate. Doloribus praesentium, quas et voluptas adipisci laboriosam eveniet ad fugit debitis qui pariatur distinctio molestiae quaerat alias eligendi, quod quae saepe explicabo iure possimus. Possimus, laborum sit esse corrupti a inventore nisi illo, corporis dicta sapiente nobis enim deserunt, hic voluptatem maiores ipsam. Eveniet tempore dolores vel repudiandae ab vero saepe praesentium est amet earum. Eaque et numquam odit minus, laborum quam. Quibusdam, aliquam dolore doloribus non, explicabo perferendis eveniet in laborum sequi magnam culpa reiciendis ducimus. Eius minima recusandae doloribus ipsum culpa mollitia magni molestias at necessitatibus quam nostrum alias quaerat dicta cum odit, pariatur velit incidunt labore sed. Aspernatur ad optio numquam repellendus, reiciendis, delectus debitis distinctio molestias exercitationem qui nisi recusandae nesciunt nobis sequi dolores, autem dolor id! Deserunt obcaecati culpa id aliquid quisquam maxime quasi, ullam sapiente nam exercitationem iste suscipit aspernatur voluptatibus porro! Debitis ea vel quisquam eveniet consequuntur minima reiciendis vero beatae non perspiciatis, quo corporis, tempora tenetur sint assumenda? Sunt beatae molestiae laborum maxime consequatur, voluptatum deserunt recusandae nobis. Magnam, quibusdam deleniti a eum sunt obcaecati fuga eaque sed eos inventore, autem vero, delectus ut repellat sint quasi ullam laboriosam totam commodi dolor dolore laborum velit illo ducimus. Ducimus, veniam quod esse saepe nihil earum doloremque autem magni placeat qui unde voluptatum dolorem? Cum, assumenda? Natus quibusdam quam sapiente exercitationem minus aut sed doloremque reiciendis, dolores amet est officia earum nostrum quaerat accusamus commodi ad ducimus necessitatibus labore veniam. Sed rem facilis quos! Quo, facilis? Ducimus, corrupti natus perspiciatis iure omnis eveniet modi voluptatum nemo eum, blanditiis, voluptatibus accusamus quam eligendi et repellat. Quos maxime sit alias rem harum unde ex libero consectetur mollitia esse repellat, soluta veniam, quis sunt! Pariatur nostrum iste ipsam accusantium vero, assumenda illum delectus nihil ullam adipisci facere eum cumque temporibus aut quibusdam qui! Dicta aut nobis, tempora voluptas asperiores dignissimos fugit nam est illo culpa quidem libero rerum, velit officia consequuntur quisquam aliquam laudantium eaque voluptatum iusto quas facere quae explicabo. Repudiandae, blanditiis praesentium. Repellat quibusdam voluptatibus quo voluptates dicta quia illo rem tempora sint veniam, eum eveniet magnam obcaecati quod non molestias iste accusamus, similique eius ab. Dicta veniam quam accusamus soluta natus, laboriosam ipsam nostrum eos animi libero dolor ipsum! Veniam.";

  return randomText.substring(0, Math.floor(Math.random() * randomText.length + 10));
};
