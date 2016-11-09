var myArray = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
var target = myArray[Math.floor((Math.random() * 10))];
var guesses = 0;

function guess() {
    var userGuess = prompt("Pick one of the previously listed colors");
    guesses += 1;
    checkGuess(userGuess);
}

function checkGuess(userGuess) {

    if (myArray.indexOf(userGuess) == -1) {
        alert("Sorry I don't recognize that color! Try again!");
        guess();
    }
    else {
        if (userGuess === target) {
            alert("Congratulations!! " + "It took you " + guesses + " guesses");
            //document.getElementById("HTML").style.backgroundColor = target;
            document.getElementById("correct").style.backgroundColor = target;
            document.getElementById("correct").style.borderColor = target;
            document.getElementById("field").style.borderColor = target;
            document.getElementById("field").style.color = target;
            document.getElementById("h3").style.color = target;
            document.getElementById("button").style.borderColor = target;
            alert("Refresh to play again!");
        }
        else {
            if (target > userGuess) {
                alert("Incorrect. Your guess is alphabetically lower than what i am thinking of. Try again!");
            }
            if (target < userGuess) {
                alert("Incorrect. Your guess is alphabetically higher than what i am thinking of. Try again!");
            }
            guess();
        }
    }
}
