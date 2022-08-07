const option1 = document.getElementById("option1"),
    option2 = document.getElementById("option2"),
    option3 = document.getElementById("option3"),
    option4 = document.getElementById("option4");
let currentScore = 0;
let currentProblem = 1;
let product = 0;
let selection = 0;


//Provided random number and shuffle array functions
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function shuffleArray(arr) {
    return arr.sort(function (a, b) { return Math.random() - 0.5 })
}

function createQuestion() {
    let operand1 = getRandomNumber(10);
    let operand2 = getRandomNumber(10);
    product = operand1 * operand2;
    let showExpression = document.querySelector('.expression');
    //formats equation to screen
    showExpression.innerText = operand1 + " x " + operand2;

    let array = [product, getRandomNumber(81), getRandomNumber(81), getRandomNumber(81)]
    shuffleArray(array);

    //initializes each HTML li element as array index
    option1.innerHTML = array[0];
    option2.innerHTML = array[1];
    option3.innerHTML = array[2];
    option4.innerHTML = array[3];

}


function checkAnswer(selection) {
    selection = document.getElementById(selection).innerHTML;
    console.log(selection);
    console.log(product)

    //correct answers
    if (selection == product) {
        currentScore++;
        document.getElementById("currentScore").innerHTML = currentScore;
    }
    //wrong answers
    currentProblem++;
    document.getElementById("currentProblem").innerHTML = currentProblem;

    createQuestion();
    //ends game if 10 problems are completed
    if (currentProblem > 10) {
        let showHide = document.querySelectorAll(".show-hide");
        showHide.forEach((item) => {
            item.style.display = "none";
        })
        document.getElementById("problem").innerText = "Problem 10/10 | Score " + currentScore;
    }
}


btnStartOver.addEventListener("click", () => {
    
    location.reload()
});

createQuestion();