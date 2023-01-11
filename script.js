
function randomNumber(){
    return Math.floor(Math.random()*10+1);
}

let random = randomNumber();

console.log(random);

while(true){

    let userInput = Number(prompt("Guess the number!"));

    if(userInput === random){
        console.log("Correct!");
        break;
    }else{
        console.log("Try again!");
    }
}