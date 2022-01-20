var nameUser = "";
var age = "";
var gender = "";
var nickName = "Mr";
var erorrMsg = "";

nameUser = prompt("How are you? \n Enter your name plz :) ");

gender = prompt("please enter your gender (male / female) without space");



age = prompt("How old are you ?");

parseInt(age) <= 0 ?
    alert("Your age is small \n you can back later") :
    confirm(`Welcome  ${nameUser} \n press yes to move the welcomeing message`);

gender.toLowerCase() === "male" ?
    nickName :
    gender.toLowerCase() === "female" ?
    (nickName = "Mrs") :
    (erorrMsg = "you entered answer wrong  :(");

erorrMsg != "" ?
    alert(` Welcome ${nameUser}`) :
    alert(`Welcome Again ${nickName}  ${nameUser}`);