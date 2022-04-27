import ChatBot from "react-simple-chatbot";
import steps from "./steps";
import "./ChatBox.css";
import toggleChat from "../../hooks/toggleChat";

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

export default ChatBox;
