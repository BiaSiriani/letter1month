// Seleciona todos os botões de "Marcar como Concluída"
const completeBtns = document.querySelectorAll('.complete-btn');
const scoreDisplay = document.getElementById('score');
let score = 0;

// Adiciona um event listener a cada botão
completeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Marca a tarefa como concluída
    btn.disabled = true;
    btn.textContent = 'Concluído!';

    // Atualiza a pontuação
    score += 10;
    scoreDisplay.textContent = score;
  });
});