
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit");
            }
            else {
                let gameType = this.getAttribute("data-type");
                alert(`You clikcked ${gameType}`)
            }
        })
    }
})

function runGame() {

}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditiionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion(){

}