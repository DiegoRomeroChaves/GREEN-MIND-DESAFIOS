function marcarConcluido() {
    document.getElementById('status').innerText = 'Desafio concluído! Parabéns por contribuir com o meio ambiente!';
}

function iniciarLembrete() {
    alert("Lembrete de beber água a cada 2 horas foi iniciado!");
    
    // Define o intervalo de 2 horas (7200000 ms)
    setInterval(function() {
        alert("Hora de beber água! Lembre-se de usar sua garrafa reutilizável.");
    }, 7200000); // 2 horas em milissegundos
}
