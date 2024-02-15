const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const yourchoice = choice.getAttribute("id");
        console.log(yourchoice);

        const arr = ["rock", "paper", "scissors"]
        let x = Math.floor(Math.random() * 3);
        const compchoice = arr[x];

        document.getElementById("your_choice").innerHTML = yourchoice;
        document.getElementById("comp_choice").innerHTML = compchoice;

        if (yourchoice === compchoice) {
            document.getElementById("winner").innerHTML = "It's a tie";
        }
        else if (yourchoice == "rock") {
            if (compchoice == "paper") {
                document.getElementById("winner").innerHTML = "You lose";
            }
            else {
                document.getElementById("winner").innerHTML = "You win";
            }
        }
        else if (yourchoice == "paper") {
            if (compchoice == "rock") {
                document.getElementById("winner").innerHTML = "You win";
            }
            else {
                document.getElementById("winner").innerHTML = "You lose";
            }
        }
        else {
            if (compchoice == "rock") {
                document.getElementById("winner").innerHTML = "You lose"
            }
            else {
                document.getElementById("winner").innerHTML = "You win";
            }
        }
    });
});