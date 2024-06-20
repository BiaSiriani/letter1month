// Definindo as perguntas em formato JSON
const questions = [
    "Qual é o seu momento favorito do dia juntos?",
    "O que mais te atraiu quando vocês se conheceram?",
    "Qual é o seu lugar favorito para passear com seu amor?",
    "Quem faz o café da manhã?",
    "Qual é a melhor lembrança que vocês têm juntos?",
    "Qual foi o primeiro filme que assistiram juntos?",
    "O que vocês mais gostam de fazer juntos aos fins de semana?",
    "O que mudou na sua vida desde que conheceu seu amor?",
    "Qual foi o primeiro presente que vocês trocaram?",
    "Qual é o prato que seu amor mais gosta de cozinhar?",
    "Qual é a música que lembra vocês dois?",
    "Qual é o maior sonho de vocês como casal?"
  ];
  
  let currentQuestionIndex = 0;
  
  // Função para exibir a próxima pergunta
  function displayNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      currentQuestionIndex = 0; // Reinicia se chegou ao fim
    }
    document.getElementById('question-text').textContent = questions[currentQuestionIndex];
  }
  
  // Adicionando o evento de clique ao botão "Próxima"
  document.getElementById('next-btn').addEventListener('click', displayNextQuestion);
  