document.addEventListener("DOMContentLoaded", () => {
  const quizQuestions = [
    {
      question:
        "1. What is Gandhi's famous honorary title, which translates to 'Great Soul'?",
      options: ["Bapu", "Mahatma", "Satyagraha"],
      correct: 1,
    },
    {
      question: "2. In which Indian state was Gandhi born in the year 1869?",
      options: ["Gujarat", "Maharashtra", "Punjab"],
      correct: 0,
    },
    {
      question:
        "3. What subject did Gandhi study in London to practice his profession?",
      options: ["Medicine", "Philosophy", "Law"],
      correct: 2,
    },
    {
      question:
        "4. In which country did Gandhi spend over 20 years fighting against segregation before returning to India?",
      options: ["South Africa", "Great Britain", "Australia"],
      correct: 0,
    },
    {
      question:
        "5. What is Gandhi's concept of non-violent, peaceful resistance called?",
      options: ["Ahimsa / Satyagraha", "Karma", "Nirvana"],
      correct: 0,
    },
    {
      question:
        "6. Which everyday seasoning/substance was at the center of his famous protest march in 1930?",
      options: ["Pepper", "Salt", "Curry"],
      correct: 1,
    },
    {
      question:
        "7. What symbol did Gandhi choose for India's economic independence (and is often seen with him in pictures)?",
      options: ["The spinning wheel", "The plow", "The lotus flower"],
      correct: 0,
    },
    {
      question:
        "8. In which year did India finally achieve full independence from British colonial rule?",
      options: ["1939", "1945", "1947"],
      correct: 2,
    },
    {
      question: "9. How did Mahatma Gandhi die in January 1948 in New Delhi?",
      options: ["Of old age", "By assassination", "Due to a hunger strike"],
      correct: 1,
    },
    {
      question:
        "10. Which world-famous American civil rights leader was significantly inspired by Gandhi's non-violent protest?",
      options: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks"],
      correct: 1,
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const feedbackText = document.getElementById("quiz-feedback");
  const nextButton = document.getElementById("next-question-btn");
  const currentNumSpan = document.getElementById("current-question-num");

  function loadQuestion() {
    feedbackText.innerText = "";
    nextButton.style.display = "none";
    optionsContainer.innerHTML = "";

    const currentData = quizQuestions[currentQuestionIndex];
    currentNumSpan.innerText = currentQuestionIndex + 1;
    questionText.innerText = currentData.question;

    currentData.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "quiz-btn";
      button.innerText = option;

      button.addEventListener("click", () => {
        const allButtons = optionsContainer.querySelectorAll(".quiz-btn");
        allButtons.forEach((btn) => (btn.disabled = true));

        if (index === currentData.correct) {
          button.style.backgroundColor = "#2E7D32";
          button.style.color = "#FFFFFF";
          feedbackText.innerText = "✨ Correct answer!";
          feedbackText.style.color = "#2E7D32";
          score++;
        } else {
          button.style.backgroundColor = "#C62828";
          button.style.color = "#FFFFFF";
          feedbackText.innerText = `❌ Unfortunately incorrect. The correct answer would have been: ${currentData.options[currentData.correct]}`;
          feedbackText.style.color = "#C62828";
        }

        nextButton.style.display = "inline-block";
        if (currentQuestionIndex === quizQuestions.length - 1) {
          nextButton.innerText = "Show results ➔";
        } else {
          nextButton.innerText = "Next question ➔";
        }
      });

      optionsContainer.appendChild(button);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
      } else {
        document.getElementById("quiz-container").style.display = "none";
        document.querySelector(".quiz-progress").style.display = "none";
        nextButton.style.display = "none";

        feedbackText.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <h4 style="font-size: 1.5rem; margin-bottom: 10px;">🎉 Quiz finished!</h4>
                        <p style="font-size: 1.2rem;">You answered ${score} out of 10 questions correctly.</p>
                        <p style="margin-top: 15px; color: #555;">${getFinalEvalMessage(score)}</p>
                        <button onclick="window.location.reload();" class="quiz-btn" style="background:#2C3E50; color:white; margin-top:20px;">Restart quiz</button>
                    </div>
                `;
        feedbackText.style.color = "#2C3E50";
      }
    });
  }

  function getFinalEvalMessage(finalScore) {
    if (finalScore === 10)
      return "Perfect! You are an absolute Gandhi expert! 🌟";
    if (finalScore >= 7)
      return "Very good! You have an excellent knowledge of Indian history. 👍";
    if (finalScore >= 4)
      return "Good middle ground! You've retained a few things, and you can read up on the rest on this page. 📚";
    return "There is still room for improvement. Read through the text sections above once more and try again! 🧭";
  }

  loadQuestion();
});
