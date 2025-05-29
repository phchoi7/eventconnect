import React, { useState, FormEvent } from "react";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export const ChatBox: React.FC<{ weatherData: any }> = ({ weatherData }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "system",
      content: `You are Sally-GPT, a friendly weather assistant developed by Sally Tam Leung Wai technology team.
Current weather data from Hong Kong Observatory:
• Situation: ${weatherData.generalSituation}
• Forecast: ${weatherData.forecastDesc}
• Outlook: ${weatherData.outlook}
• Updated: ${new Date(weatherData.updateTime).toLocaleString()}`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 禁止色情、暴力、18+、及粗口、罵人用語
  const FORBIDDEN_PATTERNS = [
    /色情/,
    /暴力/,
    /18禁/,
    /sex/i,
    /adult/i,
    /rape/i,
    /xxx/i,
    /fuck/i,
    /shit/i,
    /damn/i,
    /bitch/i,
    /asshole/i,
    /屌/,
    /撚/,
    /閪/,
    /操/,
    /他媽/,
    /幹你娘/,
    /狗娘養的/,
  ];

  // 觸發詢問名稱
  const NAME_PATTERNS = [
    /what'?s your name\?/i,
    /who are you\?/i,
    /name of the chatbox/i,
    /tell me your name/i,
    /your name is\?/i,
    /how should i call you\?/i,
    /what should i call you\?/i,
    /你叫什麼名字\?/,
    /你的名字是什麼\?/,
    /你怎麼稱呼\?/,
    /你可以叫我什麼\?/,
    /你是誰\?/,
  ];

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    // 如果是在問名稱，立即回覆固定訊息
    if (NAME_PATTERNS.some((re) => re.test(trimmed))) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I am Sally-GPT, developed by Sally Tam Leung Wai technology team.😎",
        },
      ]);
      setInput("");
      return;
    }

    // 檢查禁止詞
    if (FORBIDDEN_PATTERNS.some((re) => re.test(trimmed))) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "抱歉，我無法回答此類問題。你會唔會用左禁止用詞呢，我地色情、暴力、18+、及粗口、罵人用語架😘",
        },
      ]);
      setInput("");
      return;
    }

    // 正常加入 user 訊息
    const newUserMsg: ChatMessage = { role: "user", content: trimmed };
    const updated = [...messages, newUserMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://api.chatanywhere.tech/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_CHAT_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: updated,
            temperature: 0.7,
          }),
        }
      );
      if (!res.ok) throw new Error(`API error ${res.status}`);
      const { choices } = await res.json();
      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: choices[0].message.content.trim(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Error: ${
            err.message === "API error 401"
              ? "伺服器目前很忙，請稍後再試"
              : err.message
          }`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 只顯示 user & assistant，隱藏 system
  const visibleMessages = messages.filter((m) => m.role !== "system");

  return (
    <div className="card shadow-sm border-0 rounded-3 p-4 mb-5">
      <h4 className="fw-bold mb-3">Sally-GPT 天氣小助手</h4>
      <div
        style={{
          height: 200,
          overflowY: "auto",
          border: "1px solid #ddd",
          padding: 8,
          marginBottom: 12,
          background: "#fafafa",
        }}
      >
        {visibleMessages.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: m.role === "user" ? "right" : "left",
              margin: "6px 0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: 16,
                background: m.role === "user" ? "#d1e7dd" : "#e9ecef",
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="d-flex">
        <input
          className="form-control me-2"
          placeholder="問：我想踢足球，可以嗎？"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <button className="btn btn-primary" type="submit" disabled={loading}>
          {loading ? "傳送中…" : "發送"}
        </button>
      </form>
    </div>
  );
};
