let countdownInterval;
let countdownTime = 2 * 60 * 60; // 2 hours in seconds

function startTimer() {
    document.getElementById("startReminder").style.display = "none";
    document.getElementById("stopReminder").style.display = "inline-block";
    countdownTime = 2 * 60 * 60; // Reinicia para 2 horas
    updateCountdownDisplay();
    
    countdownInterval = setInterval(() => {
        countdownTime--;
        updateCountdownDisplay();
        
        if (countdownTime <= 0) {
            alert("Hora de beber água!");
            countdownTime = 2 * 60 * 60; // Reinicia o contador para 2 horas
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(countdownInterval);
    document.getElementById("startReminder").style.display = "inline-block";
    document.getElementById("stopReminder").style.display = "none";
    document.getElementById("countdown").innerText = "";
}

function updateCountdownDisplay() {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;

    document.getElementById("countdown").innerText = 
        `Tempo restante: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}





function marcarConcluido() {
    const statusDiv = document.getElementById("status");
    if (statusDiv) {
        statusDiv.innerHTML = "Desafio concluído!";
        statusDiv.style.color = "green";
    }
}
