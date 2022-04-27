function toggleChat() {
  const chatBox = document.querySelector(
    ".chatbox-container"
  );
  const chatIcon = document.querySelector(
    ".chat-icon-container"
  );
  chatBox.classList.toggle(
    "chatbox-container--active"
  );
  chatIcon.classList.toggle(
    "chat-icon-container--active"
  );
}

export default toggleChat;
