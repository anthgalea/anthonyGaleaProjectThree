const score = {
  correct: 0,
  wrong: 0,
};

let currentQuestion = 0;

function handleQuestionCheck() {
// inside handle submit if current question equals 7 then change question to zero and it will say play again. reset counter so that quiz can restart
$("button[class='checkAnswer']").on("click", function () {
  if ($("input:radio[class='correctAnswer']")) {
    $(".correctAnswer").next().addClass("green");
    console.log("correct");
    score.correct += 1;
    //to turn correct answers green
    }

  if ($("input:radio[class='wrongAnswer']")) {
    $(".wrongAnswer").next().addClass("red");
    //to turn wrong answers red
    score.wrong++;
    //to add up wrong answers
  }
    if ($("input:radio[class='wrongAnswer']")) {
    }
  });
  $("input[class='submitAnswer']").on("click", function () {
    nextQuestion(currentQuestion);
  });
}

  function nextQuestion() {
    $(`.container${currentQuestion}`).hide();
    currentQuestion++;
    $(".correctAnswer").next().removeClass("green");
    $(".wrongAnswer").next().removeClass("red");
    $(`.container${currentQuestion}`).show();
  }
  function showStart() {
    $(".startButton").on("click", function (event) {
      $(".startContainer").hide();
      nextQuestion();
    });
  }
  $(document).ready(function () {
    // $("form").on("submit", function (event) {
    showStart();
    handleQuestionCheck();
    $("form").on("submit", function (e) {
      e.preventDefault();
    });
  });

  //is valid selector to save check answer after option selected 