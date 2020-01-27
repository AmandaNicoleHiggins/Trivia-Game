//set up variables
//set up functions
//run 


var correctAnswers = [
  "100 years", 
  "Temperature", 
  "8.5 ft", 
  "It looks like a jellyfish", 
];
var gifs = ["assets/images/giphy-1.gif", "assets/images/giphy-2.gif", "assets/images/giphy-3.gif", "assets/images/giphy-4.gif"];
var correctGif = ["assets/images/giphy-5.gif","assets/images/giphy-5.gif", "assets/images/giphy-5.gif", "assets/images/giphy-5.gif"];
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