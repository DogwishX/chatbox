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
        handleEnd={handleEndFn}
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

function handleEndFn({ values }) {
  setTimeout(
    () => (window.location.href = "/result"),
    5000
  );
}

export default ChatBox;
