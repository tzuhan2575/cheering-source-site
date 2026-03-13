export type Item = {
  id: string;
  creator: string;
  creatorUrl: string;
  types: string[];
  title: string;
  postUrl: string;
  postContent: string;
  status: "已附來源" | "尚待確認" | "有異議";
  images: string[];
  coverImage: string;
};

export const items: Item[] = [
  {
    id: "leanne11-a-this-is-for-taipei-01",
    creator: "@leanne11_a",
    creatorUrl: "https://www.threads.com/@leanne11_a",
    types: ["貼紙", "胸章"],
    title: "TWICE <THIS IS FOR> in TAIPEI 台北場應援",
    postUrl:
      "https://www.threads.com/@leanne11_a/post/DVXi2E2CJgS?xmt=AQF0W5rttuvFJd1N3YCq7y9QUhu3n8clJ7FXivG_a79hMQ",
    postContent: `TWICE <THIS IS FOR> in TAIPEI 台北場應援

大家好～再18天，我們又要與TWICE在台北相見啦！
這次又做了應援物想分享給大家，歡迎大家來找我們玩～💖

🍭應援物 - 多款貼紙 & 隨機胸章
💡領取方式 - 請見第五張圖
📅發放時間 - 03/21 (六)、22 (日)
📍發放地點 - 台北大巨蛋會場附近

⚠️詳細時間與地點當天公布
⚠️禁止轉售或任意丟棄等🥺

之後在Threads會辦這次應援物中隨機徽章的抽獎小活動，詳細活動內容預計於3/6（五）會再發另一篇貼文說明，歡迎有興趣的朋朋可以多多關注～🫶🏼`,
    status: "已附來源",
    coverImage: "/封面.jpeg",
    images: ["/封面.jpeg", "/貼紙組.jpeg", "/單張貼紙.jpeg", "/胸章.jpeg"],
  },
];