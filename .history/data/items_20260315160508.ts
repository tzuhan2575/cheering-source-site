export const TYPE_OPTIONS = [
  "全部",
  "貼紙",
  "鑰匙圈",
  "吊飾",
  "透卡",
  "小卡",
  "票夾",
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

export const items: Item[] = [
  {
    id: "item_001",
    creator: "@leanne11_a",
    creatorUrl: "https://www.threads.com/@leanne11_a",
    types: ["貼紙", "徽章"],
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
    types: ["徽章", "鑰匙圈", "其他"],
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
    types: ["其他"],
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
    types: ["書籤", "其他"],
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
    types: ["小卡", "吊飾", "其他"],
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
    types: ["吊飾", "手幅", "其他"],
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
    types: ["小卡", "貼紙", "其他"],
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
    types: ["擦拭布", "其他"],
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
    types: ["其他"],
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
    types: ["其他"],
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
    types: ["其他"],
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
    types: ["吊飾", "小卡", "其他"],
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
    types: ["手幅", "扇子", "其他"],
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
    types: ["其他"],
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
  {
    id: "item_050",
    creator: "@jeongtzu_taiwan",
    creatorUrl: "https://www.threads.com/@jeongtzu_taiwan",
    types: ["吊飾"],
    title: "TWICE THIS IS FOR IN TAIPEI 應援發放｜九款成員吊飾",
    postUrl:
      "https://www.threads.com/@jeongtzu_taiwan/post/DVvjrMJgeqQ?xmt=AQF00pHjhvQmassyQ15Q2Fi7wxl33pewADgXlvfX9uKpfQ",
    postContent: `TWICE THIS IS FOR IN TAIPEI 應援發放

發放日期：3/22
詳細時間地點在前一天公布

發放物品：
九款成員吊飾，約 180 個

領取條件：
出示周邊即可隨機抽一個

注意事項：
禁止轉售／販賣
不接受代領
每人限領一個

做著做著變成全員吊飾，有夠喜歡。
前後都有一層膜，撕下來的時候要小心，我第一次撕太大力直接把扣環用斷。
每個成員都是我的寶貝，希望大家在抽的時候不要棄嫌。`,
    images: ["/item_050_01.jpeg"],
  },
  {
    id: "item_051",
    creator: "@sh154.a",
    creatorUrl: "https://www.threads.com/@sh154.a",
    types: ["其他"],
    title: "3/20 應援｜成員豆豆眼戒指與便利貼",
    postUrl:
      "https://www.threads.com/@sh154.a/post/DU3R5XPElrC?xmt=AQF0vGNMN1h8-8ZxE8z_4Am2cgUte3a95_KVXKjdaQJfrg",
    postContent: `3/20 應援除了會隨機發放成員豆豆眼戒指，還有「打ㄍㄟ厚～哇洗哩欸 SANA」便利貼，會隨機塞給看起來明顯是紗擔的 ONCE。

便利貼目前廠商還在製作中，期待收到成品。`,
    images: ["/item_051_01.jpeg", "/item_051_02.jpeg", "/item_051_03.jpeg"],
  },
  {
    id: "item_052",
    creator: "@5qqc_yoyoo",
    creatorUrl: "https://www.threads.com/@5qqc_yoyoo",
    types: ["鑰匙圈"],
    title: "TWICE THIS IS FOR WORLD TOUR in TAIPEI｜愛心鑰匙圈",
    postUrl:
      "https://www.threads.com/@5qqc_yoyoo/post/DUNiPUskhZV?xmt=AQF0vM8bBrJ8JLj087zHmlH4Xqie53RqjGNHHW08P3lNPw",
    postContent: `TWICE〈THIS IS FOR〉WORLD TOUR in TAIPEI 台北場應援

大家好我是 yoyo，這次設計了鑰匙圈會在場外發放，歡迎各位來找我領取／交換。

發放日期：
3/20、3/21、3/22
詳細地點（也有可能到處走）、時間、穿搭，當天會公布在留言區。

數量：
五款各 25 份，總共 125 份。
目前以交換為主，也會留少數餘量給大家現場領取。

應援內容：
愛心鑰匙圈 × 星星扣，雙面覆膜，尺寸約 6 cm。

注意事項：
每人限領一份
請勿轉售、隨意丟棄、代領、不禮貌

領取條件：
任意官方周邊、其他粉絲證明。
如果是以門票、手燈、追蹤成員 IG 當證明，要另外出示此篇貼文。

喜歡的話歡迎各位幫我分享，也謝謝上次來找我領應援的朋友。`,
    images: [
      "/item_052_01.jpeg",
      "/item_052_02.jpeg",
      "/item_052_03.jpeg",
      "/item_052_04.jpeg",
      "/item_052_05.jpeg",
    ],
  },
  {
    id: "item_053",
    creator: "@galactic._.0",
    creatorUrl: "https://www.threads.com/@galactic._.0",
    types: ["其他"],
    title: "THIS IS FOR WORLD TOUR IN TAIPEI｜棒棒糖氣墊梳與噴霧瓶",
    postUrl:
      "https://www.threads.com/@galactic._.0/post/DTFyV40kmnu?xmt=AQF0QmINI0Dutm5emUaaPxx2aaSzF39PPFms--MSBJ91rQ",
    postContent: `THIS IS FOR WORLD TOUR IN TAIPEI

大家好，這邊年紀輕輕想養老。
在經歷期末、畢業專題論文的摧殘，以及廠商瑕疵品太多、來回補寄的拉扯過程後，我帶著本次的應援回來了。

本次的應援分為：
1. 棒棒糖氣墊梳
2. 有票噴霧瓶（粉、藍兩色）

時間：
3/22
時間和地點會在時間靠近一點公告。
本次也會開放交換，之後會發文更新交換文。

領取方式：
本次只有預計在 3/22 發放。
另外本次新增抽小卡認人的環節，是抽自印的 10 週年小卡而已，希望可以讓喜歡 TWICE 的 ONCE 們都能夠領到。`,
    images: ["/item_053_01.jpeg", "/item_053_02.jpeg", "/item_053_03.jpeg"],
  },
  {
    id: "item_054",
    creator: "@leondonwu_uwu",
    creatorUrl: "https://www.threads.com/@leondonwu_uwu",
    types: ["貼紙"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜總裁止痛貼布防水貼紙",
    postUrl:
      "https://www.threads.com/@leondonwu_uwu/post/DVfeV9ZDxMk?xmt=AQF0dVQIduPrALPYTBgPggYQkkJ_X73ISkQ1HBP-iVvSIw",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR IN TAIPEI 應援物發放活動

總裁止痛貼布

應援物內容：
防水貼紙 700 張

領取時間與地點：
3/21-3/22 兩日下午平均發放
於台北大巨蛋場外發放
詳細地點和時段將會由本帳號於當日公布

領取條件：
每個人限領取一張
交換自製應援物亦可
免費領取

注意事項：
不得轉售
印刷品可能與圖片有色差，請見諒
重要事項會更新於本文置頂留言
注意安全，保持健康，孩子開心，家長放心
此貼紙尺寸可自行裁切為卡貼

製作：
@leondonwu_uwu
@_c.y.f`,
    images: ["/item_054_01.jpeg"],
  },
  {
    id: "item_055",
    creator: "@haohaochaing",
    creatorUrl: "https://www.threads.com/@haohaochaing",
    types: ["其他"],
    title: "TWICE THIS IS FOR WORLD TOUR in TAIPEI｜應援糖霜餅乾",
    postUrl:
      "https://www.threads.com/@haohaochaing/post/DVlxB4ckm_U?xmt=AQF0Aa2pSyklVvpiPxjhIdMuoeOZJfSoXBr1kZopKsojPQ",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR in TAIPEI

沒意外的話，還真的就出意外了～～～
免費應援發放

這次和高雄場一樣是請廠商做了應援糖霜餅乾。
與高雄場不同的是，這次做了全員 + MISAMO 的兔裝造型。

發放時間、地點
時間：3/20、3/21、3/22 下午
地點：當天公布發放地點及穿著

數量：
每日預計發 100 個，但有些許款式的數量較少，還請各位擔把握機會。

交換的部分，會拉群組或個別約，還有想交換的人也可以留言或私訊。

最重要的領取方式如下：
1. 出示任何一隻 lovely 即可領取應援
2. 隨機發放，基本上會給相對應 lovely 的成員餅乾，如一次帶 9 隻 lovely 在身上，則有機會額外獲得棒棒糖或球衣造型的餅乾
3. 一個人限領取一個，不可代領，也不可拿去交換別人應援`,
    images: ["/item_055_01.jpeg", "/item_055_02.jpeg"],
  },
  {
    id: "item_056",
    creator: "@mec.yang",
    creatorUrl: "https://www.threads.com/@mec.yang",
    types: ["小卡"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜MINA 與米彩小卡",
    postUrl:
      "https://www.threads.com/@mec.yang/post/DVyAxx2miRF?xmt=AQF0WFBqRlPX5ECP-EB06oVyBh5c98cQZqvqYEgYspiocQ",
    postContent: `[TWICE <THIS IS FOR> WORLD TOUR IN TAIPEI]

為了慶祝 TWICE 台北大巨蛋場及 MINA 生日，我們準備了應援小卡與大家分享！

日期：
3/20、3/21、3/22

地點與時間：
台北大巨蛋，細節當日公布

領取條件：
出示當日門票
或官方手燈
或泡泡訂閱日期滿 30 日（含）以上

內容：
MINA 小卡（3 種）+ 米彩小卡（1 種）

注意事項：
禁止轉售或隨意丟棄
每人限領一份，發完為止
現場請配合工作人員引導`,
    images: ["/item_056_01.jpeg"],
  },
  {
    id: "item_057",
    creator: "@kk_milk7",
    creatorUrl: "https://www.threads.com/@kk_milk7",
    types: ["貼紙", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜mina生日餅乾別針與貼紙",
    postUrl:
      "https://www.threads.com/@kk_milk7/post/DV3pgoimQ6W?xmt=AQF0M6-IDxexwQ_2Vqb7VOQMZVMYuVHdD_6Mb1kykat-6w",
    postContent: `TWICE＜THIS IS FOR＞WORLD TOUR IN TAIPEI 免費應援

1. mina 生日餅乾別針
2. 穿小馬裝的 mively 貼紙

時間：3/21
地點：待確定，到時候會發文

領取條件：
外觀有任何 TWICE 相關即可

特別感謝 @toast_owo_art 的熱情與才華
特別祝賀名井南 3/24 生日快樂
特別祝賀名將怒濤 3/25 生日快樂`,
    images: ["/item_057_01.jpeg", "/item_057_02.jpeg", "/item_057_03.jpeg"],
  },
  {
    id: "item_058",
    creator: "@fallin._.acby",
    creatorUrl: "https://www.threads.com/@fallin._.acby",
    types: ["手幅", "小卡"],
    title: "20/21/22 可領取｜手幅與小卡",
    postUrl:
      "https://www.threads.com/@fallin._.acby/post/DVygghuia0z?xmt=AQF0jh03hlGqtuZFnx7YFjGsSD7o_JyHAE2qxT5AFUPT3g",
    postContent: `這邊再說一次～
我應該 22 號也會去，所以 20 / 21 / 22 都能領取。

a) 只要手幅
b) 小卡 + 手幅

留言選項 + 日期
例如：a 20
謝謝～`,
    images: ["/item_058_01.jpeg"],
  },
  {
    id: "item_059",
    creator: "@k_feeeiiii0511",
    creatorUrl: "https://www.threads.com/@k_feeeiiii0511",
    types: ["其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜3/21 現場發放免費應援",
    postUrl:
      "https://www.threads.com/@k_feeeiiii0511/post/DUw-VqjD2qH?xmt=AQF0GJKarUsM7x9OaeRO4dTtXQxSFhgFk4ng7SKSjZf77Q",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR IN TAIPEI

3/21 現場發放免費應援

發送數量／應援物（如附圖）
每人隨機領取 1 張
總共準備五款各 500 張，預計共 2500 張
限定款只限 3/21 當天來找我的萬斯有機會拿到
現場人潮很多，沒有辦法指定款式

領取條件
出示演唱會門票或粉絲證明
現場有禮貌地索取
一人限領一份，不可代領
手工修邊、裝袋，要求完美者領取前請三思
如果拿到了不喜歡可以還給我，但不要丟掉

發放地點與時間
地點：台北大巨蛋外圍
時間：3/21
預計會跟其他萬斯一起舉辦小型聯應，歡迎大家來找我玩

注意事項
到時會再發一篇文即時回報所在地，歡迎想來找我領應援的朋友們追蹤起來
限定版僅 3/21 當日大巨蛋現場發送，僅當日有機會獲得。`,
    images: ["/item_059_01.jpeg"],
  },
  {
    id: "item_060",
    creator: "@yun.yun1020",
    creatorUrl: "https://www.threads.com/@yun.yun1020",
    types: ["吊飾", "其他"],
    title: "最終版應援物公開｜大頭寶寶髮夾與兔兔吊飾",
    postUrl:
      "https://www.threads.com/@yun.yun1020/post/DV0oJToCT_v?xmt=AQF03XIyt5vwzuRDEM_5wk_uFpCMijR9U203NwFqmXSvUA",
    postContent: `最終版應援物公開

大家一定都很期待下禮拜的演唱會吧，希望到時候能看到健健康康、開開心心的九兔。

大頭寶寶髮夾＆兔兔吊飾會以交換為主。
之前有登記過的朋友，如果想要更改交換內容，都可以再私訊或留言跟我說，我會幫大家調整。
其餘的一般髮夾和筆可以直接領取。

20 號我會隨機出現在大巨蛋各處，如果剛好遇到歡迎來領取應援物。
21 號、22 號會參與兩個聯合應援活動，詳細資訊可以參考上一則貼文。

領取條件
只要看得出來是 ONCE 就可以領取
不管是帶娃娃、手燈、應援物，或是穿著相關周邊都可以

希望這一點小小的心意大家都能喜歡，也很期待能和大家一起迎接這場期待已久的演唱會，一起和九兔留下最溫暖的回憶。`,
    images: [
      "/item_060_01.jpeg",
      "/item_060_02.jpeg",
      "/item_060_03.jpeg",
      "/item_060_04.jpeg",
      "/item_060_05.jpeg",
    ],
  },
  {
    id: "item_061",
    creator: "@yun_4.18",
    creatorUrl: "https://www.threads.com/@yun_4.18",
    types: ["徽章", "小卡", "貼紙"],
    title: "TWICE THIS IS FOR WORLD TOUR in TAIPEI｜應援 part 2 大頭徽章",
    postUrl:
      "https://www.threads.com/@yun_4.18/post/DVtM8comnEc?xmt=AQF0umSu4ojMxIUjH_uNpdtht1I7YYZddjMBPPxE-cE7Ww",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR in TAIPEI

應援 part 2 大頭徽章
這是上次預告的徽章，圖片是我第一次畫的 lovely，本人我非常喜歡及滿意，所以這次做成了徽章，歡迎大家找我交換及領取。

應援物介紹
25mm 徽章 9 種（娜、南顏色有點深，不介意再來）
MISAMO 光柵卡（跟 part 1 一樣）
隨機附上轉印貼紙

發放時間與地點
3/21、3/22 大概 1 點會到
3/20 少量交換
目前 22 交換比較少
我應該會到處走動

交換方法
一張光柵卡 + 任意幾款徽章（可挑選）

領取條件
光柵卡或登山扣或徽章擇 1
需要有成員泡泡 ≥ 100 天，或身上官方周邊 ≥ 3 樣
不喜歡可以還給我，不要亂丟
禁止轉售，一人限領一個。`,
    images: ["/item_061_01.jpeg", "/item_061_02.jpeg"],
  },
  {
    id: "item_062",
    creator: "@june52tw",
    creatorUrl: "https://www.threads.com/@june52tw",
    types: ["吊飾", "其他"],
    title: "TWICE THIS IS FOUR WORLD TOUR IN TAIPEI｜兔子鍵帽吊飾",
    postUrl:
      "https://www.threads.com/@june52tw/post/DVSjdlGicfV?xmt=AQF0C0fT5ETs5zgX5Ens0CPdPWJo_pbUl0V4l2pSTAfnow",
    postContent: `TWICE <THIS IS FOUR> WORLD TOUR IN TAIPEI 代友免費應援物發放

朋友 I 人，委託我代發應援物。

紗多子的兔子鍵帽吊飾
每位成員數量 25，共 75 個

發放日期：3/20
發放時間：約 15:00（可能會晚半小時）
發放位置：台北大巨蛋場外，當天會另行公佈位置
將隨機發放，請勿指定

當天因各種原因，會帶著圖中的豆腐大抱枕在場外晃，找到發放地點後會將抱枕包裝放在地上顯眼處，歡迎萬斯靠抱枕找人，也歡迎想跟抱枕合照的萬斯前來。
豆腐抱枕不會帶到大巨蛋場內，請其他萬斯放心，時間大約是 14:30-17:00 左右（時間可能會有變動）。

領取條件：
1. 身上有手燈（不論幾代）
2. 身上有任一成員 lovely

每人限領一份，不開放代領
禁止轉售
勿隨意丟棄

鍵帽可以自行拆開裝電池
型號是 CR1220

朋友第一次做應援物很擔心發不完，歡迎路過萬斯幫推幫轉發。`,
    images: ["/item_062_01.jpeg", "/item_062_02.jpeg", "/item_062_03.jpeg"],
  },
  {
    id: "item_063",
    creator: "@imani_wang",
    creatorUrl: "https://www.threads.com/@imani_wang",
    types: ["磁鐵"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜LOVELY 磁鐵應援交換",
    postUrl:
      "https://www.threads.com/@imani_wang/post/DVkTfPUj5U3?xmt=AQF0lAIXjMBDnTy0MkjOnoHM0VAO0Kz7mK-6GcKmCtLGtA",
    postContent: `TWICE〈THIS IS FOR〉WORLD TOUR IN TAIPEI

磁鐵應援交換

這次準備了 LOVELY 磁鐵應援，希望可以和 ONCE 一起交換收藏。

應援資訊
以交換應援物為主，其餘視現場情況發放
現場發放可能會請大家出示 LOVELY 周邊，想看各位的 LOVELY
可自行選擇一位成員（若該成員已登記額滿請見諒）
3/20、3/21、3/22，三天都會在現場
為考量有些 ONCE 可能不一定想要它作為磁鐵用途，故沒有將磁鐵先黏上去，再請各位自行黏貼
正反面可參考附圖，正反面皆有保護膜

交換方式
有興趣交換的 ONCE 可以先留言或私訊你的應援物
確認交換後，會登記並提供確認表單，再麻煩確認是否登記有誤
當天交換請出示帳號名稱，方便核對

注意事項
禁止轉售／代領
照片皆有浮水印，請以本帳號發布資訊為主，請大家留意避免詐騙或冒用

希望可以和大家一起應援 TWICE，一起留下美好的演唱會回憶。`,
    images: [
      "/item_063_01.jpeg",
      "/item_063_02.jpeg",
      "/item_063_03.jpeg",
      "/item_063_04.jpeg",
      "/item_063_05.jpeg",
      "/item_063_06.jpeg",
      "/item_063_07.jpeg",
      "/item_063_08.jpeg",
      "/item_063_09.jpeg",
      "/item_063_10.jpeg",
    ],
  },
  {
    id: "item_064",
    creator: "@molimoliwara",
    creatorUrl: "https://www.threads.com/@molimoliwara",
    types: ["吊飾"],
    title: "TWICE THIS IS FOR 台北場｜鍵帽鑰匙圈應援發放",
    postUrl:
      "https://www.threads.com/@molimoliwara/post/DUC0UNHkh8H?xmt=AQF0jMshs_tO6gm11-Y2Pfc-XT0E6PPNQMKjYd6hPryCLg",
    postContent: `TWICE THIS IS FOR 台北場 鍵帽鑰匙圈應援發放

大家好！這裡是森森。
TWICE 即將在台北大巨蛋舉辦三場演唱會！
這次的應援物是以 10 週年 LOVELY 為發想的鍵帽鑰匙圈，頭上頂著代表台灣的珍奶圖案。

這次除了鍵帽鑰匙圈外，也有協助辦花店應援，希望大家有空來看看。

應援資訊：
演唱會日期｜2026/03/20、03/21、03/22
應援發放地點｜當天 IG 限動發佈
發放數量｜每日 30 份（共 3 天）

領取條件｜
1. 出示本篇貼文（手機出示或截圖皆可）
2. 持當日演唱會門票

花店應援｜
@once.spark_twice.bloom`,
    images: ["/item_064_01.jpeg"],
  },
  {
    id: "item_065",
    creator: "@ty_07777",
    creatorUrl: "https://www.threads.com/@ty_07777",
    types: ["票夾"],
    title: "TWICE THIS IS FOR WORLD TOUR｜Ticket Holder",
    postUrl:
      "https://www.threads.com/@ty_07777/post/DV2P9zIEumg?xmt=AQF0btYEBSwu6M9K4H1rBvGbKZo0QwsxnPXWW7PgC0pbCg",
    postContent: `Ticket Holder｜TWICE <THIS IS FOR> WORLD TOUR

這邊是 kk！
這次 TWICE 世巡台北場時，因為我目前正在準備大學個申的事情有點忙碌，不太方便到場，希望還是有機會能辦個簡單一點的應援，所以設計了幾個票夾給有需要的 ONCE 印製使用。

選了 This is For MV 中的造型，九個人都有各別設計。
如果個性很 I 的 ONCE 也可以把票夾露出來讓別的 ONCE 跟你認親。

預覽圖的打叉線條與帳號為浮水印，實際印出來不會顯示。
留言區有印製的 QR Code，期限一到就會重新留言新的 QR Code。
持續到演唱會結束的下週日（3/29），除非後續有人提還沒印到，不然不會繼續上傳新 QR Code。

最後希望每個 ONCE 都能留下美好回憶！
再說一次，自己有去的那場就是最棒的，不要互相比較互相攻擊，都要用滿溢幸福的笑容走出大巨蛋。`,
    images: [
      "/item_065_01.jpeg",
      "/item_065_02.jpeg",
      "/item_065_03.jpeg",
      "/item_065_04.jpeg",
      "/item_065_05.jpeg",
      "/item_065_06.jpeg",
      "/item_065_07.jpeg",
      "/item_065_08.jpeg",
      "/item_065_09.jpeg",
      "/item_065_10.jpeg",
    ],
  },
  {
    id: "item_066",
    creator: "@_8merxf",
    creatorUrl: "https://www.threads.com/@_8merxf",
    types: ["鑰匙圈", "票夾", "貼紙"],
    title: "TWICE THIS IS FOR IN TAIPEI｜鍵帽鑰匙圈與演唱會票卡",
    postUrl:
      "https://www.threads.com/@_8merxf/post/DVSwylckclD?xmt=AQF0znOb0wotneoSysRWt-eQC7idVzN7OAgAtcrtI_jflQ",
    postContent: `TWICE THIS IS FOR IN TAIPEI

發放內容：
1. 鍵帽鑰匙圈 100 個
2. 演唱會票卡 2 款 220 張
隱藏款轉印貼 100 張

鍵帽鑰匙圈十款，共 100 顆
① LOVELY 款，每隻啦不理各做 10 顆
② TWICE LOGO 款 10 顆

演唱會票卡兩款，每款各 110 張

發放日期與時間：
3/21
確切時間當天會再公告

領取方式：
鑰匙圈會讓大家使用抽取的方式。
若不是抽到自擔可以跟我猜拳，猜贏了就可以選自己喜歡的，若猜輸了就不好意思了。

領取條件：
追蹤 @_8merxf
且需有相關周邊，例如泡泡、手燈、演唱會門票、啦不理等等。
不可拿其他創作者的周邊當作領取條件。

注意事項：
領取轉印貼需要在領取應援的時候跟我說，沒有提到的話是不會拿出來的。

交換的部分過段時間會整理出來，還有想要交換的都可以留言或私訊給我，到時候會把餘量公布出來。
希望大家都能把應援物領完，也希望大家可以幫我多多宣傳。`,
    images: ["/item_066_01.jpeg", "/item_066_02.jpeg", "/item_066_03.jpeg"],
  },
  {
    id: "item_067",
    creator: "@820sjrrk",
    creatorUrl: "https://www.threads.com/@820sjrrk",
    types: ["鑰匙圈", "其他"],
    title: "TWICE THIS IS FOR 臺北場｜手機支架、PP夾、壓克力鑰匙圈",
    postUrl:
      "https://www.threads.com/@820sjrrk/post/DVi1Bk8E6D8?xmt=AQF0SckRipXxQl4l_kyQV3ouUru3YLv6W_jwXVWsxy97rA",
    postContent: `TWICE <THIS IS FOR> 臺北場倒數中

更新我的應援物啦～
這次我的手機支架會先以交換為主，然後也會留幾個演唱會當天到處遊走隨機發放。
但我也還有其他可愛到爆的應援物可以發放。

我準備的應援小物為：
1. LOVELY 磁吸滴膠手機支架（有十種款式，會先以交換為主，也會留幾個隨機發放）
2. LOVELY PP夾（有十種款式）
3. LOVELY 壓克力鑰匙圈（有四種款式）

壓克力片都有一層膜，我沒有撕掉，所以拿到手後您可以斟酌要不要把膜撕掉。
但是 PP 夾的膜我有先撕掉了，因為廠商製作時搞錯正反面，所以我有全部重組，就先把膜撕掉了，所以會有一點點刮痕，但不影響外觀。
手機支架有另外付鐵圈，沒辦法磁吸的手機，可以把鐵圈貼在手機後就可以使用手機支架了。

發放資訊
日期：三天都會去
地點：會在巨蛋附近晃晃，或是到時再看看停在哪個定點，歡迎跟我聯合，我蠻 I 的，希望有伴一起發放
數量：每人只能選一個應援物領取，請勿代領。`,
    images: [
      "/item_067_01.jpeg",
      "/item_067_02.jpeg",
      "/item_067_03.jpeg",
      "/item_067_04.jpeg",
      "/item_067_05.jpeg",
    ],
  },
  {
    id: "item_068",
    creator: "@luojia_0425",
    creatorUrl: "https://www.threads.com/@luojia_0425",
    types: ["其他"],
    title: "THIS IS FOR WORLD TOUR IN TAIPEI｜票根應援",
    postUrl:
      "https://www.threads.com/@luojia_0425/post/DV1RLO9k09i?xmt=AQF0e5MuxB0Hgf4bD4drY73HSSv-g0ilTLsVuoLWIPgYnQ",
    postContent: `THIS IS FOR WORLD TOUR IN TAIPEI

嗨大家好！
台北場倒數 6 天，我又來發應援啦。
上次高雄場有發過，也謝謝大家的捧場，這次製作的是票根，希望大家也會喜歡。

實體圖可能會比我現在拍的還要模糊一點，請大家見諒。
然後我們發現彩不理跟咪不理的痣不見了，如果真的會介意的，看到實體不想拿也沒關係，但拜託各位拿到不要丟掉或跟其他人交換，真心會很難過。

以下是發放時間跟條件：
發放時間：3/20（五）預計 2、3 點抵達現場
發放數量：南瑜各 50 張，團體 100 張，背面圖都是一樣的
發放條件：看得出來是萬斯就可以

這次採佛系交換，因為上次高雄場交換把自己搞得頭昏腦脹，這次台北場想輕鬆一點。
希望各位萬斯都來找我拿，讓我把應援發光光。`,
    images: ["/item_068_01.jpeg", "/item_068_02.jpeg"],
  },
  {
    id: "item_069",
    creator: "@jiawei__0416",
    creatorUrl: "https://www.threads.com/@jiawei__0416",
    types: ["其他"],
    title: "THIS IS FOR WORLD TOUR in TAIPEI｜燙金明信片",
    postUrl:
      "https://www.threads.com/@jiawei__0416/post/DVkidv8Elor?xmt=AQF0ZleXO9OiUIBbgHCy2OFLN5VdQyWiCeUh7Ps_nE7_WA",
    postContent: `<THIS IS FOR> WORLD TOUR in TAIPEI

大家好這裡是 WEI，這次也是免費應援發放。
演唱會應援我一樣準備了燙金明信片，這次的內容是電影中成員們的造型跟飼養的寵物，還有上次大受好評的團體明信片。

這次 3 天會進行發放：
20 號 250 張
21 號 250 張
22 號 500 張

這次每個成員裡面都有各 1 樣官方小禮物，我會給我覺得適合的 ONCE（末場限定）。

領取時間：會提前發文告知
領取地點：當天公佈
領取資格：周邊、泡泡（其中一樣）
禁止出售以及商業用途。`,
    images: [
      "/item_069_01.jpeg",
      "/item_069_02.jpeg",
      "/item_069_03.jpeg",
      "/item_069_04.jpeg",
      "/item_069_05.jpeg",
      "/item_069_06.jpeg",
      "/item_069_07.jpeg",
      "/item_069_08.jpeg",
      "/item_069_09.jpeg",
      "/item_069_10.jpeg",
    ],
  },
  {
    id: "item_070",
    creator: "@clovercro",
    creatorUrl: "https://www.threads.com/@clovercro",
    types: ["吊飾", "鏡子", "貼紙", "其他"],
    title: "TWICE THIS IS FOR 台北場｜線下／線上應援物",
    postUrl:
      "https://www.threads.com/@clovercro/post/DVGH0HbE1QL?xmt=AQF0IXE0oztGttfKdbAvba3PL33YVlnPDQw3qSG4ZUWFiQ",
    postContent: `TWICE THIS IS FOR 台北場線下／線上應援物

今年手繪了新的呆呆拉布里，這次想要以交換為主，所以免費發放的量會比較少一點。

夏日項鍊
這次嘗試了不一樣的風格，夏天快到了所以設計了鮮豔的配色，還有呆萌拉布里掛飾。
線下發放兩組（18 條）
線上也有

鏡子吊飾
收到打樣之後自己真的是超級超級喜歡，是壓克力吊飾，滑蓋打開後就是隨身小鏡子。
線下發放 20 個
線上也有

轉印貼紙
純粹是我想要做到處貼，這次是用呆呆拉布里去做的，跟上次的不同款。
線下發放 50 張
線上也有

發放日：3/21（時間地點待公布）
可交換日：3/20-3/21

應援物都準備了一些數量來跟也有做應援的萬斯朋友們交換，有興趣的可以在底下留言，我也有興趣的話會去私訊你。`,
    images: [
      "/item_070_01.jpeg",
      "/item_070_02.jpeg",
      "/item_070_03.jpeg",
      "/item_070_04.jpeg",
    ],
  },
  {
    id: "item_071",
    creator: "@chanyzhu",
    creatorUrl: "https://www.threads.com/@chanyzhu",
    types: ["其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜方巾與帆布袋",
    postUrl:
      "https://www.threads.com/@chanyzhu/post/DV5ONOhASTN?xmt=AQF0J-zv22sByLQ-MmpyS1wBpSyc8x60xWnXGY1sx60uMA",
    postContent: `TWICE＜THIS IS FOR＞WORLD TOUR IN TAIPEI 免費應援發放

應援物：
方巾
紗瑜粉看過來
日期：主要 3/21，餘量則會在 3/22 發放
領取條件：出示此篇貼文（可截圖）+ 門票 + 手燈 / 任一周邊
數量不多，無法挑選成員請見諒

帆布袋
限交換，應援交換都會保留到 22 號入場前，沒交換到會現場發放
領取條件：出示此篇貼文 + 泡泡

請勿轉售、販賣、隨意丟棄
20 號也會待在場外，先前有交換可以約 20 號。`,
    images: [
      "/item_071_01.jpeg",
      "/item_071_02.jpeg",
      "/item_071_03.jpeg",
      "/item_071_04.jpeg",
    ],
  },
  {
    id: "item_072",
    creator: "@jns_tz",
    creatorUrl: "https://www.threads.com/@jns_tz",
    types: ["其他", "小卡"],
    title: "TWICE THIS IS FOR 台北場應援成品｜Lovely編織娃娃與小卡卡套",
    postUrl:
      "https://www.threads.com/@jns_tz/post/DVgBdj2knzO?xmt=AQF0oywCuGELo57yx2WDeTBajx6d2ONi1shNi4NF-oLkbA",
    postContent: `TWICE台北場倒數15天，小編來發放應援啦！
TWICE THIS IS FOR 台北場應援成品

3/21、3/22 將在台北大巨蛋發放（3/20 沒有發放）

應援物內容：
手工 Lovely 編織娃娃 13 個
限量小卡卡套 2 個
以上為一天的發放數量，共兩天

因上次很多粉絲都想要娃娃，這次分別新增 Navely、Savely 各二隻，Tzuvely 一天各三隻。

領取應援條件及說明：
追蹤此帳號 IG 以及 Threads
無論有沒有票都可以領取
Lovely 娃娃 / 小卡卡套只能二選一

發放時間：
3/21、3/22 預計 13:00 開始發放，發放完畢
會依現場狀況調整

發放地點：
台北大巨蛋外面
實際位置會再公告於 IG

數量有限，先到先得，沒辦法保留。
期待有緣 ONCE 來領取。`,
    images: [
      "/item_072_01.jpeg",
      "/item_072_02.jpeg",
      "/item_072_03.jpeg",
      "/item_072_04.jpeg",
    ],
  },
  {
    id: "item_073",
    creator: "@ybear.l",
    creatorUrl: "https://www.threads.com/@ybear.l",
    types: ["鑰匙圈"],
    title: "TWICE THIS IF FOR WORLD TOUR IN TAIPEI｜九兔愛心金屬鑰匙圈",
    postUrl:
      "https://www.threads.com/@ybear.l/post/DVoF2oRCZV6?xmt=AQF0fJsOe_eDZGDOswTTTaKZwkvtEyzDil1HxSxEWxpDDA",
    postContent: `TWICE <THIS IF FOR> WORLD TOUR IN TAIPEI 免費應援物發放
九兔愛心金屬鑰匙圈

和 @feiyangz.l 一起做的應援，是雙面的鑰匙圈。
正面統一是 This is for 蛋糕圖案，背面是各成員。
另外因為 MISAMO 太可愛，所以加碼了隱藏三兔合體款。

發放資訊：
日期：3/21、3/22
地點：大巨蛋場外
數量：每日 50 個，共 100 個
詳細時間地點穿著會於當天或前一天公布

領取條件：
出示粉絲證明（泡泡、LOVELY 等等）

注意事項：
每人限領一份，不可代領
21 號我們會去聽彩排，不確定是否會一直待在場外，也許沒發完進 VIP 區繼續發
也歡迎交換，可以在底下留言。`,
    images: [
      "/item_073_01.jpeg",
      "/item_073_02.jpeg",
      "/item_073_03.jpeg",
      "/item_073_04.jpeg",
      "/item_073_05.jpeg",
      "/item_073_06.jpeg",
      "/item_073_07.jpeg",
      "/item_073_08.jpeg",
      "/item_073_09.jpeg",
      "/item_073_10.jpeg",
      "/item_073_11.jpeg",
      "/item_073_12.jpeg",
      "/item_073_13.jpeg",
      "/item_073_14.jpeg",
    ],
  },
  {
    id: "item_074",
    creator: "@gina_g914",
    creatorUrl: "https://www.threads.com/@gina_g914",
    types: ["其他"],
    title: "TWICE THIS IS FOR WORLD TOUR in TAIPEI｜應援信用卡",
    postUrl:
      "https://www.threads.com/@gina_g914/post/DVns2nSEXQw?xmt=AQF0KOcK9kT-EyWM0XIrilrinubAXnfG-vTrOSKWU3GLmA",
    postContent: `TWICE | THIS IS FOR / WORLD TOUR in TAIPEI 台北場應援

大家好，我是 Gina。
這次和朋友們一起設計了應援信用卡，會在場外發放，歡迎各位來領取或交換。

發放日期：
3/21、3/22
詳細地點、時間、穿搭會於當天公布在留言區

數量：
共 4 款
娜璉款 200 份
Mina 款 200 份
多賢款 200 份
團體款 300 份

應援內容：
信用卡，雙面霧面，尺寸約 8.5cm x 5.4cm

注意事項：
每人限領一份
請勿轉售、隨意丟棄、代領、不禮貌

領取條件：
任意官方周邊、其他粉絲證明
如果是以門票、手燈、追蹤成員 IG 當證明，要另外出示此篇貼文。

喜歡的話歡迎各位幫我分享。
部分印刷可能會有些許瑕疵，請大家見諒。`,
    images: [
      "/item_074_01.jpeg",
      "/item_074_02.jpeg",
      "/item_074_03.jpeg",
      "/item_074_04.jpeg",
      "/item_074_05.jpeg",
      "/item_074_06.jpeg",
      "/item_074_07.jpeg",
    ],
  },
  {
    id: "item_075",
    creator: "@y1xin9._",
    creatorUrl: "https://www.threads.com/@y1xin9._",
    types: ["徽章"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜徽章應援",
    postUrl:
      "https://www.threads.com/@y1xin9._/post/DVXyW15EhHY?xmt=AQF0Jd6gZYNl0mRzkwYmzlbXJE0JjSPEtUXbLmQ2WvsSUA",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR IN TAIPEI 台北場免費應援發放

為了這次台北場準備了徽章應援，這裡先放個預覽圖給大家參考，等實體出來再放在留言區。
希望先以交換為主，有興趣的朋友歡迎留言或私訊，餘量將會在場外發放。

發放日期：3/22
詳細地點、時間、穿搭當天會公布在留言區

應援內容：
胸章，尺寸 5.8 cm

數量：
9 款各 5 份，共 45 份

注意事項：
每人限領一份
禁止代領
請勿轉售、丟棄
每顆都是我精心設計的寶寶，希望大家可以溫柔對待、珍惜

領取條件：
出示本篇貼文、任意官方周邊、門票、手燈等。`,
    images: [
      "/item_075_01.jpeg",
      "/item_075_02.jpeg",
      "/item_075_03.jpeg",
      "/item_075_04.jpeg",
      "/item_075_05.jpeg",
      "/item_075_06.jpeg",
      "/item_075_07.jpeg",
      "/item_075_08.jpeg",
      "/item_075_09.jpeg",
    ],
  },
  {
    id: "item_076",
    creator: "@shu_____b",
    creatorUrl: "https://www.threads.com/@shu_____b",
    types: ["其他", "徽章"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜密碼鎖筆記本與徽章",
    postUrl:
      "https://www.threads.com/@shu_____b/post/DUBLuqjksag?xmt=AQF0ZJtUWAJ_M-xW5oT0-rVQuwEIwydWcfZWvFyrUBzzKg",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR IN TAIPEI

大家好我又來了！
這次做了一個超暴露年紀的應援物。

平井桃密碼鎖筆記本

高雄場結束後就在絞盡腦汁不停地想，終於想到滿意的應援，也很高興順利產出。
筆記本以交換為主，預計有 20 本名額。
因為成本比較高，會稍微選一下自己比較喜歡的應援。

我也把去年的嗨啾包裝稍微修改後做成徽章了，歡迎大家來找我領取交換。
領取方式：交換應援 / 出示此篇文章 / 出示正版周邊，只要能證明你是粉絲的任何方法都可以。

我 3/21、3/22 兩天都會到現場發放，徽章一天預估 20～30 個。
時間、地點、穿著當天會再公布，也歡迎大家在半路攔截我。`,
    images: ["/item_076_01.jpeg", "/item_076_02.jpeg"],
  },
  {
    id: "item_077",
    creator: "@tttion_yu",
    creatorUrl: "https://www.threads.com/@tttion_yu",
    types: ["手幅", "小卡", "其他", "貼紙", "磁鐵"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜應援資訊統整",
    postUrl:
      "https://www.threads.com/@tttion_yu/post/DUiGAfWksTn?xmt=AQF0BEtttdG-pvv33mdtG6zoJ9u1v1ynZpODltxCUHk6Zw",
    postContent: `TWICE＜THIS IS FOR＞WORLD TOUR IN TAIPEI 3/20、21、22 應援發放公告

這篇統整所有應援資訊。
這次會有聯合應援，主要發放會是 3/21、3/22，3/20 主要交換，少量免費應援。

免費應援
1. 臉桃便簽夾，21、22 共 200 個
2. 雙面銅版紙手幅，21、22 共 400 份
3. 台北場油漆風方卡，20、21、22 共 500 張
4. 底片小卡（餘量），20、21、22 共 200 張
來找我出示這篇文章，可以抽交換應援 1 份 + 應援貼紙 1 張

交換應援
1. 鯛魚燒子瑜，共 80 個
2. 鯛魚燒 SANA，共 80 個
3. 鯛魚燒臉南（高雄場餘少量）
4. 聖誕快樂子瑜，共 60 個
5. 草莓果醬彩瑛，共 60 個
6. 音樂關掉子瑜冰箱貼，共 60 個

交換可選任一喜歡應援，基本上一份換一份。
每份交換應援會加拍立得小卡與貼紙。`,
    images: [
      "/item_077_01.jpeg",
      "/item_077_02.jpeg",
      "/item_077_03.jpeg",
      "/item_077_04.jpeg",
      "/item_077_05.jpeg",
    ],
  },
  {
    id: "item_078",
    creator: "@iifetsky_",
    creatorUrl: "https://www.threads.com/@iifetsky_",
    types: ["其他", "票夾", "吊飾", "貼紙", "徽章"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜免費應援小物",
    postUrl:
      "https://www.threads.com/@iifetsky_/post/DUstR0Ok34O?xmt=AQF0haZWbbCoTzz-bQSx_K1xE8JKaN_aQ3FtOSVfMA4wYw",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR IN TAIPEI 台北場免費應援小物來啦

應援內容：
1. 迷你拉霸機（50 份）
2. 五期會員磁帶盒（50 份）
內容物包含磁帶盒本體、隨機小卡 3 張、壓克力吊飾、郵票貼紙 2 張、徽章
有普通版跟少量 NFC 版，隨機發放
3. 硬卡套票夾（20 份）

發放日期：
3/21、3/22
時間地點到時候會再公布

領取條件：
擁有任意周邊或門票，只要能證明是粉絲即可
加上出示本篇文章

注意事項：
免費領取每人僅能選擇一項小物領取，且不能代領
交換的話可私下討論
不能轉售
這次應援製作成本較高，所以交換的部分可能會小小選一下自己比較喜歡的應援進行交換。`,
    images: [
      "/item_078_01.jpeg",
      "/item_078_02.jpeg",
      "/item_078_03.jpeg",
      "/item_078_04.jpeg",
      "/item_078_05.jpeg",
    ],
  },
  {
    id: "item_079",
    creator: "@fang_4_7",
    creatorUrl: "https://www.threads.com/@fang_4_7",
    types: ["吊飾"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜便當盒吊飾",
    postUrl:
      "https://www.threads.com/@fang_4_7/post/DT-kO2dEjpd?xmt=AQF0JNjbz2PZG_0_8pryvVnuFjVvPHKwJInpFDqPgEiBvg",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR IN TAIPEI

03/21、22 免費應援物

應援物資訊：
便當盒吊飾（共 10 款）× 120，分兩天發放

領取方式：
持有 TWICE 周邊、手燈、演唱會門票，只要能證明你是 ONCE

交換請在留言區附上您的應援物照片
款式隨機抽取

發放日：
03/21、22
服裝及時間地點當天公布

注意事項：
不做任何退換
因為是純手工所以有些地方有點瑕疵是正常的
每人限領一次
禁轉賣
禁代領
希望大家不要丟掉。`,
    images: ["/item_079_01.jpeg", "/item_079_02.jpeg"],
  },
  {
    id: "item_080",
    creator: "@__isrtw_",
    creatorUrl: "https://www.threads.com/@__isrtw_",
    types: ["貼紙", "其他"],
    title: "TWICE THIS IS FOR WORLD TOUR｜水晶轉印貼與手機氣囊磁吸支架",
    postUrl:
      "https://www.threads.com/@__isrtw_/post/DUTJp9fEUTI?xmt=AQF0VnR7g0huaKymS_RCW4BIHU5zTiPNBr9W8gz4Velp8w",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR 3/21、22 免費應援發放

1. 水晶轉印貼，共 26 份，兩天各發 13 份
領取條件：持有當日演唱會門票 + 手燈

2. Movely 手機氣囊磁吸支架（另外附引磁片），共 8 份，兩天各發 4 份
領取條件：
持有當日演唱會門票 + 手燈
另外身上穿著讓我明顯看出你就是桃擔
或持有 Momo bubble 2 年以上

注意事項：
每人限領一份
不可代領或販售
若 3/21 未發完當日的量，則會轉到 3/22 繼續發放

我本人兩天都會看彩排，所以發放時間地點會比較隨機一點，會時時公告於社群內。
如果也是會看彩排的人，到時候會開放彩排入場到彩排開始前在場內領取。`,
    images: ["/item_080_01.jpeg", "/item_080_02.jpeg"],
  },
  {
    id: "item_081",
    creator: "@on.ce4ever_",
    creatorUrl: "https://www.threads.com/@on.ce4ever_",
    types: ["吊飾", "貼紙", "徽章"],
    title: "TWICE THIS IS FOR WORLD TOUR in TAIPEI｜免費應援物發放",
    postUrl:
      "https://www.threads.com/@on.ce4ever_/post/DTegZ6uEpAO?xmt=AQF0sjF7BZ_c8vkGNM1hIvkBkYXtXqyPcxa80NSnlIX6bA",
    postContent: `TWICE <THIS IS FOR> WORLD TOUR in TAIPEI 免費應援物發放

上次高雄場沒來得及做應援，所以這次提早把應援物生出來了，歡迎大家找我領取。

應援物介紹：
發光鍵帽吊飾（9 隨 1）
證件照吊飾（9 隨 1）
切膜貼紙
盲袋徽章（9 隨 1）

set 內容物：
鍵帽吊飾 set：鍵帽吊飾 1 / 證件照吊飾 1 / 切膜貼紙 1 / 盲袋徽章 1
其他 set：證件照吊飾 1 / 切膜貼紙 1 / 盲袋徽章 1

發放時間與地點：
3/20-3/22 下午時段
台北大巨蛋場外
確切時間三月中會公布，當天會公布位置

領取條件：
鍵帽 set 需要有成員 bubble ≥ 100 天，可挑選成員
其他 set 僅需持有門票或任意粉絲證明

注意事項：
一人限領一份
不接受代領
請勿隨意丟棄
數量有限，發完為止。`,
    images: ["/item_081_01.jpeg", "/item_081_02.jpeg", "/item_081_03.jpeg"],
  },
  
  {
    id: "item_090",
    creator: "@__.ixytan",
    creatorUrl: "https://www.threads.com/@__.ixytan",
    types: ["其他"],
    title: "TWICE IN TAIPEI｜應援發放",
    postUrl:
      "https://www.threads.com/@__.ixytan/post/DV3sq8zjx74?xmt=AQF0KBbv_i9rgnWJ7E3pJVUssJ_BKhQfVXP3dXgAuScTQQ",
    postContent: `TWICE IN TAIPEI

終於等到九兔來台北了！真的非常期待。
第一次做應援，有不好的地方請見諒。

領取條件：
拿出門票 / 手燈 / 其他粉絲證明
一人拿一個成員，可以挑，但是發完為止
也可以交換，想看看其他 ONCE 的作品

我不是詐騙，到時候再公開穿搭還有位子。
三場都會到，但不會太早。`,
    images: ["/item_090_01.jpeg"],
  },
  {
    id: "item_091",
    creator: "@xiaoyuan0522",
    creatorUrl: "https://www.threads.com/@xiaoyuan0522",
    types: ["其他", "小卡"],
    title: "this is for 臺北場｜藥袋應援",
    postUrl:
      "https://www.threads.com/@xiaoyuan0522/post/DVlVU_gkQeT?xmt=AQF0_WxsTATv17AcC3ycO716vyJ5cJgkh1Va9USx-Xz1VA",
    postContent: `this is for 臺北場

藥袋應援成品來啦！
這次設計臺灣藥袋風格的手提袋，歡迎大家領取，隨機放入日週巡演套卡隨機一張。

每人一個。

發放日期：
2025/03/20、03/22
預計 14:30 發放

領取資格：
當天會有簡單隨機考題，答對才能領取
也開放大家跟我交換

注意事項：
禁止隨意丟棄
禁止轉賣 / 轉送
禁止翻印
禁止多次領取

精確時間、地點、衣著將在當日公布。`,
    images: ["/item_091_01.jpeg"],
  },
  {
    id: "item_092",
    creator: "@twice.sparkle_",
    creatorUrl: "https://www.threads.com/@twice.sparkle_",
    types: ["其他"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜VIP PASS 紀念吊牌",
    postUrl:
      "https://www.threads.com/@twice.sparkle_/post/DVdr8D0Ep_I?xmt=AQF0_i_ysHAiEnkyO5uLWTETmwNXXdVgjSFuBSuhbFNe4Q",
    postContent: `TWICE “THIS IS FOR” WORLD TOUR IN TAIPEI

VIP PASS
在哪區都有的 VIP 紀念吊牌！

領取方式：
只要有門票都可以領取

應援發放中有 22 號。`,
    images: ["/item_092_01.jpeg"],
  },
  {
    id: "item_093",
    creator: "@lost_way.0419",
    creatorUrl: "https://www.threads.com/@lost_way.0419",
    types: ["吊飾", "鏡子"],
    title: "TWICE THIS IS FOR in Taipei｜壓克力透鏡吊飾",
    postUrl:
      "https://www.threads.com/@lost_way.0419/post/DUVr712DrNB?xmt=AQF0lgGLawipuNf5wBNZQ7BCFxaVWowL3YJtP_ptGGqtLA",
    postContent: `TWICE <THIS IS FOR> in Taipei
2026.03.20~03.22 台北場應援

嗨大家～我是 Sandia！
第一次做應援：「壓克力透鏡」
希望大家會喜歡！

應援內容：
壓克力透鏡吊飾（圓形 6cm）
透鏡正面為鏡子；強烈光照下可顯出志效圖樣

發放日期：
3/20、3/21、3/22
地點、穿搭當天會公布在留言區置頂
數量：95 份；以交換為主、餘量現場領取
歡迎留言與私訊互換

注意事項：
每人限領 1 份
禁止轉售
禁止丟棄
禁止代領

領取條件：
任意官方周邊、Bubble 訂閱
若是以手燈、門票、社群媒體追蹤作為條件，需額外出示此貼文。`,
    images: [
      "/item_093_01.jpeg",
      "/item_093_02.jpeg",
      "/item_093_03.jpeg",
      "/item_093_04.jpeg",
    ],
  },
  {
    id: "item_094",
    creator: "@syu_ki_1025",
    creatorUrl: "https://www.threads.com/@syu_ki_1025",
    types: ["小卡"],
    title: "TWICE 台北場｜寶可夢款與遊戲王款小卡",
    postUrl:
      "https://www.threads.com/@syu_ki_1025/post/DVBLiZaEc_8?xmt=AQF0pTNG5xTLG6jJxvTmeTZ4L7m_LIkQ40UmJ8ED600wDw",
    postContent: `TWICE

這邊是清晰圖～
第一次發應援，好緊張。
台北場始まるよ，歡迎萬斯來找我領。

發放地點：
當天會公布在限動，有興趣可以先追蹤

領取方法：
小卡只抽，不選成員，一人一張

領取條件：
寶可夢款：身上最少要有一件官方周邊
遊戲王款：有訂閱泡泡限定，款式也可三選一

總共有 3 款卡面：
寶可夢：DIVE 款、TIF 款（各 100 張）
遊戲王：TTT 款（100 張）

總共有 900 份，一天 300 張，發完為止。
由於這次太趕，來不及按照原尺寸製作，所以全部都是一般小卡 size。`,
    images: ["/item_094_01.jpeg", "/item_094_02.jpeg", "/item_094_03.jpeg"],
  },
  {
    id: "item_095",
    creator: "@twinkle2_litosta",
    creatorUrl: "https://www.threads.com/@twinkle2_litosta",
    types: ["鏡子"],
    title: "TWICE 應援預告｜盲包鏡子",
    postUrl:
      "https://www.threads.com/@twinkle2_litosta/post/DVsEpYUEp7A?xmt=AQF035iw1fMGu_uN6Y3HoylG4GMppgE4XiRvrfvqRxFeMw",
    postContent: `藏不住了，先發個預告，整理好再發個正式的！
這次應援是盲包鏡子。`,
    images: ["/item_095_01.jpeg", "/item_095_02.jpeg"],
  },
  {
    id: "item_096",
    creator: "@_yh217_",
    creatorUrl: "https://www.threads.com/@_yh217_",
    types: ["貼紙"],
    title: "台北場應援｜紋身貼紙",
    postUrl:
      "https://www.threads.com/@_yh217_/post/DVlyDNREzjt?xmt=AQF0ee8s8Ov70WfmmT_mySvdthRglXk7ZZletZlWoCzpLA",
    postContent: `應援小物：
台北場只做了紋身貼紙，不過還是歡迎各位跟我拿。

服裝：
我會鼓起勇氣穿 POP! 這套，應該很好找。
只是在場外拍拍照，演唱會進場會穿正常一點不會擾人。

這次就不放在地上任人拿取，畢竟也花了心思做、剪、付錢。

至於應援小抄，我 22 那週會發 ibon 的！`,
    images: ["/item_096_01.jpeg", "/item_096_02.jpeg", "/item_096_03.jpeg"],
  },
  {
    id: "item_097",
    creator: "@r22510",
    creatorUrl: "https://www.threads.com/@r22510",
    types: ["吊飾"],
    title: "Twice This is for World Tour in Taipei｜迷你卡帶吊飾",
    postUrl:
      "https://www.threads.com/@r22510/post/DTnxR3-k1p8?xmt=AQF0mcj2eJ96lOkUd4Lxci1EhSbrGylvqt7N4ry3msIMlQ",
    postContent: `Twice <This is for> World Tour in Taipei

迷你卡帶吊飾應援發放

應援物資訊：
SWITCH 迷你卡帶吊飾
共 10 款樣式，團體 1 款 + 成員 9 款

領取條件：
需出示粉絲證明（訂閱成員泡泡或官方周邊 & Lovely）
想交換的 ONCE 請留言並附上應援物照片

領取時間與地點：
3/21、3/22 台北大巨蛋
3/20 僅開放交換
暫定每日各準備 50 個（每款各 5）
確切時間會於 Threads 發佈

注意事項：
每人限領 1
禁止轉賣、丟棄、代領
吊飾實品可能發生色差及小瑕疵狀況。`,
    images: [
      "/item_097_01.jpeg",
      "/item_097_02.jpeg",
      "/item_097_03.jpeg",
      "/item_097_04.jpeg",
      "/item_097_05.jpeg",
      "/item_097_06.jpeg",
      "/item_097_07.jpeg",
      "/item_097_08.jpeg",
      "/item_097_09.jpeg",
      "/item_097_10.jpeg",
    ],
  },
  {
    id: "item_098",
    creator: "@ek.n_7",
    creatorUrl: "https://www.threads.com/@ek.n_7",
    types: ["徽章"],
    title: "TIME TO TWICE : CONCERT｜金屬徽章",
    postUrl:
      "https://www.threads.com/@ek.n_7/post/DV0HH7iE5b3?xmt=AQF0HDnorNM5UjMnNarvMzbnKm-2Jzksk2lmS7FRKxJOFA",
    postContent: `TIME TO TWICE : CONCERT !!!

TWICE 台北大巨蛋 3/22 應援！
做了金屬徽章，融合了團綜的 logo 和手燈圖樣，希望大家可以別著這個徽章去看演唱會。

領取條件：
出示任一官方周邊 + 這篇貼文（貼文用截圖也可以）

領取地點：
不知道欸，我會隨便走，當天會公布穿搭可以來找我。`,
    images: ["/item_098_01.jpeg", "/item_098_02.jpeg", "/item_098_03.jpeg"],
  },
  {
    id: "item_099",
    creator: "@kk3rxii",
    creatorUrl: "https://www.threads.com/@kk3rxii",
    types: ["撕拉片"],
    title: "TWICE THIS IS FOR WORLD TOUR IN TAIPEI｜撕拉片",
    postUrl:
      "https://www.threads.com/@kk3rxii/post/DV0Wmwyidh5?xmt=AQF0HAwNpQDaccLRnOiF3ZDQEeIaRpg02DPVDwyz9GNFtw",
    postContent: `TWICE＜THIS IS FOR＞WORLD TOUR IN TAIPEI

3/22 會在場外發放應援

內容物：
撕拉片
上次來不及抵達，這次剛好可以帶上去台北場。
只要有看到我的 ONCE 寶寶都可以來領。

發放時間和地點：
當天會公布，請大家多多注意。

注意事項：
一人限領取一份
數量有限，照片是隨機的
禁止轉售。`,
    images: ["/item_099_01.jpeg", "/item_099_02.jpeg"],
  },
];
