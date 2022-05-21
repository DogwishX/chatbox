import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import toggleChat from "../../hooks/toggleChat";
import "./ChatIcon.css";
import ChatPopup from "../ChatPopup/ChatPopup";

function ChatIcon() {
  const [hasBeenClickedOnce, setHasBeenClickedOnce] = useState(false);
  return (
    <div className="chat-icon-container" onClick={handleIconClick}>
      <FontAwesomeIcon
        className="chat-icon"
        icon={faCommentDots}
        color="white"
      />
      {!hasBeenClickedOnce && <ChatPopup />}
    </div>
  );

  function handleIconClick() {
    toggleChat();
    setHasBeenClickedOnce(true);
  }
}

export default ChatIcon;
