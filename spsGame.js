let user_score = 0;
let comp_score = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let comp_scr_para = document.querySelector("#comp_score");
let user_scr_para = document.querySelector("#user_score");


const getCompChoice = () => {
    const comp_ch = ["rock", "paper", "scissor"];
    // math.random generate number from 0 to decimal and if we multi by 3 then it'll provide no. bet 0 to 2.... so take it's floor(ceil).
    let randIdx = Math.floor(Math.random() * 3);
    return comp_ch[randIdx];
}

const gameDraw = () => {
    msg.innerText = `Game was a draw ! You can play it again`;
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, compChoice, userChoice) => {
    if (userWin) {
        user_score++;
        user_scr_para.innerText = user_score;
        msg.innerText = `User won ! ${userChoice} beats ${compChoice} by ${user_score}`;
        msg.style.backgroundColor = "green";
    } else {
        comp_score++;
        comp_scr_para.innerText = comp_score;
        msg.innerText = `Computer won ! ${compChoice} beats ${userChoice} by ${comp_score}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    let compChoice = getCompChoice();

    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true; // assume initially player was win.
        if (userChoice === "paper") {
            // comp choic : rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        } else if (userChoice === "scissor") {
            // comp choice - rock, paper
            userWin = compChoice === "rock" ? false : true;
        } else if (userChoice === "rock") {
            // comp choice scissor, paper
            userWin = compChoice === "paper" ? false : true; // false for comp choice is paper and true for scissor.
        }
        // calling showWinner method to display the winner 
        showWinner(userWin, compChoice, userChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});