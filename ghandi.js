document.addEventListener("DOMContentLoaded", () => {
  const quizQuestions = [
    {
      question:
        "1. Wie lautet Gandhis bekannter Ehrenname, der übersetzt „Große Seele“ bedeutet?",
      options: ["Bapu", "Mahatma", "Satyagraha"],
      correct: 1,
    },
    {
      question:
        "2. In welchem indischen Bundesstaat wurde Gandhi im Jahr 1869 geboren?",
      options: ["Gujarat", "Maharashtra", "Punjab"],
      correct: 0,
    },
    {
      question:
        "3. Welches Fach studierte Gandhi in London, um seinen Beruf auszuüben?",
      options: ["Medizin", "Philosophie", "Rechtswissenschaften"],
      correct: 2,
    },
    {
      question:
        "4. In welchem Land setzte sich Gandhi vor seiner Rückkehr nach Indien über 20 Jahre gegen Rassentrennung ein?",
      options: ["Südafrika", "Großbritannien", "Australien"],
      correct: 0,
    },
    {
      question:
        "5. Wie nennt man Gandhis Konzept des gewaltlosen, friedlichen Widerstands?",
      options: ["Ahimsa / Satyagraha", "Karma", "Nirvana"],
      correct: 0,
    },
    {
      question:
        "6. Welches alltägliche Gewürz/Mittel stand im Mittelpunkt seines berühmten Protestmarsches im Jahr 1930?",
      options: ["Pfeffer", "Salz", "Curry"],
      correct: 1,
    },
    {
      question:
        "7. Welches Symbol wählte Gandhi für die wirtschaftliche Unabhängigkeit Indiens (und ist oft auf Bildern mit ihm zu sehen)?",
      options: ["Das Spinnrad", "Der Pflug", "Die Lotusblüte"],
      correct: 0,
    },
    {
      question:
        "8. In welchem Jahr erreichte Indien schließlich die vollständige Unabhängigkeit von der britischen Kolonialherrschaft?",
      options: ["1939", "1945", "1947"],
      correct: 2,
    },
    {
      question: "9. Wie verstarb Mahatma Gandhi im Januar 1948 in Neu-Delhi?",
      options: [
        "An Altersschwäche",
        "Durch ein Attentat",
        "Durch einen Hungerstreik",
      ],
      correct: 1,
    },
    {
      question:
        "10. Welcher weltberühmte amerikanische Bürgerrechtler wurde maßgeblich von Gandhis gewaltfreiem Protest inspiriert?",
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
          feedbackText.innerText = "✨ Richtig geantwortet!";
          feedbackText.style.color = "#2E7D32";
          score++;
        } else {
          button.style.backgroundColor = "#C62828";
          button.style.color = "#FFFFFF";
          feedbackText.innerText = `❌ Leider falsch. Richtig gewesen wäre: ${currentData.options[currentData.correct]}`;
          feedbackText.style.color = "#C62828";
        }

        nextButton.style.display = "inline-block";
        if (currentQuestionIndex === quizQuestions.length - 1) {
          nextButton.innerText = "Ergebnis anzeigen ➔";
        } else {
          nextButton.innerText = "Nächste Frage ➔";
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
                        <h4 style="font-size: 1.5rem; margin-bottom: 10px;">🎉 Quiz beendet!</h4>
                        <p style="font-size: 1.2rem;">Du hast <strong>${score} von 10</strong> Fragen richtig beantwortet.</p>
                        <p style="margin-top: 15px; color: #555;">${getFinalEvalMessage(score)}</p>
                        <button onclick="window.location.reload();" class="quiz-btn" style="background:#2C3E50; color:white; margin-top:20px;">Quiz neustarten</button>
                    </div>
                `;
        feedbackText.style.color = "#2C3E50";
      }
    });
  }

  function getFinalEvalMessage(finalScore) {
    if (finalScore === 10)
      return "Perfekt! Du bist ein absoluter Gandhi-Experte! 🌟";
    if (finalScore >= 7)
      return "Sehr gut! Du kennst dich hervorragend mit der indischen Geschichte aus. 👍";
    if (finalScore >= 4)
      return "Gutes Mittelfeld! Einiges hast du schon behalten, anderes kannst du auf der Seite noch nachlesen. 📚";
    return "Da ist noch Luft nach oben. Lies dir die Textabschnitte oben noch einmal durch und versuche es erneut! 🧭";
  }

  loadQuestion();
});
