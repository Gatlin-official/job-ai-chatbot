async function sendMessage() {
    const inputField = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const message = inputField.value.trim();

    if (!message) return;

    // Add user message bubble
    chatBox.innerHTML += `
        <div class="message user">
            ${message}
        </div>
    `;

    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message })
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;

    // Add AI message bubble
    chatBox.innerHTML += `
        <div class="message bot">
            ${reply}
        </div>
    `;

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Allow Enter key
document.getElementById("user-input")
    .addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
function insertTemplate(type) {
    const inputField = document.getElementById("user-input");

    if (type === "resume") {
        inputField.value = "Improve this resume bullet: ";
    }
    else if (type === "cover") {
        inputField.value = "Write a professional cover letter for: ";
    }
    else if (type === "interview") {
        inputField.value = "Give me a strong answer for this interview question: ";
    }
    else if (type === "summary") {
        inputField.value = "Summarize this job description into key bullet points: ";
    }

    inputField.focus();
}
