import React, { useState } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Aplikasi Chatan Sederhana</h1>
      <Chat />
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const responses = [
    "Halo, apa kabar?",
    "Baik, terima kasih!",
    "Saya senang berbicara denganmu!",
    "Apa yang ingin kamu bicarakan hari ini?",
    "Saya bisa membantu kamu dengan apa?",
  ];

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: "user" };
      setMessages([...messages, newMessage]);
      setInput("");

      setTimeout(() => {
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: randomResponse, sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "user" ? "user-message" : "bot-message"
              }`}
            >
              <span>{message.text}</span>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage}>Kirim</button>
        </div>
      </div>
    </div>
  );
};

export default App;
