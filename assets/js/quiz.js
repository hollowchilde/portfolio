function funcion_topnav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  const startButton = document.getElementById('start-btn')
  const nextButton = document.getElementById('next-btn')
  const questionContainerElement = document.getElementById('question-container')
  const questionElement = document.getElementById('question')
  const answerButtonsElement = document.getElementById('answer-buttons')
  
  let shuffledQuestions, currentQuestionIndex
  let puntos=0
  
  startButton.addEventListener('click', startGame)
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })
  
  function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  }
  
  function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
  }
  
  function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (selectedButton.dataset.correct){
        puntos = puntos+1
    }
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      alert("Obtuviste "+ puntos+ " bolupuntos!")
      puntos = 0  
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
  
  const questions = [
    {
      question: '¿Welcome to the jungle?',
      answers: [
        { text: 'No, no me gustan los Guns', correct: true },
        { text: 'We have fun and games', correct: false }
      ]
    },
    {
      question: '¿Si cae agua del cielo, que pasa?',
      answers: [
        { text: 'te estas duchando', correct: true },
        { text: 'Te baldearon', correct: true },
        { text: 'Eh?', correct: false },
        { text: 'Llueve', correct: true }
      ]
    },
    {
      question: '¿Youre a wizard,    ?',
      answers: [
        { text: 'Frodo', correct: false },
        { text: 'Percy', correct: false },
        { text: 'Harry', correct: true },
        { text: 'Tu vieja', correct: true }
      ]
    },
    {
      question: 'Véngame Kimba',
      answers: [
        { text: 'Hakuna Matata', correct: false },
        { text: 'Eh, digo Simba', correct: true },
        { text: 'Ohana significa familia', correct: false }
      ]
    },
    {
        question: '¿A donde va la gente cuando llueve?',
        answers: [
          { text: 'Siempre hay un lugar donde parar', correct: true },
          { text: 'Un dia de paseo en Santa Fe', correct: true },
          { text: 'Me hago una balsa', correct: true },
          { text: 'Zapatos rotos', correct: true }
        ]
      }
  ]