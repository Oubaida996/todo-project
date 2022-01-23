// ================================================Start Task 5

// =====Start Declear Golbal Variables For Task 5

// var nameUser = "";
// var age = "";
// var gender = "";
// var nickName = "Mr";
// var erorrMsg = "";

// ======End Declear Golbal Variables For Task 5

// nameUser = prompt("How are you? \n Enter your name plz :) ");

// gender = prompt("please enter your gender (male / female) without space");

// age = prompt("How old are you ?");

// parseInt(age) <= 0
//   ? alert("Your age is small \n you can back later")
//   : confirm(`Welcome  ${nameUser} \n press yes to move the welcomeing message`);

// gender.toLowerCase() === "male"
//   ? nickName
//   : gender.toLowerCase() === "female"
//   ? (nickName = "Mrs")
//   : (erorrMsg = "you entered answer wrong  :(");

// erorrMsg != ""
//   ? alert(` Welcome ${nameUser}`)
//   : alert(`Welcome Again ${nickName}  ${nameUser}`);

// ====================================================End Task 5

// ====================================================Start Task 6

// ======Start Declear Golbal Variables For Task 6

let questions = [
    "Do you love pets ?",
    "Do you have a pet ?",
    "Are you smart ?",
];

let answers = [];

var defulteAnswer = "Invalid";

// ======End Declear Golbal Variables For Task 6

//=====Start Function to Check Answer

function checkAnswer(answer) {
    return answer == "" ? (answer = defulteAnswer) : answer;
}

//=====End Function to Check Answer

//=====Start Function to qustions

function question(questions) {
    let i = 0;
    do {
        let answer; // Recive what the user will entered
        answer = prompt(questions[i]);

        let result = checkAnswer(answer); // Function to check the answer if empty

        answers.push(result); // Add the the answer into array Answer.

        i++;
    } while (i < questions.length);
}

//=====End Function to qustions

//=====Start Function to print Array

function printFinal() {
    for (let index = 0; index < questions.length; index++) {
        console.log(`${questions[index]} : ${answers[index]} `);
    }
}

//=====End Function to print Array

//===================Strat Main Code

alert("Yes / No Questions");

question(questions);

printFinal();

//===================End Main Code

// =====================================================End Task 6