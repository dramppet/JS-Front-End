document.addEventListener('DOMContentLoaded', solve);

function solve() {
  let questions = document.querySelectorAll(".question");
  let resultsDiv = document.getElementById("results");
  let correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let userAnswers = [];
  let currentQuestionIndex = 0;

  questions[currentQuestionIndex].style.display = "block";

  document.querySelectorAll(".quiz-answer").forEach(answer => {
      answer.addEventListener("click", function () {
          userAnswers.push(this.textContent.trim());
          questions[currentQuestionIndex].classList.add("hidden");
          currentQuestionIndex++;

          if (currentQuestionIndex < questions.length) {
              questions[currentQuestionIndex].classList.remove("hidden");
          } else {
              showResults();
          }
      });
  });

  function showResults() {
      let rightAnswers = userAnswers.filter((answer, index) => answer === correctAnswers[index]).length;
      let resultMessage = rightAnswers === 3 
          ? "You are recognized as top JavaScript fan!" 
          : `You have ${rightAnswers} right ${rightAnswers === 1 ? "answer" : "answers"}.`;
      
      document.querySelector("h1").textContent = resultMessage;
      resultsDiv.textContent = resultMessage;
      resultsDiv.style.display = "block";
  }
}