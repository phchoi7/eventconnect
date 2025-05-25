/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap-v5/lib/esm/Card";
import { Button } from "react-bootstrap-v5";
import "./QuickStart.css";

type Level = "normal" | "hard";

const QUESTIONS = {
  normal: [
    {
      question: "我們第一次約會的地點是？",
      options: ["咖啡廳", "公園", "電影院"],
      answer: "咖啡廳",
    },
    {
      question: "情人節是哪一天？",
      options: ["2月14日", "12月25日", "7月7日"],
      answer: "2月14日",
    },
    {
      question: "我最喜歡的顏色是？",
      options: ["紅色", "藍色", "黑色"],
      answer: "藍色",
    },
    {
      question: "我們第一次牽手是在什麼場合？",
      options: ["看電影", "散步", "吃晚餐"],
      answer: "看電影",
    },
    {
      question: "以下哪個是愛情的象徵？",
      options: ["玫瑰花", "仙人掌", "向日葵"],
      answer: "玫瑰花",
    },
    {
      question: "哪個動物象徵忠誠？",
      options: ["狗", "貓", "兔子"],
      answer: "狗",
    },
    {
      question: "以下哪種花代表“永恆的愛”？",
      options: ["薰衣草", "百合", "紅玫瑰"],
      answer: "紅玫瑰",
    },
    {
      question: "哪一首歌最能代表我們的浪漫愛情？",
      options: [
        "Perfect - Ed Sheeran",
        "Six Degrees - 周杰倫",
        "告白氣球 - 周杰倫",
      ],
      answer: "Six Degrees - 周杰倫",
    },
    {
      question: "我最喜歡的甜點是？",
      options: ["巧克力蛋糕", "草莓慕斯", "芒果布丁"],
      answer: "巧克力蛋糕",
    },
    {
      question: "我們第一次旅行的地點是？",
      options: ["日本", "泰國", "韓國"],
      answer: "日本",
    },
    {
      question: "我最喜歡的足球隊是哪支？",
      options: ["曼聯", "巴塞隆拿", "車路士"],
      answer: "車路士",
    },
    {
      question: "我們第一次一起看的電影是哪一部？",
      options: ["你的名字", "復仇者聯盟", "玩具總動員"],
      answer: "你的名字",
    },
    {
      question: "以下哪位足球員曾效力車路士？",
      options: ["C朗", "夏薩特", "美斯"],
      answer: "夏薩特",
    },
    {
      question: "當你生氣時，我通常會怎麼哄你？",
      options: ["買甜點", "帶你看電影", "讓你贏一場FC25"],
      answer: "買甜點",
    },
    {
      question: "我們最喜歡一起玩的PS5遊戲是？",
      options: ["FC 25", "GTA 5", "Call of Duty"],
      answer: "FC 25",
    },
    {
      question: "我們一起看過的WWE選手中，誰最強？",
      options: ["John Cena", "The Rock", "Roman Reigns"],
      answer: "John Cena",
    },
    {
      question: "如果我們一起去迪士尼，我會先帶你去哪裡？",
      options: ["買東西", "過山車", "城堡拍照"],
      answer: "買東西",
    },
    {
      question: "我們有沒有為了玩PS5搶過手掣？",
      options: ["有", "沒有", "你每次都讓我"],
      answer: "有",
    },
    {
      question: "你最愛聽我說哪句話？",
      options: ["我愛你", "今晚打FC 25？", "要不要吃甜點？"],
      answer: "我愛你",
    },
    {
      question: "周杰倫最具代表性的專輯是哪一張？",
      options: ["范特西", "葉惠美", "依然范特西"],
      answer: "范特西",
    },
    {
      question: "我們第一次在KTV一起唱的是哪首歌？",
      options: ["晴天", "告白氣球", "夜曲"],
      answer: "告白氣球",
    },
    {
      question: "我最喜歡的WWE賽事是哪個？",
      options: ["WrestleMania", "Royal Rumble", "Survivor Series"],
      answer: "WrestleMania",
    },
    {
      question: "我們第一次一起看的歐冠決賽是哪一場？",
      options: ["皇馬 vs 利物浦", "曼城 vs 國際米蘭", "車路士 vs 拜仁"],
      answer: "車路士 vs 拜仁",
    },
    {
      question: "周杰倫最愛的樂器是什麼？",
      options: ["鋼琴", "吉他", "小提琴"],
      answer: "鋼琴",
    },
    {
      question: "我最想和你一起學習哪種樂器？",
      options: ["鋼琴", "吉他", "鼓"],
      answer: "鋼琴",
    },
    {
      question: "我們有沒有一起熬夜看球賽？",
      options: ["有", "沒有", "你睡著了"],
      answer: "有",
    },
    {
      question: "哪首周杰倫的歌最適合用來表白？",
      options: ["告白氣球", "龍捲風", "安靜"],
      answer: "告白氣球",
    },
    {
      question: "我們一起玩過最刺激的遊戲是？",
      options: ["Call of Duty", "WWE 2K", "FIFA 25"],
      answer: "FIFA 25",
    },
    {
      question: "我第一次送你的禮物是什麼？",
      options: ["手鏈", "耳環", "花"],
      answer: "手鏈",
    },
    {
      question: "如果我們能一起去音樂節，我最想聽誰的演唱會？",
      options: ["周杰倫", "五月天", "Coldplay"],
      answer: "周杰倫",
    },
    {
      question: "哪首周杰倫的歌提到“不能說的秘密”？",
      options: ["七里香", "不能說的秘密", "夜的第七章"],
      answer: "不能說的秘密",
    },
    {
      question: "如果我能彈一首歌給你聽，我最想彈？",
      options: ["夜曲", "稻香", "晴天"],
      answer: "晴天",
    },
    {
      question: "我們最喜歡的一家餐廳是？",
      options: ["火鍋店", "壽司店", "燒烤店"],
      answer: "壽司店",
    },
    {
      question: "我們有沒有一起去過演唱會？",
      options: ["有", "沒有", "還沒，但想去"],
      answer: "還沒，但想去",
    },
    {
      question: "我最喜歡的飲料是？",
      options: ["奶茶", "咖啡", "果汁"],
      answer: "奶茶",
    },
    {
      question: "我們最常玩的雙人遊戲是？",
      options: ["FC 25", "WWE 2K", "Mario Kart"],
      answer: "FC 25",
    },
    {
      question: "哪首周杰倫的歌裡有“愛在西元前”這句歌詞？",
      options: ["愛在西元前", "軌跡", "黑色毛衣"],
      answer: "愛在西元前",
    },
  ],
  hard: [
    {
      question: "我們的第一張合照是在什麼地方拍的？",
      options: ["mini cooper內", "長洲海邊", "餐廳"],
      answer: "mini cooper內",
    },
    {
      question: "我們的求婚紀念日是哪一天？",
      options: ["7月7日", "8月8日", "9月9日", "1月11日"],
      answer: "1月11日",
    },
    {
      question: "我最喜歡的電影是哪一部？",
      options: ["頭文字D", "哈利波特", "天台"],
      answer: "頭文字D",
    },
    {
      question: "愛情電影經典台詞「You jump, I jump」出自哪部電影？",
      options: ["真愛每一天", "時空旅人之妻", "鐵達尼號"],
      answer: "鐵達尼號",
    },
    {
      question: "Fat Fat 在2025年賀歲盃為了誰人（球星）入場？",
      options: ["傑斯", "艾殊利高爾", "夏薩特", "卡卡"],
      answer: "夏薩特",
    },
    {
      question: "我們的紀念日是哪一天？",
      options: ["1月1日", "5月20日", "6月6日"],
      answer: "1月1日",
    },
    {
      question: "我最喜歡的FC25球員卡是？",
      options: ["朗尼", "C朗", "夏薩特"],
      answer: "C朗",
    },
    {
      question: "我抽到的FC25 TOTY球員卡是？",
      options: ["朗尼", "尼馬", "夏薩特", "史密斯"],
      answer: "史密斯",
    },
    {
      question: "哪一位WWE選手是我的最愛？",
      options: ["Undertaker", "Shawn Michaels", "John Cena", "CM Punk"],
      answer: "CM Punk",
    },
    {
      question: "我們第一次一起看足球比賽是哪一場？",
      options: ["法國對阿根廷", "香港對伊朗", "法國對克羅地亞"],
      answer: "法國對阿根廷",
    },
    {
      question: "如果讓你選，你會陪我打FC25還是一起看WWE？",
      options: ["FC25", "WWE", "都陪你"],
      answer: "都陪你",
    },
    {
      question: "我最討厭的足球隊是？",
      options: ["曼聯", "阿仙奴", "利物浦"],
      answer: "阿仙奴",
    },
    {
      question: "我們曾經為了PS5玩什麼遊戲而吵架？",
      options: ["FC25", "GTA 5", "Minecraft", "WWE 2k24"],
      answer: "WWE 2k24",
    },
    {
      question: "如果我們一起去西貢旅行，你覺得我最想做什麼？",
      options: ["玩水上活動", "吃海鮮", "日落拍照", "Hea"],
      answer: "Hea",
    },
    {
      question: "如果你能送我一件Dior的禮物，你會選哪個？",
      options: ["Dior 銀包", "Dior 頸鏈", "Chanel 手袋"],
      answer: "Dior 銀包",
    },
    {
      question: "我們曾經一起熬夜做什麼？",
      options: ["看歐冠決賽", "打PS5", "聊天", "睇急症"],
      answer: "睇急症",
    },
    {
      question: "我們最常點的外賣是什麼？",
      options: ["壽司", "Pizza", "炸雞"],
      answer: "Pizza",
    },
    {
      question: "如果我能去現場看一場足球比賽，我最想去哪裡？",
      options: ["史丹福橋", "老特拉福德", "魯營"],
      answer: "史丹福橋",
    },
    {
      question: "哪一支球隊是車路士的死敵？",
      options: ["阿仙奴", "熱刺", "曼城"],
      answer: "阿仙奴",
    },
    {
      question: "我最想和你一起完成的願望是？",
      options: ["看歐冠決賽", "一起去迪士尼", "看周杰倫演唱會", "住house"],
      answer: "住house",
    },
    {
      question: "周杰倫的哪首歌有「愛在西元前」這句歌詞？",
      options: ["愛在西元前", "軌跡", "黑色毛衣"],
      answer: "愛在西元前",
    },
    {
      question: "我們在一起後，你送給我的第一個音樂禮物是什麼？",
      options: ["樂譜", "CD", "鋼琴演奏"],
      answer: "鋼琴演奏",
    },
    {
      question: "哪首周杰倫的歌裡有鋼琴前奏？",
      options: ["晴天", "楓", "雙截棍"],
      answer: "楓",
    },
    {
      question: "如果我們去KTV，哪首周杰倫歌我一定會點？",
      options: ["稻香", "青花瓷", "楓", "手寫的從前"],
      answer: "手寫的從前",
    },
    {
      question: "我最近想看周杰倫哪場演唱會？",
      options: ["地表最強", "魔天倫", "嘉年華"],
      answer: "嘉年華",
    },
    {
      question: "我們最喜歡的周杰倫電影是？",
      options: ["不能說的秘密", "頭文字D", "天台"],
      answer: "不能說的秘密",
    },
    {
      question:
        "周杰倫曾經在一首歌裡唱到「一起看著日落 一直到我們都睡著」，是哪首？",
      options: ["開不了口", "簡單愛", "星晴"],
      answer: "簡單愛",
    },
    {
      question: "我最常用的音樂軟件是？",
      options: ["Pro Tools", "GarageBand", "Logic Pro"],
      answer: "Logic Pro",
    },
    {
      question: "我們最常用來分享音樂的App是？",
      options: ["Spotify", "Youtube Music", "KKBOX"],
      answer: "Youtube Music",
    },
    {
      question: "如果我會再學樂器，我最想學？",
      options: ["吉他", "鋼琴", "薩克斯風"],
      answer: "吉他",
    },
    {
      question: "哪首歌的MV有周杰倫彈鋼琴的畫面？",
      options: ["夜曲", "黑色幽默", "七里香"],
      answer: "黑色幽默",
    },
    {
      question:
        "我youtube 頻道Choi Po Music第一首關於自己編曲的第一首是那一首？",
      options: ["一路向北", "明明就", "說好不哭"],
      answer: "一路向北",
    },
    {
      question: "我在英國倫敦那一間學校學習過？",
      options: [
        "Goldsmiths, University of London",
        "King's College London",
        "Birkbeck, University of London",
        "Royal Holloway, University of London",
      ],
      answer: "Goldsmiths, University of London",
    },
    {
      question: "我們第一次一起聽現場音樂表演是哪裡？",
      options: ["音樂節", "咖啡店Live", "周杰倫演唱會"],
      answer: "周杰倫演唱會",
    },
    {
      question: "如果要合唱一首周杰倫的歌，我會選哪一首？",
      options: ["屋頂", "浪漫手機", "手寫的從前"],
      answer: "屋頂",
    },
    {
      question: "我們有沒有一起寫過歌？",
      options: ["有", "沒有", "有想過但沒完成"],
      answer: "有想過但沒完成",
    },
    {
      question: "哪一首周杰倫的歌最適合作為我們的主題曲？",
      options: ["告白氣球", "晴天", "擱淺"],
      answer: "告白氣球",
    },
    {
      question: "我製作過那一首非周杰倫歌曲？",
      options: ["Rewrite the Star + One Last Time", "學不會", "記憶棉"],
      answer: "Rewrite the Star + One Last Time",
    },
  ],
};

const GIFTS = {
  normal: [
    { name: "愛的小貼紙", probability: 20 },
    { name: "情侶鑰匙圈", probability: 20 },
    { name: "客製化T恤", probability: 10 },
    { name: "可愛玩偶", probability: 10 },
    { name: "手鏈", probability: 10 },
    { name: "電子書", probability: 5 },
    { name: "電影票 (2張)", probability: 10 }, // 🎬 情侶電影之夜
    { name: "坪洲一日遊 (含單車租借)", probability: 5 }, // 🚲 本地輕旅行
    { name: "1000 現金獎", probability: 5 }, // 💰 可直接使用
    { name: "迪士尼一日遊 (1張門票)", probability: 5 }, // 🏰 香港迪士尼門票
  ],
  hard: [
    { name: "Chanel 手袋", probability: 0.5 },
    { name: "Dior 銀包", probability: 2 },
    { name: "Dior 頸鏈", probability: 3 },
    { name: "迪士尼一日遊 (2張門票)", probability: 10 },
    { name: "迪士尼兩日一夜度假", probability: 8 },
    { name: "西貢兩日一夜度假", probability: 8 },
    { name: "坪洲一日遊", probability: 8 },
    { name: "長洲兩日一夜", probability: 12 },
    { name: "馬灣兩日一夜", probability: 8 },
    { name: "澳門豪華一日遊 (來回船票+餐飲)", probability: 15 },
    { name: "澳門兩日一夜 (來回船票+餐飲+住)", probability: 10 },
    { name: "日本雙人遊 (含機票)", probability: 5 },
    { name: "台灣雙人遊 (含機票+住宿)", probability: 8 },
    { name: "歐洲雙人遊 (含機票)", probability: 1 },
    { name: "澳洲雙人遊 (含機票)", probability: 2 },
    { name: "1000 現金獎", probability: 10 },
    { name: "2000 現金獎", probability: 5 },
    { name: "500 現金獎", probability: 15 },
    { name: "300 現金獎", probability: 15 },
    { name: "sponsor gel甲錢1次", probability: 10 },
    { name: "sponsor gel甲錢2次", probability: 8 },
    { name: "sponsor gel甲錢5次", probability: 6 },
    { name: "高級5星級餐飲餐廳雙人晚餐", probability: 15 },
    { name: "任選主題樂園 (海洋公園或環球影城）", probability: 8 },
    { name: "演唱會 (周杰倫或其他)", probability: 12 },
    { name: "電子書", probability: 12 },
    { name: "資助一半價錢學車", probability: 6 },
    { name: "1卡鑽石", probability: 6 },
    { name: "電影票 (2張)", probability: 8 },
    { name: "Milk & Mocha", probability: 6 },
    { name: "手鏈", probability: 6 },
  ],
};

const STORAGE_KEY = "lucky_draw_result";
const EXPIRATION_DAYS = 90;

export function QuickStart() {
  const [level, setLevel] = useState<Level | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showDraw, setShowDraw] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<string | null>(null);
  const [rollingPrize, setRollingPrize] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [animation, setAnimation] = useState("");
  const questions = level
    ? [...QUESTIONS[level]].sort(() => 0.5 - Math.random()).slice(0, 3)
    : [];

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    const storedData = JSON.parse(stored);
    if (
      storedData &&
      new Date().getTime() - storedData.timestamp <
        EXPIRATION_DAYS * 24 * 60 * 60 * 1000
    ) {
      setSelectedPrize(storedData.prize);
      setShowDraw(true);
    }
  }, []);

  const handleAnswer = (selected: string) => {
    if (selected === questions[questionIndex].answer) {
      setScore(score + 1);
      if (questionIndex + 1 < questions.length) {
        setQuestionIndex(questionIndex + 1);
      } else if (score + 1 === 3) {
        setShowDraw(true);
      }
    } else {
      setError("❌ 答錯了！我們重新開始吧！");
      setTimeout(() => {
        setError(null);
        setQuestionIndex(0);
        setScore(0);
      }, 2000);
    }
  };

  const handleDraw = () => {
    if (!level) return;

    let count = 0;
    setRollingPrize(GIFTS[level][0].name);
    const interval = setInterval(() => {
      setRollingPrize(
        GIFTS[level][Math.floor(Math.random() * GIFTS[level].length)].name
      );
      count++;
      if (count > 10) {
        clearInterval(interval);
        const totalWeight = GIFTS[level].reduce(
          (sum, gift) => sum + gift.probability,
          0
        );
        let random = Math.random() * totalWeight;
        for (let gift of GIFTS[level]) {
          if (random < gift.probability) {
            setSelectedPrize(gift.name);
            setAnimation("prize-animate");
            setTimeout(() => setAnimation(""), 1500);
            localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify({
                prize: gift.name,
                timestamp: new Date().getTime(),
              })
            );
            return;
          }
          random -= gift.probability;
        }
      }
    }, 200);
  };

  return (
    <div className="p-5 text-center">
      {error && <div className="alert alert-danger">{error}</div>}
      {selectedPrize ? (
        <div>
          <h2>🎁 你的專屬禮物 🎁</h2>
          <h3 className={`prize-text ${animation}`}>
            你獲得了：{selectedPrize}
          </h3>
        </div>
      ) : !level ? (
        <div>
          <h2>選擇難度 💕</h2>
          <Button className="m-2" onClick={() => setLevel("normal")}>
            🌸 普通模式
          </Button>
          <Button className="m-2" onClick={() => setLevel("hard")}>
            🔥 困難模式
          </Button>
        </div>
      ) : showDraw ? (
        <div>
          <h2>恭喜！您可以進行抽獎！ 🎁 💕</h2>
          <div className="gift-list-container">
            {GIFTS[level].map((gift, index) => (
              <div key={index} className="gift-item fade-in">
                🎁 {gift.name}
              </div>
            ))}
          </div>
          <div className="reveal-button-container">
            <Button
              className="m-3 reveal-button"
              onClick={handleDraw}
              disabled={!!error}
            >
              抽獎
            </Button>
          </div>
          {rollingPrize && !selectedPrize && (
            <h3 className="prize-text">{rollingPrize}</h3>
          )}
        </div>
      ) : (
        <Card className="text-center">
          <Card.Body>
            <h3>{questions[questionIndex].question}</h3>
            {!error &&
              questions[questionIndex].options.map((option) => (
                <Button
                  key={option}
                  className="m-2"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </Button>
              ))}
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
