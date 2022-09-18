window.onload = () => {

    const element = document.getElementsByClassName("boundary");

    const name = prompt("Enter your name:");
    const pass = prompt("Enter your pass:");

    const i = localStorage.length;

    let score = 0;
    let user_key;

    for(let x = 0; x < localStorage.length; x++){

        if(localStorage.getItem(x) == name && localStorage.getItem(x+1) == pass){

            score = localStorage.getItem(x+2);
            document.getElementById("status").innerHTML = "Score: " + score;
            user_key = x;

        }
        else{
            localStorage.setItem(i, name);
            localStorage.setItem(i+1, pass);
            localStorage.setItem(i+2, score);
            document.getElementById("status").innerHTML = "Score: " + score;
            user_key = x;
        }
    }



    let status = 0;
    let end = 0;
    let startx = 0;
    let outbox = 0;

    document.getElementById("start").addEventListener("mousemove", start, false);

    function start() {

        if(status == 0 && end == 0){
            for (let i = 0; i < element.length; i++) {
                document.getElementById("start").addEventListener('mousemove', (event) => {
                    startx = event.clientX;
                });
            }
            status = 1;
            end = 0;
        }
    }

    document.getElementById("start").addEventListener("click", reset);

    function reset() {
        for (let i = 0; i < element.length; i++) {
            element[i].style.background = "#eeeeee";

        }
        document.getElementById("status").innerHTML = "Begin by moving your mouse over the S.";
        status = 0;
        end = 0;
    }

    document.addEventListener('mousemove', (event) => {


        outbox = event.clientX;
        if (status == 1 && end == 0 && outbox < startx) {
            status = 0;
            end = 1;
            document.getElementById("status").innerHTML = "Not Allowed! You lose :(";
        }

    });


    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener("mousemove", boundarymove, false);

    }

    function boundarymove() {

        if (end == 0 && status == 1) {
            for (let i = 0; i < element.length; i++) {
                element[i].style.background = "red";

            }
            score = score - 10;
            document.getElementById("status").innerHTML = "You Lose :( Score: " + score;
            status = 0;
            end = 1;
            score = score - 10;
            localStorage.setItem(user_key+2, score);
        }
    }


    document.getElementById("end").addEventListener("mousemove", endmove, false);

    function endmove() {
        if (status == 1 && end == 0) {

            score = score + 5;
            document.getElementById("status").innerHTML = "You Win :) Score: " + score;
            end = 1;
            localStorage.setItem(user_key+2, score);
        }
    }

}
