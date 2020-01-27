//set up variables
//set up functions
//run 

var time = 0;
var currentQuestion = 0;

var correctAnswers = [
    "100 years",
    "Temperature",
    "8.5 ft",
    "It looks like a jellyfish",
];
var gifs = ["assets/images/giphy-1.gif", "assets/images/giphy-2.gif", "assets/images/giphy-3.gif", "assets/images/giphy-4.gif"];
var correctGif = ["assets/images/giphy-5.gif", "assets/images/giphy-5.gif", "assets/images/giphy-5.gif", "assets/images/giphy-5.gif"];
var incorrectGif = ["assets/images/giphy-6.gif", "assets/images/giphy-6.gif", "assets/images/giphy-6.gif", "assets/images/giphy-6.gif"];
var right = 0;
var wrong = 0;

//Questions
// how long does the average sea turtle live? 100 yrs
// what dictates the sex of a sea turtle? temp
// how big is the largest sea turtle? 8.5 ft
// why do sea turtles often eat plastic? jellyfish

// // Create an array that contains the questions & answers
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

// Hide all but start button
$("#question").hide();
$("#timer").hide();
$("#choices").hide();
$("#next").hide();
$("#gameOver").hide();

// When the game ends


// pull info from arrays


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
        playerAnswers.push("time's up!");
        console.log(playerAnswers);
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

// Buttons

// Start button
$("#start").click(function () {
    // Set timer
    time = 30;
    //Start timer
    start();
    count();
    // Display the first question
    pickAnswer();

    // Hide button
    $("#start").hide();
    $("#instructions").hide();
    $("#timer").show();


  // Play again

  // Next

  //Check answers