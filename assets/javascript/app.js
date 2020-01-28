//set up variables
//set up functions
//run 

var time = 0;
var currentQuestion = 0;
var playerAnswer = [];
var converted = timeConverter(time);
var gifs = ["assets/images/giphy-1.gif", "assets/images/giphy-2.gif", "assets/images/giphy-3.gif", "assets/images/giphy-4.gif"];
var correctGif = ["assets/images/giphy-5.gif", "assets/images/giphy-5.gif", "assets/images/giphy-5.gif", "assets/images/giphy-5.gif"];
var incorrectGif = ["assets/images/giphy-6.gif", "assets/images/giphy-6.gif", "assets/images/giphy-6.gif", "assets/images/giphy-6.gif"];
var correctAnswers = [
    "100 years",
    "Temperature",
    "8.5 ft",
    "It looks like a jellyfish",
];
var right = 0;
var wrong = 0;

// Questions
// how long does the average sea turtle live? 100 yrs
// what dictates the sex of a sea turtle? temp
// how big is the largest sea turtle? 8.5 ft
// why do sea turtles often eat plastic? jellyfish

// Create an array that contains the questions & answers
var quizItems = [
    {
        question: "How long does the average sea turtle live?",
        choices: [
            "12 years",
            "20 years",
            "60 years",
            "100 years",]
    },
    {
        question: "What dictates the sex of a sea turtle?",
        choices: [
            "Temperature",
            "The tide",
            "A higher power",
            "Fate"
        ]
    },
    {
        question: "How big was the largest sea turtle",
        choices: [
            "8.5 ft",
            "13 ft",
            "6.5 ft",
            "20 ft"
        ]
    },
    {
        question: "Why do sea turtles often eat plastic?",
        choices: [
            "They have nothing else to eat",
            "It tastes good",
            "They're sleeping",
            "It looks like a jellyfish"
        ]
    },
];

$("#timer").text(converted);

// Hide all but start button
$("#question").hide();
$("#timer").hide();
$("#choices").hide();
$("#next").hide();
$("#gameOver").hide();

// When the game ends
function gameOver() {
    $("#question").hide();
    $("#timer").hide();
    $("#results").hide();
    $("#choices").hide();
    $("#gameOver").show();
    $("#gif").html("<img src=assets/images/giphy-8.gif>");
    //Show score
    $("#right").text("Correct: " + right);
    $("#wrong").text("Inorrect: " + wrong);
}

// pull info from arrays
function displayQuestions() {
    if (currentQuestion >= 0) {
        $("#question").show();
        $("#gif").show();
        displayImage();
        $("#question").html(quizItems[currentQuestion].question);
    }
}

// Show choices
function displayChoices() {
    $("#choices").show();
    $("#choice1").html(quizItems[currentQuestion].choices[0]);
    $("#choice2").html(quizItems[currentQuestion].choices[1]);
    $("#choice3").html(quizItems[currentQuestion].choices[2]);
    $("#choice4").html(quizItems[currentQuestion].choices[3]);

    //When out of questions - gameover
    if (currentQuestion > 4) {
        gameOver();
    }
}

// Answer choice
function pickAnswer() {
    $("#choice1").click(function () {
        playerAnswer.push(quizItems[currentQuestion].choices[0]);
        console.log("player answer: " + playerAnswer);

        stop();
        reset();
        checkAnswers();
        showAnswer();

    });

    $("#choice2").click(function () {
        playerAnswer.push(quizItems[currentQuestion].choices[1]);
        console.log("player answer: " + playerAnswer);

        stop();
        reset();
        checkAnswers();
        showAnswer();

    });

    $("#choice3").click(function () {
        playerAnswer.push(quizItems[currentQuestion].choices[2]);
        console.log("player answers: " + playerAnswer);

        stop();
        reset();
        checkAnswers();
        showAnswer();

    });

    $("#choice4").click(function () {
        playerAnswer.push(quizItems[currentQuestion].choices[3]);
        console.log("player answers: " + playerAnswer);

        stop();
        reset();
        checkAnswers();
        showAnswer();

    });
}

function displayImage() {
    $("#gif").html("<img src=" + gifs[currentQuestion] + ">");
}


// TIMER
// Reset function for timer
function reset() {
    // Start 30 seconds
    time = 30;
    $("#timer").text("00:30");
    $("#question").empty();
    $("#answers").empty();
}
// Function starts timer
function start() {
    intervalId = setInterval(count, 1000);
    $("#timer").show("0:05");
}
// Stop timer
function stop() {
    console.log("stop");
    clearInterval(intervalId);
}
// Time countdown
function count() {
    time--;
    var converted = timeConverter(time);
    $("#timer").text(converted);

    if (time === 0) {
        stop();
        reset();
        playerAnswer.push("time's up!");
        console.log(playerAnswer);
        showAnswer();
    }
}
// Converts timer
function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}

// go to next question 
function nextQuestion() {
    if (currentQuestion <= 4) {
        reset();
        displayQuestions();
        displayChoices();
        console.log(currentQuestion);
    } else {
        gameOver();
    }
}

// Buttons

// Start button
$("#start").click(function () {
    // Set timer
    time = 5;
     //Start timer
     start();
     count();
    // Hide button
    $("#start").hide();
    $("#instructions").hide();
    $("#timer").show();
    // Display the first question
    pickAnswer();
    displayQuestions();
    displayChoices();

});

// Play again
$("#playAgain").click(function () {
    // timer set
    document.location.reload(true);
});

 // Check answers
function checkAnswers() {
    console.log(playerAnswer)
    if (playerAnswer[currentQuestion] === correctAnswers[currentQuestion]) {
        console.log("correct");
        right++;
        console.log("right " + right);

    }
    if (playerAnswer[currentQuestion] !== correctAnswers[currentQuestion]) {
        console.log("incorrect");
        wrong++;
        playerAnswer[currentQuestion] = "Incorrect";
        console.log("wrong " + wrong);
    }
}

// Next
$("#next").click(function () {
    $("#timer").show();
    $("#answer").hide();
    $("#result").hide();
    $("#next").hide();
console.log(currentQuestion)
    if (currentQuestion < 4) {
        start();
        displayQuestions();
        displayChoices();
    }
    else {
        gameOver();
    }

});


function showAnswer() {
    $("#timer").hide();
    $("#question").hide();
    $("#choices").hide();
    $("#answer").show();
    $("#next").show();
    $("#result").show();
    $("#resultDescription").show();

    if (playerAnswer[currentQuestion] === correctAnswers[currentQuestion]) {
        $("#gif").html("<img src=" + correctGif[currentQuestion] + ">");
        $("#result").html("Right Answer :)");
        $("#resultDescription").html("You got it!");
    }
    if (playerAnswer[currentQuestion] === "Incorrect"){
        console.log("Incorrect")
        $("#gif").html("<img src=" + incorrectGif[currentQuestion] + ">");
        $("#incorrect").hide();
        $("#result").html("Wrong Answer :(");
        $("#resultDescription").html("The answer is " + correctAnswers[currentQuestion] + "");
        
    } else if (playerAnswer[currentQuestion] === "time's up!"){
        console.log("time's up!")
        $("#gif").html("<img src=" + incorrectGif[currentQuestion] + ">");
        $("#incorrect").html("Times Up");
        $("#resultDescription").html("The answer is " + correctAnswers[currentQuestion] + "");
           
    }
    // if (playerAnswer === "time's up!") {
    //     $("#gif").html("<img src=" + incorrectGif[currentQuestion] + ">");
    //     $("#result").html("Wrong Answer :(");
    //     $("#resultDescription").html("The answer is " + correctAnswers[currentQuestion] + "");

    // } else if (playerAnswer[currentQuestion] !== correctAnswers[currentQuestion]) {
    //     $("#gif").html("<img src=" + incorrectGif[currentQuestion] + ">");
    //     $("#incorrect").html("Times Up");
    //     $("#result").html("Wrong Answer :(");
    //     $("#resultDescription").html("The answer is " + correctAnswers[currentQuestion] + "");
    // }
    console.log(playerAnswer)

    currentQuestion++;
    console.log(currentQuestion);

}

