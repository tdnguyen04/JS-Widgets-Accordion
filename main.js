const allQuestions = document.querySelectorAll(".question");
const allQuestionsIcons = document.querySelectorAll(".icon");

allQuestionsIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const question = icon.parentElement.parentElement;
    question.classList.toggle("show-answer");
  });
});
