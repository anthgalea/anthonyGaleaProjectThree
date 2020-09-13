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
  //add class to correct answer to turn it green on submit.
  // if ($("input:radio[class='correctAnswer']").is(":checked")) {
  //   $(".correctAnswer").next().addClass("green");
  //   console.log("correct");
  //   score.correct += 1;
  //   //to turn correct answers green
  // }
  // if ($("input:radio[class='wrongAnswer']").is(":checked")) {
  //   $(".wrongAnswer").next().addClass("red");
  //   //to turn wrong answers red
  //   score.wrong++;
  //   //to add up wrong answers
  // }
  // if ($("input:radio[class='wrongAnswer']").is(":checked")) {
  // }
  // function to advance user to next question
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
  //bracket colourizer
  /*
  This is a trivia game that will have 6 multiple choice questions.
  1. Create a landing page that welcomes the user and has a start button to begin the quiz.
  2. The correct answer will become green while the incorrect answers will be red after an option is clicked. (add a submit button and radio buttons for multiple choice options)
  3. Put the correct answer in an object/array, and hard code the rest of the quiz in html
  */

  //is valid selector to save check answer after option selected 