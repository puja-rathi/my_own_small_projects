const quizData = [
    {
      question: "What is the capital of France?",
      answers: {
        a: "Paris",
        b: "Madrid",
        c: "Rome",
        d: "Berlin"
      },
      correctAnswer: "a"
    },
    {
      question: "What is 2 + 2?",
      answers: {
        a: "3",
        b: "4",
        c: "5",
        d: "6"
      },
      correctAnswer: "b"
    },
    {
      question: "Which is the largest planet in our solar system?",
      answers: {
        a: "Venus",
        b: "Saturn",
        c: "Jupiter",
        d: "Earth"
      },
      correctAnswer: "c"
    }
  ];
  
  const questionContainer = document.getElementById('question-container');
  const nextBtn = document.getElementById('next-btn');
  const result = document.getElementById('result');
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const question = quizData[currentQuestion];
    const answers = [];
  
    for (const option in question.answers) {
      answers.push(
        `<label>
          <input type="radio" name="answer" value="${option}">
          ${option.toUpperCase()}: ${question.answers[option]}
        </label>`
      );
    }
  
    questionContainer.innerHTML = `
      <div>${question.question}</div>
      <div>${answers.join('<br>')}</div>
    `;
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return;
  
    const userAnswer = selectedOption.value;
    const correctAnswer = quizData[currentQuestion].correctAnswer;
  
    if (userAnswer === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionContainer.style.display = 'none';
    nextBtn.style.display = 'none';
    result.textContent = `You scored ${score}/${quizData.length}`;
  }
  
  nextBtn.addEventListener('click', checkAnswer);
  
  loadQuestion();
  