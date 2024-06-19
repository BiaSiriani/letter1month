const tasksContainer = document.querySelector('.tasks-container');
const challengesContainer = document.querySelector('.challenges-container');
const scoreDisplay = document.getElementById('score');
const navLinks = document.querySelectorAll('nav a');

let score = 0;

// Dados das tarefas
const tasks = [
  { id: 1, category: 'adventure', title: 'Tarefa 1', description: 'Descrição da Tarefa 1', image: 'tarefa1.jpg' },
  { id: 2, category: 'creativity', title: 'Tarefa 2', description: 'Descrição da Tarefa 2', image: 'tarefa2.jpg' },
  { id: 3, category: 'romance', title: 'Tarefa 3', description: 'Descrição da Tarefa 3', image: 'tarefa3.jpg' },
  // Adicione mais tarefas aqui
];

// Dados dos desafios
const challenges = [
  { id: 1, title: 'Desafio 1', description: 'Descrição do Desafio 1' },
  { id: 2, title: 'Desafio 2', description: 'Descrição do Desafio 2' },
  // Adicione mais desafios aqui
];

// Função para renderizar as tarefas
function renderTasks(category = 'all') {
  tasksContainer.innerHTML = '';

  tasks.forEach(task => {
    if (category === 'all' || task.category === category) {
      const taskItem = document.createElement('div');
      taskItem.classList.add('task-item');

      taskItem.innerHTML = `
        <img src="${task.image}" alt="${task.title}">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <button class="complete-btn">Marcar como Concluída</button>
      `;

      taskItem.querySelector('.complete-btn').addEventListener('click', () => {
        taskItem.querySelector('.complete-btn').disabled = true;
        taskItem.querySelector('.complete-btn').textContent = 'Concluído!';
        score += 10;
        scoreDisplay.textContent = score;
      });

      tasksContainer.appendChild(taskItem);
    }
  });
}

// Função para renderizar os desafios
function renderChallenges() {
  challengesContainer.innerHTML = '';

  challenges.forEach(challenge => {
    const challengeItem = document.createElement('div');
    challengeItem.classList.add('challenge-item');

    challengeItem.innerHTML = `
      <h3>${challenge.title}</h3>
      <p>${challenge.description}</p>
      <button class="complete-challenge">Concluir Desafio</button>
    `;

    challengeItem.querySelector('.complete-challenge').addEventListener('click', () => {
      challengeItem.querySelector('.complete-challenge').disabled = true;
      score += 20;
      scoreDisplay.textContent = score;
    });

    challengesContainer.appendChild(challengeItem);
  });
}

// Adiciona event listeners aos links de navegação
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const category = e.target.dataset.category;
    renderTasks(category);
  });
});

// Renderiza as tarefas e os desafios inicialmente
renderTasks();
renderChallenges();