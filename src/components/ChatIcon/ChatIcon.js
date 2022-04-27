import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import toggleChat from "../../hooks/toggleChat";
import "./ChatIcon.css";

function ChatIcon() {
  return (
    <div
      className="chat-icon-container"
      onClick={toggleChat}
    >
      <FontAwesomeIcon
        className="chat-icon"
        icon={faCommentDots}
        color="white"
      />
    </div>
  );
}

export default ChatIcon;
