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
    <div className="chatbox__close" onClick={toggleChat}>
      ✖
    </div>
  );
}

function handleEndFn({ values }) {
  // When skin type is unknown by the user
  if (values.includes("nao-sei"))
    return setTimeout(() => (window.location.href = "/questionnaire"), 5000);

  // When user knows their skin type
  const skinTypeId = values[values.length - 1];
  setTimeout(() => (window.location.href = `/${skinTypeId}`), 5000);
}

export default ChatBox;
