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
  { type: 'truth', text: 'Qual foi sua maior mentira?' },
  { type: 'truth', text: 'Se pudesse mudar algo no seu passado, o que seria?' },
  { type: 'truth', text: 'Você já teve um sonho muito estranho ou assustador?' },
  { type: 'truth', text: 'Você já fez um juramento e o quebrou depois?' },
  { type: 'truth', text: 'Você já enviou uma mensagem de texto que não deveria ter enviado?' },
  { type: 'truth', text: 'Você já olhou no celular de alguém sem permissão?' },
  { type: 'truth', text: 'Você já fez algo vergonhoso em uma festa ou evento social?' },
  { type: 'truth', text: 'Qual foi a sua primeira impressão sobre o(a) parceiro(a)?' },
  { type: 'truth', text: 'Você já fingiu estar doente para não ir a algum lugar?' },
  { type: 'dare', text: 'Faça 10 flexões seguidas.' },
  { type: 'dare', text: 'Cante uma música em voz alta.' },
  { type: 'dare', text: 'Contar uma piada ruim.' },
  { type: 'dare', text: 'Deixar alguém colocar maquiagem exagerada em você.' },
  { type: 'dare', text: 'Deixar alguém escolher uma música ruim para você cantar.' },
  { type: 'dare', text: 'Fazer uma declaração de amor sentimental para o outro jogador.' },
  { type: 'dare', text: 'Contar o pior cantada que você conhece.' },
  { type: 'dare', text: 'Escolher uma música ruim para o outro jogador cantar.' },
  { type: 'dare', text: 'Fazer uma imitação hilária de alguém.' },
  { type: 'dare', text: 'Fazer uma performance de stand-up com piadas ruins por 30 segundos.' },
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