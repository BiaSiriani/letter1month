// Definindo as perguntas em formato JSON
const questions = [
    "Qual é o seu momento favorito do dia juntos?",
    "O que mais te atraiu quando vocês se conheceram?",
    "Qual é o seu lugar favorito?",
    "Qual é a melhor lembrança que vocês têm juntos?",
    "Qual foi o primeiro filme que assistiram juntos?",
    "O que mudou na sua vida desde que conheceu seu amor?",
    "Qual foi o primeiro presente que vocês trocaram?",
    "Qual música que te faz lembrar vocês dois?",
    "Qual é o maior sonho de vocês como casal?",
    "Qual é a qualidade do seu parceiro que você mais admira e gostaria de desenvolver em si mesmo?",
    "Qual foi o primeiro momento em que você percebeu que queria ter algo sério com seu amor?",
    "Se pudessem reviver um dia específico da sua história juntos, qual escolheriam?",
    "Qual foi o momento mais engraçado que vocês viveram juntos?",
    "Quais são os seus planos para comemorar o próximo aniversário de namoro?",
    "Qual foi o momento mais romântico que vocês viveram juntos?",
    "Quais são as características do seu parceiro que você mais admira?",
    "Qual é a atividade ou programa que vocês mais gostariam de fazer juntos?",
    "Qual é a coisa mais importante que já fizeram um pelo outro?",
    "Qual foi a maior surpresa que seu parceiro lhe proporcionou?",
    "Qual foi o momento mais marcante desse primeiro mês juntos?",
    "Quais são os seus valores e princípios mais importantes?",
    "Quais são os seus pratos e comidas favoritos?",
    "Quais são os seus hobbies e interesses favoritos?",
    "Qual é o seu livro, filme e música preferidos?",
    "Quais são os seus maiores medos e preocupações?",
    "O que você mais aprecia em si mesmo? E o que te incomoda?",
    "Como você gostaria de ser lembrado pelas pessoas?",
    "Quais são as suas principais manias ou hábitos diários?",
    "Você tem algum talento ou habilidade especial que as pessoas não conhecem?"
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
  