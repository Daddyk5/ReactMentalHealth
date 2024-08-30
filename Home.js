import React, { useState } from 'react';
import './Home.css';
import logo from './logo.jpg';

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { text: input, user: 'user' };
      setMessages([...messages, userMessage]);
      setInput('');

      setTimeout(() => {
        simulateBotResponse(input);
      }, 500);
    }
  };

  const simulateBotResponse = (userInput) => {
    const responses = {
      hello: "Hello! How can I assist you today?",
      hi: "Hi there! What mental health topic would you like to discuss?",
      how_are_you: "I'm just a bot, but I'm here and ready to chat!",
      stress_management: "Managing stress is crucial for mental well-being. Remember to take breaks, practice deep breathing, and engage in activities you enjoy.",
      anxiety_help: "If you're feeling anxious, try grounding exercises like deep breathing, focusing on senses, or talking to someone you trust.",
      depression_help: "Dealing with depression can be tough. Make sure to seek support from loved ones or a mental health professional. You're not alone.",
      resources: "Here are some resources: [Provide links to reputable mental health websites]",
      default: "I'm here to help with mental health questions and support. Feel free to ask me anything.",
    };

    let botMessage = responses.default;

    if (userInput.toLowerCase().includes("hello")) {
      botMessage = responses.hello;
    } else if (userInput.toLowerCase().includes("hi")) {
      botMessage = responses.hi;
    } else if (userInput.toLowerCase().includes("how are you")) {
      botMessage = responses.how_are_you;
    } else if (userInput.toLowerCase().includes("stress")) {
      botMessage = responses.stress_management;
    } else if (userInput.toLowerCase().includes("anxiety")) {
      botMessage = responses.anxiety_help;
    } else if (userInput.toLowerCase().includes("depression")) {
      botMessage = responses.depression_help;
    } else if (userInput.toLowerCase().includes("resources")) {
      botMessage = responses.resources;
    }

    const botResponse = { text: botMessage, user: 'support' };
    setMessages(prevMessages => [...prevMessages, botResponse]);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <h1>Mental Health Support</h1>
      </header>
      <div className="chat-container">
        <div className="chat-support">
          <div className="chat-box">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.user}`}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
