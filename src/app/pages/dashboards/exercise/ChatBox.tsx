import React, { useState, FormEvent } from "react";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export const ChatBox: React.FC<{ weatherData: any }> = ({ weatherData }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "system",
      content: `You are a friendly assistant.
Current weather data from Hong Kong Observatory:
• Situation: ${weatherData.generalSituation}
• Forecast: ${weatherData.forecastDesc}
• Outlook: ${weatherData.outlook}
• Updated: ${new Date(weatherData.updateTime).toLocaleString()}`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 只禁止涉及色情、暴力、18+主題的輸入
  const FORBIDDEN_PATTERNS = [
    /色情/,
    /暴力/,
    /18禁/,
    /sex/i,
    /adult/i,
    /rape/i,
    /xxx/i,
  ];

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    // 檢查禁止詞
    if (FORBIDDEN_PATTERNS.some((re) => re.test(trimmed))) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "抱歉，我無法回答此類問題。",
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
        { role: "assistant", content: `Error: ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 只顯示 user & assistant，隱藏 system prompt
  const visibleMessages = messages.filter((m) => m.role !== "system");

  return (
    <div className="card shadow-sm border-0 rounded-3 p-4 mb-5">
      <h4 className="fw-bold mb-3">天氣小助手</h4>
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
