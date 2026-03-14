export const TYPE_OPTIONS = [
  "全部",
  "貼紙",
  "胸章",
  "鑰匙圈",
  "吊飾",
  "透卡",
  "小卡",
  "手幅",
  "扇子",
  "撕拉片",
  "書籤",
  "擦拭布",
  "磁鐵",
  "鏡子",
  "徽章",
  "其他",
] as const;

export type ItemType = (typeof TYPE_OPTIONS)[number];

export type Item = {
  id: string;
  creator: string;
  creatorUrl: string;
  types: ItemType[];
  title: string;
  postUrl: string;
  postContent: string;
  images: string[];
};



export function normalizeTypes(types: string[]): ItemType[] {
  return Array.from(new Set(types.map(normalizeType)));
}

export const items: Item[] = [
  {
    id: "item_001",
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
    images: [
      "/item_001_01.jpeg",
      "/item_001_02.jpeg",
      "/item_001_03.jpeg",
      "/item_001_04.jpeg",
    ],
  },
  {
    id: "item_002",
    creator: "@on.twi_ce",
    creatorUrl: "https://www.threads.com/@on.twi_ce",
    types: ["徽章", "鑰匙圈", "杯套"],
    title: "TWICE <THIS IS FOR> WORLD TOUR IN TAIPEI 免費應援發放",
    postUrl:
      "https://www.threads.com/@on.twi_ce/post/DVyEQU0kuCl?xmt=AQF0gtDlneb1_Qf6JQG7hOQa1j2KZCZwqZAf6DUtRLwPgA",
    postContent: `✨𝑻𝑾𝑰𝑪𝑬<𝑻𝑯𝑰𝑺 𝑰𝑺 𝑭𝑶𝑹>𝑾𝑶𝑹𝑳𝑫 𝑻𝑶𝑼𝑹 𝑰𝑵 𝑻𝑨𝑰𝑷𝑬𝑰免費應援發放✨

大家好我是烏波👋🏻這次準備了免費會在場外發放～歡迎大家來跟我領取😚徽章圖是自己畫的！希望大家多多支持 ·͜·♡

- 應援內容物🎁
❶成員LOVELY 5.8公分徽章*1（限量300個/採隨機盲包送出）
❷伸縮證件鑰匙圈（限量50個）
❸咪不理杯套（限量30個）

發放時間&地點📍
❶LOVELY徽章：
3/21（六）臺北大巨蛋場外空地 13:00（暫定）

❷伸縮鑰匙圈&❸咪不理杯套
3/20-22皆可能發放!!!會在場外當NPC，沒有固定發放時間跟地點（會開一個自己的蹤跡樓，但大多時間會在Mina生咖啦XD）

注意事項⚠️
①伸縮證件鑰匙圈&咪不理杯套僅可擇一領取，無法兩個皆領，數量有限發完為止。
②屆時會在3/21當天確認發放地點並發佈IG限動/Threads文章，各位可以先追蹤起來放(˶‾᷄ ⁻̫ ‾᷅˵)
③圖片僅供參考，因為製作過程因素可能會有些微痕跡，完美主義者請繞道。
④請勿轉售/轉讓或讓我在地上看到我的應援⋯用愛發電，也請大家好好珍惜ㅠㅠ`,
    images: ["/item_002_01.jpeg", "/item_002_02.jpeg", "/item_002_03.jpeg"],
  },
  {
    id: "item_003",
    creator: "@can_t.stop.mi_",
    creatorUrl: "https://www.threads.com/@can_t.stop.mi_",
    types: ["鈔票", "其他"],
    title: "TWICE《THIS IS FOR》WORLD TOUR IN TAIPEI 最終應援公告",
    postUrl:
      "https://www.threads.com/@can_t.stop.mi_/post/DVlGisfD-kZ?xmt=AQF06p0kURAB1cEXIXyjUl7bKNzY9y3DLMd5BskjBQHOSw",
    postContent: `TWICE《THIS IS FOR》WORLD TOUR IN TAIPEI
🔔最終應援公告🔔

應援介紹：
1. 🍭十週年海報成員個人款鈔票
2. 🐹髮夾紗款式鈔票
3. 🦈紗瑜雙人鈔票
4. 🌽玉米雙人鈔票

共12款，一個款式製作100份
由於數量較多，可自選款式，限選一張
（視當天領取人數，我有權改為隨機發放）

‼️領取方式：有任何粉絲證明 or 追蹤本帳
💟髮夾紗是我私心多做送給同擔的

💜日期：115/3/20（五）
💜地點：國父紀念館地下連通道
💜時間：當天於threads發布
（註：我將跟隨聯合應援，一切資訊再由總召補充）

‼️交換可領全套12款（先登記）
‼️不得食用
‼️本人極度社恐，需要你們主動領
‼️全數皆是親自剪裁，可能有瑕疵，見諒
‼️本人親自設計，不得商用，不得二改

p.s. 晚點我會整理登記交換的名單，到時候會通知領取序號，因為我怕當天會很亂，所以只能這麼限制，抱歉各位，麻煩再注意一下🙏
（上次沒跟到的可以直接留言，我會登記）

p.s. 還有就是，鈔票很多細節很難畫，我真的花了很大心力在準備，我不希望它們出現在地板上，希望大家珍惜💝`,
    images: ["/item_003_01.jpeg", "/item_003_02.jpeg"],
  },
  {
    id: "item_004",
    creator: "@_songguo_",
    creatorUrl: "https://www.threads.com/@_songguo_",
    types: ["透卡", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI 免費應援物發放 / 交換公告",
    postUrl:
      "https://www.threads.com/@_songguo_/post/DVvk05TjXsm?xmt=AQF0ppZHS9RcovHOldcAqNFg6g7ZXGd0T3PEHBW9UOWvOw",
    postContent: `💙𝗧𝗪𝗜𝗖𝗘＜𝗧𝗛𝗜𝗦 𝗜𝗦 𝗙𝗢𝗥＞𝗪𝗢𝗥𝗟𝗗 𝗧𝗢𝗨𝗥 𝗜𝗡 𝗧𝗔𝗜𝗣𝗘𝗜💙
〖 免費應援物發放 / 交換公告 〗

距離台北場演唱會倒數九天！
這次我畫了「LOVELY透卡」想跟ONCE們分享໒꒰ྀི ՞ㆁ̴̶̷̤́·̮ㆁ̴̶̷̤̀՞ ꒱ྀི১

創作理念源自於我很喜歡 LIKEY MV 最後「Twicetagram」的設計，
希望大家能用這張卡把演唱會各種「LIKEY」的瞬間記錄下來，
於是這款透卡就誕生了💭

─── ⋆⋅領取資訊⋅⋆ ───
⌯⌲ 發放時間｜3/20 週五下午
⌯⌲ 發放數量｜150份（發完為止）
⌯⌲ 發放地點｜大巨蛋外圍，尋找「穿戴紅布條」的我，詳細地點待當日公布😆
⌯⌲ 領取方式｜出示此貼文 + 跟我分享你最愛的成員是誰即可🥳
⌯⌲ 應援互換｜請底下留言～我視人數開交換表單✏️

─── ⋆⋅注意事項⋅⋆ ───
⌯⌲ 每人限領取乙份
⌯⌲ 拍照前記得要撕掉正面的膠膜❣️
⌯⌲ 以交換優先；沒有應援物也沒關係，請提供粉絲證明（手燈、娃娃、官方周邊、泡泡🫧）
⌯⌲ 這是我花了不少時間繪製的作品，還請大家不要轉賣⚠️（我會很傷心TT）

💙跟大家 3/20 台北大巨蛋見 💙`,
    images: ["/item_004_01.jpeg", "/item_004_02.jpeg"],
  },
  {
    id: "item_005",
    creator: "@tllng_61",
    creatorUrl: "https://www.threads.com/@tllng_61",
    types: ["書籤", "原子筆", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR in TAIPEI 應援發放",
    postUrl:
      "https://www.threads.com/@tllng_61/post/DVxdTmikzkG?xmt=AQF0BDR1FXiN2UtJhInBouI-2ChKcm1_D4c_CqOBr-IXVA",
    postContent: `𝙏𝙒𝙄𝘾𝙀 < 𝙏𝙃𝙄𝙎 𝙄𝙎 𝙁𝙊𝙍 > 𝙒𝙊𝙍𝙇𝘿 𝙏𝙊𝙐𝙍 𝙞𝙣 𝙏𝘼𝙄𝙋𝙀𝙄 應援發放꒰ ◡̈ ꒱♡

終於在演唱會前壓線收到了～～ (*ˊᗜˋ*)
在高雄場的時候，收了好多once的應援物，所以也決定在台北場自己做來發和交換！
雖然只有少少少量，但大I人還是希望能發完呀🥹

子瑜人生四格書籤
💙發放數量：90份

NAVELY、TZUVELY 原子筆（*交換為主）
🩵發放數量：各10份

- 發放 / 交換日期：3/20
- 領取條件：敢主動開口的once就可以😗
- 時間、地點當天會公布在留言置頂

不可轉售
不可代領
不要讓他出現在垃圾桶

兩種應援小物感覺都是生活中可以使用到的，
讓日常生活充滿Twice吧♡(*´ ˘ ˋ*)♡`,
    images: ["/item_005_01.jpeg"],
  },
  {
    id: "item_006",
    creator: "@mina.lia_247",
    creatorUrl: "https://www.threads.com/@mina.lia_247",
    types: ["吊飾", "其他"],
    title: "台北場應援｜雙井抱抱Q版壓克力吊飾",
    postUrl:
      "https://www.threads.com/@mina.lia_247/post/DUnKJxwDw6N?xmt=AQF0vadOLDmlTbVAzAa4vIduItG7zjgAZJpLqqF_Eqrzrg",
    postContent: `嗨嗨嗨各位ONCE 台北場的應援生出來了🥳
將會在 3/20 於台北大巨蛋發放 雙井抱抱Q版壓克力吊飾

🍭領取條件：
1. 身上有 Mina / Momo 的周邊（小卡、Lovely 等）
2. 追蹤 TWICE 全員 IG 帳號
3. 追蹤我的脆 @mina.lia_247

數量少只有 20 多份，以交換優先💖
想交換可以直接留言或是私訊我`,
    images: ["/item_006_01.jpeg"],
  },
  {
    id: "item_007",
    creator: "@conniechen0806",
    creatorUrl: "https://www.threads.com/@conniechen0806",
    types: ["手機支架", "髮夾", "小卡", "吊飾", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI 應援物發放",
    postUrl:
      "https://www.threads.com/@conniechen0806/post/DUNzSOoko9L?xmt=AQF0HBA-mrQbjwBoeKSNoH7Cxs7tT64cMUvcKelqAl9U-A",
    postContent: `𝐓𝐖𝐈𝐂𝐄 ＜𝐓𝐇𝐈𝐒 𝐈𝐒 𝐅𝐎𝐑＞ 𝐖𝐎𝐑𝐋𝐃 𝐓𝐎𝐔𝐑 𝐈𝐍 𝐓𝐀𝐈𝐏𝐄𝐈

發放日期 & 地點：
3/21 大巨蛋場外
當天會把穿搭發在 IG 或脆上，時間還不確定，會發脆 / IG 限動

應援物 1：手機支架，共 18 個（每位成員有 2 個）
應援物 2：髮夾，共 36 個（每位成員有 4 個）
應援物 3：透明底片，共 18 個
應援物 4：名牌吊飾，共 50 個（只有臉 / 桃 / 紗 / 效 / 南 / 彩 / 瑜）
（因為上次演唱會就發過了，這次是還沒發完的，然後都是手工的，所以可能會有瑕疵）

領取規則 & 條件：
粉絲證明（泡泡、會員、手燈、周邊、門票）以上示出 1 種就可以領取
數量不多，一人限領一份，禁止轉售

上面的應援物都可以參考下方示意圖
如果要交換的話到先現場換，如果現場沒有遇到的話回來再開賣場
然後我偏 E 人，所以可能看到包包上的周邊就會拿過去發，所以請不要被我嚇到🥹`,
    images: [
      "/item_007_01.jpeg",
      "/item_007_02.jpeg",
      "/item_007_03.jpeg",
      "/item_007_04.jpeg",
      "/item_007_05.jpeg",
    ],
  },
  {
    id: "item_008",
    creator: "@wuxjjj_0115",
    creatorUrl: "https://www.threads.com/@wuxjjj_0115",
    types: ["撕拉片", "其他"],
    title: "TWICE THIS IS FOR 應援｜迷你撕拉片",
    postUrl:
      "https://www.threads.com/@wuxjjj_0115/post/DVY3dnZCee1?xmt=AQF0J9Ys9jDiFaaaSzotHgqFeArhCoThkWrPGbhKf9Z6OQ",
    postContent: `✨🩷 TWICE THIS IS FOR 應援 🩷✨

這次做了迷你撕拉片，像證件照那樣
每個成員都做了 30 張，還有一個隱藏款－團體照也是 30 張
隨機的喔～想讓大家體驗抽本命的感覺😆

只會發 3/21 哦🥹
當天會再發穿搭在留言區
有看到的歡迎在路上攔截我（？）
如果想找我的話要記得開此貼文的通知喔～

🍭數量：9+1 款各 30 張，共 300 張
🍭領取方式：只要能證明是 ONCE 都可以
🍭時間 & 地點：會跟朋友到處閒晃，如果在休息的話我會發地點在留言區

⚠️禁止任意丟棄
⚠️禁止轉售
希望大家好好珍惜這份用愛發電的禮物`,
    images: ["/item_008_01.jpeg", "/item_008_02.jpeg"],
  },
  {
    id: "item_009",
    creator: "@otsyjhsc",
    creatorUrl: "https://www.threads.com/@otsyjhsc",
    types: ["鑰匙圈", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜開瓶器鑰匙圈應援",
    postUrl:
      "https://www.threads.com/@otsyjhsc/post/DUGAK6rgV8h?xmt=AQF0hZe32Xhd6Eih9LCyr3e3805TVtxx4r1Qs9AfeFu7Qw",
    postContent: `TWICE＜THIS IS FOR＞WORLD TOUR IN TAIPEI
離台北場還有 50 天！
免費應援物發放

🍻開瓶器鑰匙圈 * 90 份
（可以當吊飾，也可以拿來開玻璃瓶ㅋㅋㅋㅋ）

發放地點及時間：
3/21 台北大巨蛋場外
（確切位置當天會在這隻帳號公佈）

領取條件：
出示粉絲證明免費領取
（官方周邊、會員、泡泡滿 90 天以上）其中一個都可以
禁轉賣、丟棄、代領

目前有 3/20 跟 3/22 的票，三天都會去大巨蛋
但 3/20 要演唱會結束才能交換
要交換應援物的可以留言或直接私訊我🫶🏻`,
    images: ["/item_009_01.jpeg"],
  },
  {
    id: "item_010",
    creator: "@_auroraxin",
    creatorUrl: "https://www.threads.com/@_auroraxin",
    types: ["鑰匙圈", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR in TAIPEI｜壓克力鑰匙圈",
    postUrl:
      "https://www.threads.com/@_auroraxin/post/DVDknooEhCs?xmt=AQF0mQ3x5BKQKJA996-UlCB2vdsjtmyfvQ0xIhuZO_c-lA",
    postContent: `𝙏𝙒𝙄𝘾𝙀 <𝙏𝙃𝙄𝙎 𝙄𝙎 𝙁𝙊𝙍> 𝙒𝙊𝙍𝙇𝘿 𝙏𝙊𝙐𝙍 𝙞𝙣 𝙏𝘼𝙄𝙋𝙀𝙄

哈囉大家好～這裡是 xin
這次準備了一些壓克力鑰匙圈要送給 ONCE 們🫶🏻
歡迎找我交換 / 領取，目前以交換優先！

ʚɞ 應援物：壓克力鑰匙圈五款（各 10）
ʚɞ 發放日期：3/21（時間、地點當天會公布在留言區）
ʚɞ 領取條件：官方周邊或門票等粉絲證明

⚠️注意事項
✮ 每人限領一份，禁止代領、禁止重複領取
✮ 嚴禁轉售、禁止隨意丟棄，每一份都是用心準備的小心意✨`,
    images: ["/item_010_01.jpeg"],
  },
  {
    id: "item_011",
    creator: "@24xxlynn",
    creatorUrl: "https://www.threads.com/@24xxlynn",
    types: ["其他"],
    title: "THIS IS FOR 應援製作紀念",
    postUrl:
      "https://www.threads.com/@24xxlynn/post/DUziKT5Edxo?xmt=AQF0HPgedjQpr1wr1NGK0rj_nfL4fd0LCryDSdHj_3L-lA",
    postContent: `為我的第一次應援做個紀念😆
想了好久總算真的把它做出來了！
製作應援真的非常需要有愛⋯⋯⋯

用 THIS IS FOR 的 LOGO 不單是因為是這次巡迴，
這是我第一次見到 TWICE 的主題，
也因為這樣，所以我專輯三版都買了，黑膠也買了😌

一切都非常完美，我是幸福的 ONCE！
期待台北場，期待 3 月😚🤍🤍🤍`,
    images: ["/item_011_01.jpeg", "/item_011_02.jpeg"],
  },
  {
    id: "item_012",
    creator: "@bettybettyliu",
    creatorUrl: "https://www.threads.com/@bettybettyliu",
    types: ["擦拭布", "其他"],
    title: "TWICE THIS IS FOR IN TAIPEI 台北場應援｜擦拭布",
    postUrl:
      "https://www.threads.com/@bettybettyliu/post/DUP72N-E-Id?xmt=AQF0RNzDBPfhvVlYk_Uyr45mRDliHjEcIn3A7grfbfxX2g",
    postContent: `𝗧𝗪𝗜𝗖𝗘＜𝗧𝗛𝗜𝗦 𝗜𝗦 𝗙𝗢𝗥＞𝗜𝗡 𝗧𝗔𝗜𝗣𝗘𝗜 台北場應援

大家好我是貝蒂小狗🐶～
這次我媽咪設計了「擦拭布」應援，歡迎各位來找我媽咪領取／交換

𖤐 發放日期：2026.03.21（詳細資訊當天會公布在留言區）
𖤐 發放數量：100 份
𖤐 應援內容：擦拭布／尺寸 15 x 15 cm
（可擦拭眼鏡、手機鏡頭、相機鏡頭等）

𖤐 注意事項：
每人限領一份
請勿轉售、隨意丟棄、代領、不禮貌

𖤐 領取條件：
任意官方周邊、其他粉絲證明，並同時出示此篇貼文

𖤐 許願交換：
實用小物、漂亮小物（可提前交換，座標：台中）

𖤐 喜歡的話歡迎各位幫我分享，也歡迎標記我媽咪 @sihhann__ 或是我

附上兩種參考圖，因為選不出來要發哪張，所以都發，事實上款式只有一款。
這是套檔示意圖所以有點糊糊的是正常的，成品很清晰。
圖上灰灰的部分是浮水印。`,
    images: ["/item_012_01.jpeg", "/item_012_02.jpeg"],
  },
  {
    id: "item_013",
    creator: "@lin_860126",
    creatorUrl: "https://www.threads.com/@lin_860126",
    types: ["鑰匙圈", "貼紙", "其他"],
    title: "TWICE THIS IS FOR World Tour in Taipei｜CD盒鑰匙圈",
    postUrl:
      "https://www.threads.com/@lin_860126/post/DV1QbUCiaip?xmt=AQF0GZJl-MCWEtAly6abhhMIvwC3PLRdC5zysVLWHIhD0Q",
    postContent: `𝙏𝙒𝙄𝘾𝙀 <𝙏𝙃𝙄𝙎 𝙄𝙎 𝙁𝙊𝙍> 𝙒𝙤𝙧𝙡𝙙 𝙏𝙤𝙪𝙧 𝙞𝙣 𝙏𝙖𝙞𝙥𝙚𝙞

上次潦草 lovelys 封面很感謝大家喜歡，我跟朋朋做了 CD 盒鑰匙圈要發，我們都是第一次做應援，希望大家會喜歡🥰
CD 圖我們有另外做貼紙，也歡迎領取（貼紙為後面幾張圓圓圖）

💙 發放時間地點｜
3/22 當天，上午我們會先去快閃店，之後應該直接去大巨蛋（threads、IG 更新）

💙 發放數量｜
共 100 個
每張專輯封面各 10
每張專輯的 CD 為每個成員各 1、團體 1，所以每個人的都不一樣
全部都是盲抽不可挑（貼紙可挑）

💙 領取條件｜
出示門票或粉絲證明，一人限領一個

希望大家好好珍惜，真的喜歡再來領取
目前未開放線上領取，僅 3/22 當天發
未發完才會開放線上領取

⚠️ 若 3/22 前說可以線上領的都是詐騙請小心
我上次高雄場送的穿戴甲被盜，真的有人被騙到錢🥲`,
    images: [
      "/item_013_01.jpeg",
      "/item_013_02.jpeg",
      "/item_013_03.jpeg",
      "/item_013_04.jpeg",
    ],
  },
  {
    id: "item_014",
    creator: "@kiki_sue",
    creatorUrl: "https://www.threads.com/@kiki_sue",
    types: ["吊飾", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜照片吊飾",
    postUrl:
      "https://www.threads.com/@kiki_sue/post/DVOHX1qkTtn?xmt=AQF0vr6OXGAJuBEuAJncy5rU_NzmhRcccF1ShnP6pjSI9w",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR IN TAIPEI 應援物免費發放

大家好，在經過高雄場拿了很多可愛又精美的應援之後，這次台北場決定來做個應援小物和大家同樂。
因為不太會設計東西，所以製作照片吊飾。
第一次製作應援物，希望大家可以來找我領取～（I 人超怕發不出去）

應援物：照片吊飾（隨機不挑款）
數量：共 70 份
發放時間：3/22
詳細地點：當天會放在留言區

領取條件：
身上有任何一位成員的拉布哩，或按讚並出示本貼文

注意事項：
每個人限領一份，不接受代領
請不要隨意丟棄
禁止轉賣

#TWICE台北場應援小物`,
    images: ["/item_014_01.jpeg", "/item_014_02.jpeg", "/item_014_03.jpeg"],
  },
  {
    id: "item_015",
    creator: "@millyiwoo",
    creatorUrl: "https://www.threads.com/@millyiwoo",
    types: ["吊飾", "壓克力", "手幅", "髮夾", "其他"],
    title: "TWICE 3/20-22 應援（內含抽獎）",
    postUrl:
      "https://www.threads.com/@millyiwoo/post/DUsqc97CXKK?xmt=AQF03syg9GoZpQrD1pJWZcZSKxCm1PP-cA9nwo2BdwJnMA",
    postContent: `TWICE 3/20-22 應援（內含抽獎⭐️）

這次臺北場準備了 600 份！來更新實體圖了～

1. 打卡凸面鏡
2. Lovely 鏡子吊飾
3. 壓克力棒棒糖
4. 手搖旗
5. 證件照吊飾
6. 髮夾組

𖤐 領取條件：
追蹤此帳號、出示周邊 & 泡泡（待補充）

𖤐 發放時間 & 地點：
當天會發文公告

🤍 轉發 + 留言抽全套六種應援物各一`,
    images: [
      "/item_015_01.jpeg",
      "/item_015_02.jpeg",
      "/item_015_03.jpeg",
      "/item_015_04.jpeg",
      "/item_015_05.jpeg",
      "/item_015_06.jpeg",
    ],
  },
  {
    id: "item_016",
    creator: "@only_for_1ce",
    creatorUrl: "https://www.threads.com/@only_for_1ce",
    types: ["撕拉片", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜第一款應援物 一寸撕拉片",
    postUrl:
      "https://www.threads.com/@only_for_1ce/post/DUz5lxbk27B?xmt=AQF0tMKLI5NtHf6r8rHVB5T2BCGNhAL5rNeePQvnSDRIiw",
    postContent: `𝐓𝐖𝐈𝐂𝐄＜𝐓𝐇𝐈𝐒 𝐈𝐒 𝐅𝐎𝐑＞𝐖𝐎𝐑𝐋𝐃 𝐓𝐎𝐔𝐑 𝐈𝐍 𝐓𝐀𝐈𝐏𝐄𝐈

第一款應援物－一寸撕拉片

➊ 款式：
每個成員都有兩款不一樣的照片，每款 15 張，每個人總共都有 30 張
隱藏款兩款皆 15 張

➋ 日期：
於 3/21 發放（目前還在努力刷 22 號）
穿著、時間、地點當天都會公布在此篇貼文留言區

發放地方：
目前還不確定，有可能隨意走動或在一個地方待一段時間再換定點

領取方式：
可以跟我說你最喜歡誰，會讓你抽她的撕拉片
兩款皆會混在一起，抽到哪款不確定，但一定會是你擔

交換：
想交換可以直接私訊或留言
若要交換可以直接給你你擔的兩款，或是用抽的給你抽兩個人，方式自選

注意事項：
不可隨意丟棄、不禮貌

領取條件：
任意官方周邊、手燈

隱藏款：
真假忙內、玉米 cp
若要領取隱藏款，除了要符合領取條件外，需另外出示此篇貼文

這是我第一次發應援物，規則或哪裡有可以做更好的地方歡迎大家跟我說。
第一張用了糊圖想保持一點驚喜感，不過第二張能先提前看到一點！
我還會有第二款，歡迎持續追蹤後續。
當天在半路上遇到我，直接攔截！`,
    images: ["/item_016_01.jpeg", "/item_016_02.jpeg"],
  },
  {
    id: "item_017",
    creator: "@starri.29",
    creatorUrl: "https://www.threads.com/@starri.29",
    types: ["小卡", "票卡", "貼紙", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN 台北｜免費應援物",
    postUrl:
      "https://www.threads.com/@starri.29/post/DT2dbwdkhRl?xmt=AQF0HL0spBojRs_Yl6RwDbo4le25I7LD1gC7ewdQDZvFYA",
    postContent: `🍭 TWICE <THIS IS FOR> WORLD TOUR IN 台北 免費應援物

3/21 & 3/22 台北大巨蛋場外

《應援物發放》
以下 3/21、3/22 兩天各發 100 份

⭐ 雙面小卡－4 款（隨機 2 款）200 份
⭐ 雷射彩虹票根 200 份
⭐ 小方卡 200 份
⭐ 貼紙 200 張

❤️ 領取時主動出示我的脆主頁的人，直接給你一套 4 款雙面小卡 ❤️

希望大家會喜歡，詳細時間地點確定好再公告！

《線上領取》
myship.7-11.com.tw/gener…
如無法到場，有開少量可至賣貨便下單
品項有些許不同，請確認後再下單
演唱會前一定會寄出
線上有餘量的話併入線下免費發放

👑 線上 only 品項：燙色拍立得
👑 線下 only 品項：雷射彩虹票根

自製應援請自行考量後再下單，也請務必取貨
請認準浮水印，小心詐騙！！

這次把所有想做的都嘗試了一輪，最後發現我的強項還是做紙片類最好看
財力不夠，雙面小卡只出一半（七巡我等妳們！！！）

🍭 也歡迎交換，有預留可直接私訊或下方留言喔`,
    images: ["/item_017_01.jpeg", "/item_017_02.jpeg", "/item_017_03.jpeg"],
  },
  {
    id: "item_018",
    creator: "@imangie.k",
    creatorUrl: "https://www.threads.com/@imangie.k",
    types: ["擦拭布", "吊牌", "其他"],
    title: "台北場最終版應援文章｜眼鏡布與壓克力吊牌",
    postUrl:
      "https://www.threads.com/@imangie.k/post/DVv6lyTkslN?xmt=AQF0rLL-x2k1vHxgKmZ735iCYbiEcfinX6XtIBhkjEXaUw",
    postContent: `沒想到會有新應援物，所以這篇就是最終版的應援文章了。
這篇會置頂，並在演唱會當天將發放地點的照片放在留言區置頂，希望交換順利，發放也順利。

☘︎ 地點：台北大巨蛋－連通口
☘︎ 日期：3/21、3/22
☘︎ 時間：3/21 暫定 2-3 點到；3/22 要看彩排，預計中午左右到
☘︎ 數量：眼鏡布每日約 250 條，壓克力吊牌每日至少 15 個
☘︎ 領取方式：
身上有 lovely、當日演唱會門票或是泡泡，可領眼鏡布一條；
壓克力吊牌因數量較少，每日前 15 名「出示此篇文章」的萬斯，即可額外領取吊牌一個。

有約交換的朋友們，兩天都會把預留的帶在身上，到 22 號五點前都沒交換到，會直接釋出。
如果有擔心沒有順利交換到想結束後改線上交換，也可以先訊息告知，會先備註下來。`,
    images: [
      "/item_018_01.jpeg",
      "/item_018_02.jpeg",
      "/item_018_03.jpeg",
      "/item_018_04.jpeg",
      "/item_018_05.jpeg",
      "/item_018_06.jpeg",
      "/item_018_07.jpeg",
      "/item_018_08.jpeg",
      "/item_018_09.jpeg",
    ],
  },
  {
    id: "item_019",
    creator: "@1kouriio",
    creatorUrl: "https://www.threads.com/@1kouriio",
    types: ["吊飾", "鏡子", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR in TAIPEI｜愛心雙面鏡子吊飾",
    postUrl:
      "https://www.threads.com/@1kouriio/post/DTVCCACkpHb?xmt=AQF0kv_uxHG-p_4AjfJ5V7PUj0jjuhjrlQF4YSlNtttfig",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR in TAIPEI

這裡是 @1kouriio
設計了兩款愛心雙面鏡子吊飾來跟大家交換／領取。

🪽 日期：3/21、3/22
當天會在 Threads 公布穿搭，會趴趴走找交換，所以沒有確切地點；如果有定點會發文。

🪽 數量：兩款各 14 個，共 28 個
成本關係只有兩款，以交換為主。

根據高雄場的經驗，交換不一定找得到人。
若有剩餘，兩天都會看時間開放未登記的來領取或交換，會在 Threads 發文公告剩餘數量，發放完畢也會公告。

🪽 領取條件：
01. Pink Dahyun ver.：出示 davelly 周邊
02. Blue Mina ver.：出示 mively 周邊

🪽 交換：
可指定款式，先登記交換的可以先選款式，某款數量交換完就只能選另一款。
友列優先，還沒想好的也可以私訊幫你保留。

🪽 注意事項：
每人限領一樣，不可代領、轉售，請有禮貌。`,
    images: ["/item_019_01.jpeg", "/item_019_02.jpeg"],
  },
  {
    id: "item_020",
    creator: "@mocinchenyue",
    creatorUrl: "https://www.threads.com/@mocinchenyue",
    types: ["其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜免費應援物公告",
    postUrl:
      "https://www.threads.com/@mocinchenyue/post/DU_Q_t-ki7R?xmt=AQF0VC_0_VTHKsFlO9QEj-TBCxG07GzBp2gv8EjODOcWzA",
    postContent: `TWICE〈THIS IS FOR〉WORLD TOUR IN TAIPEI 免費應援物公告

（換圖重發，這樣比較好看）
經百般糾結，最終決定要用此身分進行應援物發放，再次感謝我的朋友們，願意陪我一起把這個想法實踐出來。
第一次做應援物，還請各位多多支持，如果可以的話請盡量分享哦～

💙 發放時間：3/21～3/22
（此人只有 3/21 會去，所以兩天是不同人發的唷～）

💜 內容物：應援幣
（雷射刻印，無分款，會附上保護殼）

💙 發放方式：
主交換，不過因是三人合力製作，如要交換要告知場次以及能夠幾換幾？

💜 數量：待定
（兩天數量不同，主看交換後剩餘數量）

💙 領取條件：
簡單的粉絲證明
（第一次做應援，不想看到心血被辜負）
（3/21 可以告訴我《奮不顧身》中最喜歡的橋段）

💜 地點：當天公布
（所以記得追蹤留意地點哦）

⚠️ 注意事項：
1. 不得轉售
2. 請勿丟棄
3. 保持禮貌`,
    images: ["/item_020_01.jpeg", "/item_020_02.jpeg"],
  },
  {
    id: "item_021",
    creator: "@love9two",
    creatorUrl: "https://www.threads.com/@love9two",
    types: ["吊飾", "鏡子", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜雙面壓克力小鏡子吊飾",
    postUrl:
      "https://www.threads.com/@love9two/post/DTfojLbCXhS?xmt=AQF0qacBeB4RwTN5RpmRxH89Uqkip-LyGpMu0BINPfXInw",
    postContent: `TWICE＜THIS IS FOR＞WORLD TOUR IN TAIPEI 應援小物

10 週年 Lovely 雙面壓克力小鏡子吊飾

數量：共 50 個
🍭 交換日期：3/20、3/21、3/22
🍭 領取條件：數量不多，以交換優先，歡迎留言或私訊
（沒交換完會免費發放給可愛或座位旁的萬斯）

圖片感覺微微色差，所以留言附上當時開箱影片。
實體真的可愛的不行。
壓克力／鏡面全都有膜，請領到後自行撕除。

🚫 禁止二次交換
也不希望在地上看到自己用心的應援物 🚫`,
    images: ["/item_021_01.jpeg", "/item_021_02.jpeg", "/item_021_03.jpeg"],
  },
  {
    id: "item_022",
    creator: "@dingdung_0607",
    creatorUrl: "https://www.threads.com/@dingdung_0607",
    types: ["其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜Lovelys束口袋",
    postUrl:
      "https://www.threads.com/@dingdung_0607/post/DVr2gMFgRYX?xmt=AQF0R_wzO-SbGTvk002C4YnHrCVG-jvIMCgWHiT277ySiA",
    postContent: `TWICE＜THIS IS FOR＞WORLD TOUR IN TAIPEI 台北場免費應援發放

各位 Once 們大家好！
下禮拜就可以見到期待已久的九兔們了。
去年很幸運有參加到高雄場，現場氣氛真的很想跟大家分享對 TWICE 的愛，所以決定要來做台北場的應援。

📌 發放日期：3/21、3/22
📌 發放時間、地點及穿著：
因為 21 要看彩排不確定時間，屆時都會當天公布在留言區，想領取的 Once 可以留意資訊。
📌 應援物：Lovelys 束口袋
（尺寸約 14cm × 17cm，可裝小物）
📌 發放數量：一天各 20 份，發完為止
📌 領取條件：當天出示官方周邊（手燈、娃等等）、門票任一

📌 注意事項：
每人限領一份（不可代領）
請勿轉賣、丟棄或拿此應援物與他人交換應援

圖是手搓請朋友電子化再請廠商小修的，目前實物還在製作中，實物圖先用示意圖代替。
歡迎交換，嚴禁拿他人的應援物來交換。
每個應援物都是人家的心血，請尊重每個製作應援的 Once。
麻煩有領取到的不要丟掉，我會超級難過。
到時候有領到也歡迎返圖給我。
第一次做應援物，希望大家喜歡。`,
    images: ["/item_022_01.jpeg"],
  },
  {
    id: "item_023",
    creator: "@tiantian_961229",
    creatorUrl: "https://www.threads.com/@tiantian_961229",
    types: ["磁鐵", "徽章", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜台北場應援實體照",
    postUrl:
      "https://www.threads.com/@tiantian_961229/post/DVlKxItjpT1?xmt=AQF0dmTHmkmLLfjh4a2WOQH-vstWKbPuOWUNAt77TeUxCQ",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR IN TAIPEI｜台北場應援實體照

全數包裝完成，終於正常發揮的 J 人。

🔸 眼影盤磁鐵採用盲包概念隨機抽取
（日文文字參考 25 年冬日娃）

🔹 刺繡徽章包裝時才發現腰封做得比較小一點，希望大家不會介意。
參考圖二實體顏色比較淡一些，別在帆布袋上特別合適。

⚠️ 很重要
這次草地跟上一次拍的是不同地點。
感謝友情攝影。

🍭 應援小物：
LOVELY 眼影盤磁鐵／MISAMO 刺繡徽章

🍭 更多相關消息歡迎關注我們的聯合應援。`,
    images: ["/item_023_01.jpeg", "/item_023_02.jpeg"],
  },
  {
    id: "item_024",
    creator: "@jjcciioouu",
    creatorUrl: "https://www.threads.com/@jjcciioouu",
    types: ["燈箱", "其他"],
    title: "飯製迷你燈箱｜現場免費應援發放",
    postUrl:
      "https://www.threads.com/@jjcciioouu/post/DSmpHROEawC?xmt=AQF0P4m1A61Aghh4vj0ld0ZhsAJNxokgPxkc3KyGPZmnCg",
    postContent: `飯製迷你燈箱已到貨，預計本週開始陸續寄出！會從數量多的開始出，出貨文會更新在此篇留言置頂。
請有預購的 ONCE 們近期留意到貨簡訊。

關於現場免費應援發放：
3/21、3/22 會在大巨蛋現場免費發放，預計每天發 25 個。
領取方式及條件會在演唱會日期接近時再公布，想領取的 ONCE 們請記得追蹤。`,
    images: ["/item_024_01.jpeg", "/item_024_02.jpeg"],
  },
  {
    id: "item_025",
    creator: "@lynnnnn.com_",
    creatorUrl: "https://www.threads.com/@lynnnnn.com_",
    types: ["吊飾", "扇子", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜迷你大王扇吊飾",
    postUrl:
      "https://www.threads.com/@lynnnnn.com_/post/DVlZHfnDyT-?xmt=AQF08pqwqLmblRsjZEgd6_radbsLn00yWdf8ZC4-HUhxiQ",
    postContent: `TWICE THIS IS FOR WORLD TOUR IN TAIPEI 台北場應援物發放

大家好，我是 Lynn。
我來兌現之前的祭品文了，一點小小心意，希望大家喜歡。

發放資訊
應援物：迷你大王扇吊飾
發放時間：3/21、3/22 下午
發放地點：當日另行公告地點及穿搭特徵等
發放數量：每個成員各 30 份，總共 270 份，兩日平均發放，各 135 份

領取規則
出示官方周邊、門票、泡泡等即可領取一份
一人限領一份，不可代領，不可重複領取
成員隨機抽選，不可指定
嚴禁轉售及丟棄
不開放預留應援物，以現場發放為主

目前先這樣，有想到什麼再補充，歡迎大家來找我領應援。`,
    images: ["/item_025_01.jpeg"],
  },
  {
    id: "item_026",
    creator: "@aiifang_",
    creatorUrl: "https://www.threads.com/@aiifang_",
    types: ["吊飾", "手幅", "其他"],
    title:
      "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜MOMO 壓克力吊飾與迷你手幅吊飾",
    postUrl:
      "https://www.threads.com/@aiifang_/post/DUf0n-rkR60?xmt=AQF0zkGPaRr1_AY1yDdZvZ2wL2U_e2k-aitRGXKv_sqU9w",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR IN TAIPEI 免費應援發放

大家好，這裡是 @aiifang_。
再一個多月就是台北場啦，這次一樣準備了一些應援物發放。

應援物
MOMO 壓克力吊飾 75 份
MOMO 迷你手幅吊飾 45 份
收到成品後會在此篇貼文留言區更新實體照片。

領取條件
出示當天演唱會門票 + 手燈（不限哪代）
出示此篇貼文
因為高雄場有點混亂導致真的有看到貼文想領的人沒有領到，所以這次增加一條出示貼文，希望想領的大家都可以拿到。
若有餘量會隨機塞給我看到的桃擔。

發放時間、地點
這邊三天都會入場，最後一天會看彩排。
發放時間暫定中午 12:30，以當天貼文動向為主。
會採隨機走走發放的形式，不會定點發放。

注意事項
每人限領一個，發完為止
應援物禁止轉售、丟棄
有想到什麼會繼續在留言區補充

大家 3/20-22 見。`,
    images: ["/item_026_01.jpeg"],
  },
  {
    id: "item_027",
    creator: "@hyjkmnkzh",
    creatorUrl: "https://www.threads.com/@hyjkmnkzh",
    types: ["拍立得", "吊牌", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜撕拉拍立得與吊牌",
    postUrl:
      "https://www.threads.com/@hyjkmnkzh/post/DUNVUTDkTUA?xmt=AQF0FoPoPpDg6BjlwgD3VewVkRdCsVRnJGp0dz2GE3gXqg",
    postContent: `稍微重新排版一下看起來比較直觀。

TWICE <THIS IS FOR> WORLD TOUR IN TAIPEI

大家好，台北場的應援物終於決定好了！

時間地點
日期：3/21、3/22
發放地點：當天公布

應援物
撕拉拍立得 + 吊牌（共 120 組）
拍立得 SaMi 彩每人會有兩種，共六種；吊牌無分款式
圖一為撕拉拍立得所使用的照片，圖二為吊牌

領取方式
1. 出示門票或粉絲證明（泡泡、手燈、lovely 等）
2. 追蹤此帳號

交換應援
若各位想要交換應援也可以私訊我

注意事項
1. 禁止把我的應援物再拿去交換或隨意丟棄
2. 一人限領一份
3. 拍立得為隨機抽選`,
    images: ["/item_027_01.jpeg", "/item_027_02.jpeg"],
  },
  {
    id: "item_028",
    creator: "@_yu_hsinnn_",
    creatorUrl: "https://www.threads.com/@_yu_hsinnn_",
    types: ["湯匙", "其他"],
    title: "TWICE THSI IS FOR WORLD TOUR in TAIPEI｜啦不理湯匙應援",
    postUrl:
      "https://www.threads.com/@_yu_hsinnn_/post/DUPzntKCVQX?xmt=AQF0Cjc7tZUxnJZoWVvyZsEBrIk1w9_cdjvch8MzvRkjfA",
    postContent: `TWICE <THSI IS FOR> WORLD TOUR in TAIPEI 應援

大家好，這裡是第一次做應援的小欣。
這次畫了啦不理的圖在湯匙上，讓大家陪你一起吃甜點。

因數量不多故先以交換為主，若有剩下的會再開賣貨便。

應援內容：不鏽鋼 304 湯匙（13cm）
日期：3/21 為主（3/20、3/22 也可以去場外交換）
數量：40

注意事項：
湯匙皆有用酒精消毒過，使用前建議再清洗一次
每人限領取一份
請勿隨意丟棄、轉售

喜歡的話歡迎各位分享給所有朋友。`,
    images: ["/item_028_01.jpeg", "/item_028_02.jpeg", "/item_028_03.jpeg"],
  },
  {
    id: "item_029",
    creator: "@maymi2003",
    creatorUrl: "https://www.threads.com/@maymi2003",
    types: ["吊飾", "戒指", "勳章", "小卡", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜免費應援物發放",
    postUrl:
      "https://www.threads.com/@maymi2003/post/DUcpIvJETiT?xmt=AQF0oDxZVnsjgCRcz50D_oMH-MxOirs2xkSl4t7ItSim2g",
    postContent: `TWICE〈THIS IS FOR〉WORLD TOUR IN TAIPEI 免費應援物發放

把愛釘在指間，把甜掛在身邊，Feel Special 的相遇。

交換限定「小盤子吊飾」共 35 份
粉絲皆可領「成員壓克力戒指」共 100 份

時間：3/20、3/21、3/22
地點：當天於此文及 IG 限動公佈

領取條件二擇一
1. 出示 TWICE 任一期會員或成員泡泡 → 戒指，隨機抽取
2. 線下應援物交換 → 吊飾、戒指可擇一，隨機抽取

預留交換請帶圖留言或私訊，怕麻煩只會挑極少數自己喜歡的或友列，未回覆＝婉拒。
餘量十週年勳章、子瑜變化卡、JYP 棒棒糖也會一起帶去發。

高雄場發完直接學乖，粉絲門檻拉好拉滿，發誓一定要給一些真心 ONCE。
不過數量有點少還請見諒。
而且最近詐騙猖狂，所以浮水印上好上滿。
歡迎大家 3 月來找我玩。`,
    images: [
      "/item_029_01.jpeg",
      "/item_029_02.jpeg",
      "/item_029_03.jpeg",
      "/item_029_04.jpeg",
      "/item_029_05.jpeg",
    ],
  },
  {
    id: "item_030",
    creator: "@a0908414893",
    creatorUrl: "https://www.threads.com/@a0908414893",
    types: ["徽章", "鑰匙圈", "撕拉片", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR in TAIPEI｜黛比＆筑兒聯合應援",
    postUrl:
      "https://www.threads.com/@a0908414893/post/DUvw7lnkpFp?xmt=AQF0cb6WLAM4APCwx6qtg4_14W7xbeeZVxpGaIVc3y0Ptg",
    postContent: `TWICE THIS IS FOR WORLD TOUR in TAIPEI 台北場應援
黛比＆筑兒 聯合應援
3/20～3/22

黛比 @na_rabbi._.tt
日期：3/20、3/21（21 彩排，20 優先）
地點、時間、穿著當天公布
交換應援：絨毛徽章吊飾（臉、紗、瑜、咪）
紙類不換，數量極少（剩個位數）
盲抽免費應援物：迷你斯拉片（2 吋）
臉、紗、瑜、多、彩

筑兒 @a0908414893
日期：3/20、3/21、3/22
地點、時間、穿著當天公布
1. 甜點版可愛糖果包鑰匙圈－手工製成
甜筒啦不理片片（約 100 個，內含隨機三個成員）
2. 抱抱系列啦不理鑰匙圈
抱心娜、抱兔子娜、生日蛋糕南

領取條件與注意事項在留言區。
歡迎你們來領取或交換。`,
    images: ["/item_030_01.jpeg", "/item_030_02.jpeg", "/item_030_03.jpeg"],
  },
  {
    id: "item_031",
    creator: "@yuncih.guo",
    creatorUrl: "https://www.threads.com/@yuncih.guo",
    types: ["扇子", "吊飾", "其他"],
    title: "TWICE 大巨蛋應援交換文",
    postUrl:
      "https://www.threads.com/@yuncih.guo/post/DVRMiOZE2Oo?xmt=AQF0HNP3o39roalQ9YI9RpLzOk7a0XdPv4wBX9G_7Grl3w",
    postContent: `TWICE 大巨蛋應援交換文

這次 TWICE 3/20–3/22 三天大巨蛋我都會到。
準備了一點小小心意想跟大家交換。

預計交換地點：
大巨蛋國父紀念館地下連通道

時間：
下午時段（會再依現場狀況微調）

應援物內容
團體 9 人扇
這次是我跟妹妹一起準備的應援，所以也可以一次跟我換兩份應援物。

少量加碼交換
米彩人生四格吊飾、立牌
10×4cm
因為之前已經交換掉很多，剩餘優先交換米彩 CP 應援。

有想交換扇子或米彩人生四格的 ONCE 歡迎聯絡我。
備註：之前已經討論過交換的朋友我都有登記，之後會再跟大家確認。`,
    images: ["/item_031_01.jpeg", "/item_031_02.jpeg"],
  },
  {
    id: "item_032",
    creator: "@sa_nanana.co_kyu",
    creatorUrl: "https://www.threads.com/@sa_nanana.co_kyu",
    types: ["磁鐵", "其他"],
    title: "台北場應援｜baby Lovely 大頭磁鐵",
    postUrl:
      "https://www.threads.com/@sa_nanana.co_kyu/post/DV15DOXEmLm?xmt=AQF00ojA0Vbi6ZZhmso7wbQBplHnt9Bq1yeZacL3E7uZ5w",
    postContent: `ONCE 們大家好～

這次 3/20-3/22 演唱會，我們九兔首次站上大巨蛋舞台的日子！
有準備應援要到現場發～

這次的應援物是：
baby Lovely 大頭磁鐵（盲袋）

以現場發送為主～
數量的話三天總共 150 個，每天平均 50 個！
有喜歡想要來領取可以關注我的脆！

領取條件：以下擇一就好
1. 任何周邊（例如手燈）
2. 泡泡訂閱（有訂閱可以偷偷告訴我你想要誰的磁鐵）
3. 證明你是 ONCE！

當天會發即時位置在此帳號，大帳 @mon_mon_0811 也歡迎關注。
等收到貨再來發實體圖～
希望大家多多來找我領取！`,
    images: ["/item_032_01.jpeg"],
  },
  {
    id: "item_033",
    creator: "@rakuchan_guitar",
    creatorUrl: "https://www.threads.com/@rakuchan_guitar",
    types: ["貼紙", "其他"],
    title: "TWICE 九位 LOVELY 貼紙｜免費應援物發放",
    postUrl:
      "https://www.threads.com/@rakuchan_guitar/post/DVi6RRnEwnz?xmt=AQF012weXKK5vU4ZSCRCccalCgnaUHFdSoFSgj_1jzfMTg",
    postContent: `求擴散！！

3/20、3/21、3/22 三天會在台北大巨蛋場外發免費應援物。
這次準備的是 TWICE 九位 LOVELY 貼紙 450 份，預計三天每天發放 150 份。
融合台灣元素、特別請繪師繪製而成，非常非常歡迎 ONCE 來領取。

為了回饋 TWICE 成員以及在高雄世運 ONCE 們給我的那些滿滿的愛，製作了一點小禮物。

領取方式 / 小遊戲：
我會隨機翻一張 LOVELYS 貼紙，回答出該張貼紙代表的成員即可領取。
下方有影片範例，共示範三次。
當天只需回答一題，如果緊張想不起來，貼紙上也有英文可以偷看。

每一份是手工包裝，如果真的有少成員可以跟我說。
台灣 ONCE 們！我們當天會場見吧！
期待帶去的貼紙們能被 ONCE 們拿光！

領取時間及地點當日公佈
歡迎追蹤脆或 IG（沒有強制）
一人領取一份
領取後不可轉賣 / 不要隨意丟棄
真的不希望在地板上看到它們。`,
    images: ["/item_033_01.jpeg"],
  },
  {
    id: "item_034",
    creator: "@0_rivia",
    creatorUrl: "https://www.threads.com/@0_rivia",
    types: ["吊飾", "其他"],
    title: "TWICE 2026 台北場應援｜吊飾共 258 份",
    postUrl:
      "https://www.threads.com/@0_rivia/post/DV2Xrm2kjfg?xmt=AQF0uTbpybVzFf6FycwnYg3q3ObLsNzau0GzX9X_j1n5YQ",
    postContent: `二發

TWICE＜THIS IS FOR＞WORLD TOUR IN TAIPEI
2026 台北場應援 吊飾共 258 份

團體版
墨鏡款 40 份
抬頭款 30 份
MISAMO 款 30 份

特別版
子瑜款 15 份
志效款 4 份
彩瑛款 4 份

各成員版
9 兔各 15 份

歡迎免費領取 / 交換：
主要發放日為 3/22，3/21 開放少數交換；
當天會在留言區公布時間地點。

歡迎各位 Once 私訊。`,
    images: [
      "/item_034_01.jpeg",
      "/item_034_02.jpeg",
      "/item_034_03.jpeg",
      "/item_034_04.jpeg",
      "/item_034_05.jpeg",
      "/item_034_06.jpeg",
    ],
  },
  {
    id: "item_035",
    creator: "@tzuyu_ouen",
    creatorUrl: "https://www.threads.com/@tzuyu_ouen",
    types: ["手幅", "尺", "扇子", "其他"],
    title: "TWICE WORLD TOUR THIS IS FOR IN TAIPEI｜子瑜應援物免費發送",
    postUrl:
      "https://www.threads.com/@tzuyu_ouen/post/DUh9A1jCbD9?xmt=AQF0zwgAfKD3d9eVk7rDVUmSOSw6LVe2NTuvAd3v2pYLqg",
    postContent: `TWICE WORLD TOUR＜THIS IS FOR＞IN TAIPEI 應援物免費發送

不提供交換預約，請現場抓捕。

日期：03/22
時間與地點：03/22 會在本篇文章留言處公佈，追蹤帳號才不會錯過。

應援物：
(1) TAIPEI 手幅（200 張）
(2) 周子瑜大長腿尺（100 個）
(3) SAKURA 手幅（200 張）
(4) 美人瑜透扇（100 個）

應援物發送組態
【標準組態】：TAIPEI 手幅一張
【隨緣組態】：TAIPEI 手幅一張 + 周子瑜大長腿尺一個
【櫻花組態】：SAKURA 手幅一張 + 美人瑜透扇一個

每人限領一份，不能代領
(2) 有「關鍵配飾」即可觸發【隨緣組態】，發完為止
(3) 與 (4) 憑櫻花季購票證明即可觸發【櫻花組態】，發完為止

領取方式：
03/22 當日門票 + TWICE 官方周邊、子瑜官方周邊、櫻花季購票證明

請多多轉發、多多分享
禁止轉賣與丟棄應援物。`,
    images: ["/item_035_01.jpeg"],
  },
  {
    id: "item_036",
    creator: "@uuu_0103",
    creatorUrl: "https://www.threads.com/@uuu_0103",
    types: ["鐵盒", "其他"],
    title: "TWICE THIS IS FOR IN TAIPEI｜鐵盒免費應援",
    postUrl:
      "https://www.threads.com/@uuu_0103/post/DU-k5jPkv_H?xmt=AQF0iUVpOppvU40bZuMtf2VwHSmujNIIiqTDJcz9yOlIOg",
    postContent: `TWICE <THIS IS FOR> IN TAIPEI 免費應援

原本有在考慮要不要跟高雄場一樣做飄帶鑰匙圈，但想到演唱會當天大家會收到好多美麗的小卡，於是決定製作實用的鐵盒讓大家來收納這些回憶。

鐵盒有點磨砂的感覺，線條也有凹凸感很好看，實測放入硬卡套空間還綽綽有餘，希望萬斯們會喜歡！

發放物品：鐵盒（長 12.3 × 寬 9.2 × 高 4 cm）
發放時間 & 位置：3/21、3/22 會在 IG / Threads 公告
發放數量：一天 25 份，一人限領一份
領取條件：出示粉絲證明（手燈、泡泡、官方周邊...）

注意事項：
因上次高雄場的經驗，加上數量有限，想交換的萬斯可以直接留言，會再挑選一下自己比較喜歡的去私訊，希望大家能理解。
鐵盒在運送過程中有些小傷痕，完美主義者請自行評估。

歡迎大家多多幫我轉發或分享出去，期待大家到時候來找我玩。`,
    images: ["/item_036_01.jpeg"],
  },
  {
    id: "item_037",
    creator: "@chue1na_11",
    creatorUrl: "https://www.threads.com/@chue1na_11?igshid=NTc4MTIwNjQ2YQ==",
    types: ["其他"],
    title: "TWICE THIS IS FOR WORLD TOUR in TAIPEI｜硅藻泥杯墊",
    postUrl:
      "https://www.threads.com/@chue1na_11/post/DVDCY0gEiKQ?xmt=AQF0xYAIQ79MU50-1UIV1dKB5vRhc6rzngbAQBzKb7BKtj9pBM73nyvRxVKuL01DTyGRp2cy&slof=1",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR in TAIPEI

哈嘍各位 ONCE，這次台北場準備了應援想要發給大家！

應援物：硅藻泥杯墊
（圖片是使用小紅書：MoMo大王的圖，他有說可自印）

發放數量與日期：
三天各發放 100 份，總共 300 份

領取條件：
只要當天的穿搭能看出你是萬斯，或者出示演唱會門票、周邊等

注意事項：
一人限領取一份
禁止販售、隨意丟棄

地點跟準確時間當天會再發文告知。
歡迎各位萬斯來找我領取／交換
（想交換的可以留言或私訊我）`,
    images: ["/item_037_01.jpeg"],
  },
  {
    id: "item_038",
    creator: "@lilfantasyao",
    creatorUrl: "https://www.threads.com/@lilfantasyao",
    types: ["其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜PART 1 彩瑛應援",
    postUrl:
      "https://www.threads.com/@lilfantasyao/post/DU-9Y0OEwoI?xmt=AQF0alDVD856ImQncBi5k45RqKU1ozanO4bym_AMnT7Teg",
    postContent: `TWICE＜THIS IS FOR＞WORLD TOUR IN TAIPEI 臺北場應援交換
PART 1 彩瑛應援

上次高雄場沒辦法見到彩，就默默努力手工織了小酪梨和幾個彩擔交換應援、互相安慰。
這次臺北場終於要見到彩了，決定來發文交換！

應援物：
鉤針小酪梨 10 個
尺寸剛好是彩兔可以抱著的大小，實測放在娃包裡也很剛好
可以許願喜歡的配色交換，會盡量安排

交換條件：
1. 主要想交換彩瑛的應援物
2. 因為每個作品從設計改良到手工製作都花非常多時間，數量有限，所以會選擇比較喜歡的優先交換
3. 歡迎想交換的人直接留言應援物圖片，如果有我想交換的會再私訊詢問

交換日期：
3/20、3/21 為主，確定交換後可再討論

注意事項：
請勿轉售或丟棄

敬請期待 PART 2 米彩應援`,
    images: ["/item_038_01.jpeg", "/item_038_02.jpeg"],
  },
  {
    id: "item_039",
    creator: "@lilfantasyao",
    creatorUrl: "https://www.threads.com/@lilfantasyao",
    types: ["其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜PART 2 米彩應援",
    postUrl:
      "https://www.threads.com/@lilfantasyao/post/DVDZ1LxkdFe?xmt=AQF0UVpDL8ge_sJY1E-Iuy9ZcFlPqy3A_D5MoQVj8c--pw",
    postContent: `TWICE＜THIS IS FOR＞WORLD TOUR IN TAIPEI 臺北場應援交換
PART 2 米彩應援

米彩應援來了！
靈感出處相信米彩粉一定可以秒答，絕對是米彩的經典互動，先不多說，來考考大家，今晚會在留言區公布答案。

應援物：
鉤針小草莓袋 10 個
尺寸是彩兔可以背著的大小，也可以拿來裝小物
每個都手工製作，外觀有些許差異，隨機交換

交換條件：
1. 主要想交換米彩或南的應援物，米彩粉優先
2. 因為每個作品從設計改良到手工製作都花非常多時間，數量有限，所以會選擇比較喜歡的優先交換
3. 歡迎想交換的人直接留言應援物圖片，有我想交換的會再私訊詢問。有需要私訊也可以，我有空時會再回覆，回覆較慢，還請見諒

交換日期：
3/20、3/21 為主，確定交換後可再討論

注意事項：
請勿轉售或丟棄`,
    images: ["/item_039_01.jpeg"],
  },
  {
    id: "item_040",
    creator: "@once.spark_twice.bloom",
    creatorUrl: "https://www.threads.com/@once.spark_twice.bloom",
    types: ["其他"],
    title: "ONCE spark, TWICE bloom 花店應援｜手燈背帶",
    postUrl:
      "https://www.threads.com/@once.spark_twice.bloom/post/DVjVipnCX3p?xmt=AQF0Wf0wbtK9nJ8XVZ0IZV7-MOZlgeDomo6RP4KKFofvvg",
    postContent: `ONCE spark, TWICE bloom 花店應援
限量應援禮－手燈背帶

因為在世運的時候手實在太忙了，加上看到好多人把手燈噴出去，所以決定應援物一定要做背帶。

想知道有多少 ONCE 也在家庭代工的，麻煩舉個手好嗎。
好，可以繼續趕工了。

應援日期：2026/03/20～22
應援地點：花譜花藝 @flowerscore_tw`,
    images: ["/item_040_01.jpeg", "/item_040_02.jpeg"],
  },
  {
    id: "item_041",
    creator: "@c___gn",
    creatorUrl: "https://www.threads.com/@c___gn",
    types: ["其他"],
    title: "TWICE THIS IS FOUR WORLD TOUR IN TAIPEI｜Lovely搶票御守香氛片",
    postUrl:
      "https://www.threads.com/@c___gn/post/DUanuNUjxF0?xmt=AQF0CNKOsb9LRkRfNKEDJ9HFyjTdLHxS1ukBSVwwPO969A",
    postContent: `TWICE <THIS IS FOUR> WORLD TOUR IN TAIPEI
321 應援物發放！！！

Lovely 搶票御守－香氛片

日期：3/21（六）
相關資訊當天會置頂留言區，或另發貼文。

領取方式 / 數量
憑當日門票即可領取乙份
有頭卡 / 無頭卡各 45 份，共計 90 份（採隨機發放）
歡迎交換應援，可留言或私訊，有興趣的話會跟您聯絡。

注意事項
1. 每人限領 1 份，無代領
2. 禁止轉賣
3. 垃圾不落地
4. 無開賣貨便，請小心受騙`,
    images: ["/item_041_01.jpeg", "/item_041_02.jpeg", "/item_041_03.jpeg"],
  },
  {
    id: "item_042",
    creator: "@cj_.liao",
    creatorUrl: "https://www.threads.com/@cj_.liao",
    types: ["其他"],
    title: "TWICE臺北週報｜2YEON 應援小物",
    postUrl:
      "https://www.threads.com/@cj_.liao/post/DV0j_UQky0d?xmt=AQF0b4EBEUs70naOz6rsS6qr2xZoQO017IoYB9iJVR322w",
    postContent: `認真問…有 2YEON 粉想要這個應援小物嗎？

看到泰國場有美美的手幅，總覺得我們台灣也要有點特別的小物才行！
這次被最近很紅的報紙拍貼機啟發靈感，趕出了這份「TWICE臺北週報」🗞️

認真超怕印完沒人要的...`,
    images: ["/item_042_01.jpeg"],
  },
  {
    id: "item_043",
    creator: "@2._.8y",
    creatorUrl: "https://www.threads.com/@2._.8y",
    types: ["徽章", "其他"],
    title: "台北場應援｜小立牌、御守、徽章",
    postUrl:
      "https://www.threads.com/@2._.8y/post/DV3k-nQiX7R?xmt=AQF08W5ygUxJzCgr5MzDEKfaMLxvbYqoiK3NEZx5GMj0Og",
    postContent: `各位～應援終於被我弄出來啦（狂賀ㅋㅋ

3/20、3/21 兩天都可以蹲我
（20 號少量純交換，21 號可以直接領）

應援內容：
小立牌、御守、徽章
（採隨機發放，要交換的須先告知品項）

領取辦法：
1. 手燈 + 娃娃
2. 任一天的門票
3. 成員的泡泡
三項取一即可

發放地點：
當天公布
（會穿 10 週年外套 + 咪痛包）

歡迎大家來領應援～～～`,
    images: ["/item_043_01.jpeg", "/item_043_02.jpeg", "/item_043_03.jpeg"],
  },
  {
    id: "item_044",
    creator: "@ji_ye.na9",
    creatorUrl: "https://www.threads.com/@ji_ye.na9",
    types: ["手幅", "其他"],
    title: "報紙與手幅應援｜3/20 免費發放",
    postUrl:
      "https://www.threads.com/@ji_ye.na9/post/DV3ioyokm_T?xmt=AQF0Yy1uLbvkONvU1QYAnDoorhixMPbrgABk7Jp-fgeaQw",
    postContent: `報紙＆手幅應援
實體、預覽圖一次看！

演唱會倒數一週！
3/20 免費應援發放

領取時「主動」出示 IG 最上方置頂貼文（三篇任選一篇出示就好），即可領取報紙 + 手幅。
若沒有主動出示，僅能擇一應援領取。

最重要的還是有禮貌的領取就可以囉。
也可以多多分享出去！
有領到的朋友幫我拍認證照我也會非常開心！！！

演唱會前最後一次發應援貼文了，幾天後見。`,
    images: ["/item_044_01.jpeg", "/item_044_02.jpeg"],
  },
  {
    id: "item_045",
    creator: "@gray.buy",
    creatorUrl: "https://www.threads.com/@gray.buy",
    types: ["磁鐵", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜第二波應援物 冰箱貼",
    postUrl:
      "https://www.threads.com/@gray.buy/post/DV3jEaKmQ0o?xmt=AQF0pXylRVCYN8TZOSznDzbBk6hP-cxzDyMfPtSlmv-Row",
    postContent: `TWICE＜THIS IS FOR＞WORLD TOUR IN TAIPEI｜第二波應援物

第二波應援發表－冰箱貼
第二發是超可愛的冰箱貼啦（共 4 款）
當初看到這個加厚的透明感就決定是它了。

非常歡迎各位 ONCE 跟我交換應援物。
可以留言給我想交換的應援，也想看看各位大神的作品。

同時也會預留一部分直接發放。
預計於 3/21、3/22 發放，確切時間會再公告。
期待與大家見面的啦。`,
    images: ["/item_045_01.jpeg"],
  },
  {
    id: "item_046",
    creator: "@ph7_4_",
    creatorUrl: "https://www.threads.com/@ph7_4_",
    types: ["鏡子", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜打卡小圓鏡",
    postUrl:
      "https://www.threads.com/@ph7_4_/post/DV1eow7E9Sz?xmt=AQF01tpuluLTo2GVTais7r0RFaDRk4GZnpFCGtude4xAsQ",
    postContent: `TWICE 演唱會還不知道如何打卡嗎？！
超可愛打卡小圓鏡，解決你的煩惱。

TWICE《THIS IS FOR》WORLD TOUR IN TAIPEI
3/20、3/21 免費應援物發放預告

應援物資訊
3/20：豆豆眼 lovely 小圓鏡
3/21：lovely 小圓鏡
（此款因廠商疏失，只有 8 小隻，沒有多賢，領取者請自行斟酌）

領取方式 / 條件
找到我本人之後：
1. 出示此貼文（可用截圖）
2. 與我合照一張
即可獲得應援小物

領取時間與地點
確切的時間和地點當天會再同步到 Threads 上

交換應援物與注意事項
目前交換暫定數量 50 / 天
禁止代領、販售、轉賣
當天會固定在一個地方進行發放

最後希望大家會喜歡！
3/20、3/21 歡迎大家來找我一起拍照領應援。`,
    images: ["/item_046_01.jpeg", "/item_046_02.jpeg"],
  },
  {
    id: "item_047",
    creator: "@wallflower._.37",
    creatorUrl: "https://www.threads.com/@wallflower._.37",
    types: ["其他"],
    title: "TWICE THIS IS FOR IN TAIPEI｜玻璃轉印貼",
    postUrl:
      "https://www.threads.com/@wallflower._.37/post/DV3ExJtD9c1?xmt=AQF0bxtUDwcMaD1Ff7qFqAgL9FUcgrWRM7QicRa8gm1Pdg",
    postContent: `TWICE＜THIS IS FOR＞IN TAIPEI｜免費應援發放

大家好，這裡是壁花～
這次台北場也來為兔寶應援了。

這次準備了可以貼在啤酒杯上的玻璃轉印貼。
一共有 2 款。
不管是要台啤配熱炒還是燒酒配韓烤，都能和 TWICE 一起沈浸在醺然欲醉的幸福當中。

歡迎大家索取，回家自己動手 DIY 貼在玻璃杯、馬克杯、保溫瓶上即可，有手就會。

發放日期：3/21、3/22 下午時段
發放地點：到時候會再發文

領取條件：
追蹤帳號 @wallflower._.37
出示該則貼文`,
    images: [
      "/item_047_01.jpeg",
      "/item_047_02.jpeg",
      "/item_047_03.jpeg",
      "/item_047_04.jpeg",
    ],
  },
  {
    id: "item_048",
    creator: "@once._.11300324",
    creatorUrl: "https://www.threads.com/@once._.11300324",
    types: ["其他"],
    title: "TWICE THIS IS FOR IN TAIPEI｜歌曲膠片應援",
    postUrl:
      "https://www.threads.com/@once._.11300324/post/DV24IVOklBq?xmt=AQF0KjaLLtDopYrU3W1lzhFlvti-FpgOe3443RjsR8rpMg",
    postContent: `TWICE <THIS IS FOR> IN TAIPEI 應援

大家好！我是 Ling。
這次的台北場我準備了歌曲的膠片應援，是自己裁剪、自己包的，然後還有喉糖。
如果有一點小瑕疵也請大家多多包涵。

希望拿到的 ONCE 們可以好好收藏，不要讓它出現在垃圾桶裡。
也希望可以一起留下台北場的回憶。

領取的我會隨機包兩款進去，要交換的可以選要哪幾款。

領取時間
3/20 早上 9 點左右會到場，想要盡量在早上就處理完，下午有彩排還有其他事情要用，但也有時間可以交換。
3/21 只有早上一下下可以待而已。

領取條件
出示粉絲證明即可
（演唱會門票 / 小卡 / 娃娃 / 任何成員 Bubble 等）

領取地點
當天會在 Threads 定時公布。

歡迎大家來領取或交換應援，要交換的可以留言或者私訊。`,
    images: [
      "/item_048_01.jpeg",
      "/item_048_02.jpeg",
      "/item_048_03.jpeg",
      "/item_048_04.jpeg",
      "/item_048_05.jpeg",
      "/item_048_06.jpeg",
      "/item_048_07.jpeg",
      "/item_048_08.jpeg",
      "/item_048_09.jpeg",
    ],
  },
  {
    id: "item_049",
    creator: "@u3pp.w",
    creatorUrl: "https://www.threads.com/@u3pp.w",
    types: ["徽章", "其他"],
    title: "TWICE THIS IS FOR WORD TOUR IN TAIPEI｜CHAEBERRY 瓶蓋徽章",
    postUrl:
      "https://www.threads.com/@u3pp.w/post/DV2SpHNEoCV?xmt=AQF0UrdJ3JkCC7t9j3uw0ScXpz6Sg1tepxn2D654IBIfqw",
    postContent: `<TWICE "THIS IS FOR" WORD TOUR IN TAIPEI> 應援公告

CHAEBERRY 瓶蓋徽章

數量：很多（有點擔心）
領取時間 / 地點：
3/21 約 14:00 後～入場前
在 Taipei Dome Sculpture

領取條件：
身上有 lovely 或官方周邊（不限彩擔）
每人限領 1 個
禁止轉賣

無交換
世運繞來繞去要被自己搞暈了，不好意思。
但世運補見面的大家我都會留一個。

標題字印刷不清楚，介意者請繞步。`,
    images: ["/item_049_01.jpeg", "/item_049_02.jpeg", "/item_049_03.jpeg"],
  },
];
