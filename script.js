
const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const darkBtn = document.getElementById("darkBtn");
const voiceBtn = document.getElementById("voiceBtn");

// Save chat messages
function saveChat() {
    localStorage.setItem("chatHistory", chatBox.innerHTML);
}

// Load chat messages
function loadChat() {
    const savedChat = localStorage.getItem("chatHistory");

    if (savedChat) {
        chatBox.innerHTML = savedChat;
    }
}

// Send message
function sendMessage() {
    let message = userInput.value.trim();

    if (message === "") {
        return;
    }

    let userMessage = document.createElement("p");
    userMessage.textContent = message;
    userMessage.className = "user-message";
    chatBox.appendChild(userMessage);

    let reply = "";

    if (message.toLowerCase().includes("hello")) {
        reply = "Hello! Nice to meet you 😊";
    }
    else if (message.toLowerCase().includes("hi")) {
        reply = "Hi! How are you?";
    }
    else if (message.toLowerCase().includes("name")) {
        reply = "I am Mini Chatbot 🤖";
    }
    else if (message.toLowerCase().includes("how are you")) {
        reply = "I am fine! Thank you 😊";
    }
    else if (message.toLowerCase().includes("bye")) {
        reply = "Goodbye! Have a nice day!";
    }
    else {
        reply = "Sorry, I don't understand!";
    }
    
let botMessage = document.createElement("p");

botMessage.className = "bot-message";
botMessage.textContent = "Bot is typing...";

chatBox.appendChild(botMessage);

setTimeout(function() {
    botMessage.textContent = reply;
    saveChat();
    chatBox.scrollTop = chatBox.scrollHeight;
}, 1000);

    
    

    saveChat();
    // SAVE HISTORY
    saveChat();

    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Send button
sendBtn.addEventListener("click", sendMessage);

// Enter key
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Clear chat
clearBtn.addEventListener("click", function() {
    chatBox.innerHTML = "";
    localStorage.removeItem("chatHistory");
});

// Dark mode
darkBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Voice input
voiceBtn.addEventListener("click", function() {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Voice input not supported");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        userInput.value = event.results[0][0].transcript;
        sendMessage();
    };

    recognition.start();
});

// LOAD HISTORY WHEN PAGE OPENS
loadChat();
// Load chat history
window.addEventListener("DOMContentLoaded", function() {
    const savedChat = localStorage.getItem("chatHistory");

    if (savedChat) {
        chatBox.innerHTML = savedChat;
    }
});
