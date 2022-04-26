import ChatBot from "react-simple-chatbot";
import steps from "./steps";
import "./ChatBox.css";

function ChatBox() {
  return (
    <div className="chatbox-container">
      <ChatBot
        fontFamily="arial"
        headerTitle="Conversa com DermaBot"
        placeholder="Digite sua mensagem..."
        steps={steps}
      />
      <CloseChat />
    </div>
  );
}

function CloseChat() {
  return (
    <div
      className="chatbox__close"
      onClick={toggleChat}
    >
      ✖
    </div>
  );
}

function toggleChat() {
  const chatBox = document.querySelector(
    ".chatbox-container"
  );
  chatBox.classList.toggle(
    "chatbox-container--active"
  );
}

export default ChatBox;
