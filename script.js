function sendMessage() {
    const input = document.getElementById('userInput');
    const chatWindow = document.getElementById('chat-window');
    const userMessage = input.value.trim();

    if (userMessage) {
        // Exibe a mensagem do usuário
        addMessageToChat('Você: ' + userMessage, 'user');

        // Resposta do bot
        const botResponse = getBotResponse(userMessage);
        addMessageToChat('TYCON.AI: ' + botResponse, 'bot');

        // Limpa o campo de input
        input.value = '';

        // Rola a tela para o final
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}

function addMessageToChat(text, sender) {
    const chatWindow = document.getElementById('chat-window');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = text;
    chatWindow.appendChild(messageDiv);
}

function getBotResponse(userMessage) {
    const lowerInput = userMessage.toLowerCase();

    if (lowerInput.includes("oi") || lowerInput.includes("olá")) {
        return "Olá! Como posso ajudar?";
    } else if (lowerInput.includes("quero estrategias")) {
        return "Sim, vou te mostrar as melhores estratégias com alto indice de acertos. Porém, elas só irão funcionar em uma plataforma com falha que eu vou te mandar, ok?";
    } else if (lowerInput === "ok") {
        return "Estratégias validadas e plataforma com falhas no link abaixo ✓✓✓✓✓✓✓✓   https://t.me/+1oZfe9ZZrgxjMTBh ✓✓✓✓✓✓✓✓ -----> (COPIE ESSE LINK E COLE NO SEU NAVEGADOR OU CHROME!)";
    } else {
        return "Não entendi sua mensagem. me mande apenas (oi), (quero estrategias) e (ok)?";
    }
}