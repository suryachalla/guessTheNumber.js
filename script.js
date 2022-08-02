const mysteryNUmber = Math.trunc(Math.random()*20);

let score = document.getElementById("score").textContent;
let highscore = 0;

const reset = document.getElementById("reset").addEventListener('click', function(){
    score = 20;
    document.getElementById("mysteryNumber").value = "?";
    document.querySelector("body").style.backgroundColor = "black"
    document.getElementById("checkNumber").value = "";
    document.getElementById("score").textContent = 20;
})

const checkNumberBtn = function(){

    const guess = Number(document.getElementById("checkNumber").value);

    const message = document.getElementById("status");

    if(!guess){
        message.innerHTML = `🤦‍♀️Invalid Input`;
    }else if(guess == mysteryNUmber){
        document.getElementById("mysteryNumber").value = mysteryNUmber;
        message.textContent = `🎉You win`;
        document.querySelector("body").style.backgroundColor = "Aquamarine";

        if(score > highscore){
            highscore = score;
            document.getElementById("hScore").textContent = highscore;
        }
        //when guess is higher
    }else if(guess > mysteryNUmber){
        if(score > 1){
        message.innerHTML = `📈 too high`;
        score--;
        document.getElementById("score").textContent = score;
        }else{
            message.innerHTML = `🔥 You lose`;
            document.querySelector("body").style.backgroundColor = "red";
            ;
        }
        //when guess is lower
    }else if(guess < mysteryNUmber){
        if(score > 1){
            message.innerHTML = `📈 too low`;
            score--;
            document.getElementById("score").textContent = score;
        }else{
                message.innerHTML = `🔥 You lose`;
                document.querySelector("body").style.backgroundColor = "red";
                document.getElementById("score").textContent = "0"
            }
    }
}



    
