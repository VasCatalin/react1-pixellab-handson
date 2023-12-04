//grab from DOM
const notificationBar = document.querySelector('.notification-bar');
// addMessage
export const addMessage = (messageElement) => {
  // clear Messages
  clearMessages();
  notificationBar.append(messageElement);
};

// clearMessages
export const clearMessages = () => {
  notificationBar.innerHTML = '';
};

// export default DOM object
export default notificationBar;
