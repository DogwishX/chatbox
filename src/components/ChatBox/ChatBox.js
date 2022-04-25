import ChatBot from "react-simple-chatbot";
import "./ChatBox.css";

const steps = [
  {
    id: "greeting",
    message:
      "Oi, sou a DermaBot. Estou aqui para te ajudar.",
    trigger: "skin-type",
  },
  {
    id: "skin-type",
    message:
      "Voce diria que sua pele é oleosa ou seca?",
    trigger: "skin-type-options",
  },
  {
    id: "skin-type-options",
    options: [
      {
        value: 1,
        label: "Minha pele é oleosa",
        trigger: "oily",
      },
      {
        value: 2,
        label: "'Seca' descreve minha pele",
        trigger: "dry",
      },
      {
        value: 3,
        label: "Pele? Tenho isso nao",
        trigger: "no-skin",
      },
    ],
  },
  {
    id: "oily",
    message: "Ecaaa, cebosa!",
    end: true,
  },
  {
    id: "dry",
    message: "Mulher, va se hidratar!",
    end: true,
  },
  {
    id: "no-skin",
    message:
      "Olha pelo lado positivo, pelo menos nao precisa gastar com produtos de pele! ;)",
    end: true,
  },
];

function ChatBox() {
  return (
    <div className="chatbox-container">
      <ChatBot
        headerTitle="Conversa com DermaBot"
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
