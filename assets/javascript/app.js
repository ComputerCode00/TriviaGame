function guess() {
	document.getElementById("game1").style.visibility = "visible";
				// game will appear
	document.getElementById("click").style.display = "none";  
				// when globe picture is click, red box will disapppear
}

function check() {


var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var correct = 0;

						// add if and then??  
	//1 (=) to assign value to variable.. 2 (==) equals to whatever is on right side
	if (question1 == "Dortmund") {
		correct++;
	}

	if (question2 == "Moscow") {
		correct++;
	}

	if (question3 == "Dubai") {
		correct++;
	}

	if (question4 == "London") {
		correct++;
	}

	if (question5 == "Auckland") {
		correct++;
	}

	if (question6 == "Houston") {
		correct++;
	}
	
	if (question7 == "Amsterdam") {
		correct++;
	}


			//put picture to number of correct answers
var message = ["Keep at it, try again.", "Well done!!"];
var pictures = ["assets/images/passport.gif", "assets/images/picture.gif"];

var range;

	if (correct < 4) {
		range = 0;
	}

	if (correct > 4) {
		range = 1;
	}

document.getElementById("message").innerHTML = message[range];
document.getElementById("complete").style.visibility = "visible";
document.getElementById("question-correct").innerHTML = "You got " + correct + " cities right.";
document.getElementById("picture").src = pictures[range];

}

var number = 90;            //timer 1:30

    var intervalId;

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#clockTimer").html("<h2>" + number + "</h2>");

      if (number === 0) {
		
		stop();
        alert("Time's Up, click Check Answers!!!");
      }
    }

    function stop() {
		clearInterval(intervalId);
   		 }

   	 run();
