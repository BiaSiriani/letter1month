const challengeText = document.getElementById('challenge-text');
const truthBtn = document.getElementById('truth-btn');
const dareBtn = document.getElementById('dare-btn');
const truthScoreDisplay = document.getElementById('truth-score');
const dareScoreDisplay = document.getElementById('dare-score');
const totalScoreDisplay = document.getElementById('total-score');

let truthScore = 0;
let dareScore = 0;
let totalScore = 0;

// Array de desafios de "Verdade" e "Consequência"
const challenges = [
  { type: 'truth', text: 'Qual é o seu maior medo?' },
  { type: 'dare', text: 'Faça 10 flexões seguidas.' },
  { type: 'truth', text: 'Qual foi sua maior mentira?' },
  { type: 'dare', text: 'Cante uma música em voz alta.' },
  // Adicione mais desafios aqui
];

// Função para exibir um novo desafio
function displayNewChallenge() {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  const challenge = challenges[randomIndex];

  challengeText.textContent = challenge.text;
  truthBtn.disabled = false;
  dareBtn.disabled = false;

  if (challenge.type === 'truth') {
    truthBtn.style.backgroundColor = '#4CAF50';
    dareBtn.style.backgroundColor = '#ccc';
  } else {
    truthBtn.style.backgroundColor = '#ccc';
    dareBtn.style.backgroundColor = '#4CAF50';
  }
}

// Função para atualizar a pontuação
function updateScore(type) {
  if (type === 'truth') {
    truthScore++;
    truthScoreDisplay.textContent = truthScore;
  } else {
    dareScore++;
    dareScoreDisplay.textContent = dareScore;
  }

  totalScore = truthScore + dareScore;
  totalScoreDisplay.textContent = totalScore;
}

// Adicionar event listeners aos botões
truthBtn.addEventListener('click', () => {
  updateScore('truth');
  displayNewChallenge();
});

dareBtn.addEventListener('click', () => {
  updateScore('dare');
  displayNewChallenge();
});

// Exibir o primeiro desafio
displayNewChallenge();