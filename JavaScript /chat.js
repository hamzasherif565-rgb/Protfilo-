const input = document.getElementById("chatInput");
const btn = document.getElementById("sendBtn");
const messages = document.getElementById("chatMessages");

btn.onclick = sendMessage;

input.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;
  
  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = text;
  messages.appendChild(userMsg);
  
  input.value = "";
  messages.scrollTop = messages.scrollHeight;
  
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.textContent = "رسالتك وصلت وجارى الرد عليها 🤖";
    messages.appendChild(botMsg);
    messages.scrollTop = messages.scrollHeight;
  }, 600);
}