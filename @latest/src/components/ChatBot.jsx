import React, { useState } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showExpertForm, setShowExpertForm] = useState(false);
  const [goalAchieved, setGoalAchieved] = useState(false);

  // Predefined bot responses for various queries
  const botResponses = {
    "hello": "Hi there! How can I assist you with your fitness goals?",
    "how are you": "I'm just code, but I'm here to help you achieve your fitness goals!",
    "call expert": "Sure! Click 'Schedule a Call' below to fix a call with a fitness expert.",
    "diet tips": "A balanced diet includes proteins, carbs, healthy fats, and plenty of water. Try to avoid processed foods.",
    "motivation": "Stay consistent, track your progress, and celebrate small wins! You're doing great!",
    "congratulations": "Amazing job! Keep pushing forward to achieve even more milestones.",
    "default": "I'm not sure how to respond to that. Try asking something about workouts, fitness, or setting goals!",
  };

  // Handle user message submission
  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    const botMessage = {
      text: botResponses[input.toLowerCase()] || botResponses["default"],
      sender: "bot",
    };

    setMessages([userMessage, botMessage]); // Only show last user and bot message
    setInput("");

    // Display the expert form if the user types "call expert"
    if (input.toLowerCase().includes("call expert")) {
      setShowExpertForm(true);
    }

    // Display congratulatory message if the user achieves a goal
    if (input.toLowerCase().includes("goal achieved")) {
      setGoalAchieved(true);
    }
  };

  // Handle scheduling a call
  const handleScheduleCall = (e) => {
    e.preventDefault();
    alert("Your request for a call with the fitness expert has been scheduled!");
    setShowExpertForm(false);
  };

  return (
    <div className="chatbot">
      <h2>Fitness Assistant</h2>
      {goalAchieved && (
        <div className="congratulations">
          🎉 Congratulations on achieving your goal! Keep up the great work! 🎉
        </div>
      )}
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "user" ? "user" : "bot"}`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {!showExpertForm ? (
        <>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </>
      ) : (
        <form className="expert-form" onSubmit={handleScheduleCall}>
          <h3>Schedule a Call with a Fitness Expert</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <button type="submit">Schedule Call</button>
        </form>
      )}
    </div>
  );
};

export default ChatBot;
