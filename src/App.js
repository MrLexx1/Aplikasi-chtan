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
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <span style={{ color: message.sender === "user" ? "blue" : "red" }}>
              {message.sender}: {message.text}
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendMessage}>Kirim</button>
    </div>
  );
};

export default App;
