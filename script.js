const score = {
    correct: 0,
    wrong:0
}

$(document).ready(function(){
   $("form").on("submit", function(event){
        event.preventDefault();
        handleSubmit();
    });
});

function handleSubmit(){
//add class to correct answer to turn it green on submit.

   if($("input:radio[class='correctAnswer']").is(":checked")) {
        $(".correctAnswer").next().addClass("green");
        console.log('correct'); 
        score.correct++;


        //to turn correct answers green
   };


   if($("input:radio[class='wrongAnswer']").is(":checked")) {
    $(".wrongAnswer").next().addClass("red");
    console.log(score.wrong);
    //to turn wrong answers red
    score.wrong++ ;
    //to add up wrong answers
    } 



   if($("input:radio[class='wrongAnswer']").is(":checked")) {
    
    } 


};


    //bracket colourizer

 /*   $(".wrongAnswer").on("click", function(){
        alert("Incorrect");*/
   // });
  // $(".correctAnswer").on("click",function(){
      //  $(".correctAnswer").addClass("green");
   // });
/*
This is a trivia game that will have 6 multiple choice questions.

1. Create a landing page that welcomes the user and has a start button to begin the quiz.

2. The correct answer will become green while the incorrect answers will be red after an option is clicked. (add a submit button and radio buttons for multiple choice options)

3. Put the correct answer in an object/array, and hard code the rest of the quiz in html
*/