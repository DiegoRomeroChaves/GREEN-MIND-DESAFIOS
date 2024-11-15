let reminderInterval;

function startReminder() {
    // Define o intervalo para o lembrete (2 horas = 7200000 ms)
    reminderInterval = setInterval(() => {
        alert("Lembrete: Beba água!");
    }, 7200000);

    // Atualiza a interface
    document.getElementById("startReminder").style.display = "none";
    document.getElementById("stopReminder").style.display = "inline";
    document.getElementById("statusMessage").innerText = "Lembrete iniciado! Você receberá um alerta a cada 2 horas.";
}

function stopReminder() {
    // Limpa o intervalo do lembrete
    clearInterval(reminderInterval);

    // Atualiza a interface
    document.getElementById("startReminder").style.display = "inline";
    document.getElementById("stopReminder").style.display = "none";
    document.getElementById("statusMessage").innerText = "Lembrete parado.";
}






function marcarConcluido() {
    const statusDiv = document.getElementById("status");
    if (statusDiv) {
        statusDiv.innerHTML = "Desafio concluído!";
        statusDiv.style.color = "green";
    }
}
