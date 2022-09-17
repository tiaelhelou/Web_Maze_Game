window.onload = () => {

    const element = document.getElementsByClassName("boundary");

    let status = 0;

    document.getElementById("start").addEventListener("click", reset);

    function reset() {
        for (let i = 0; i < element.length; i++) {
            element[i].style.background = "#eeeeee";

        }
        document.getElementById("status").innerHTML = "Begin by moving your mouse over the S.";
        status = 0;
    }

    document.getElementById("end").addEventListener("mousemove", endmove, false);

    function endmove() {

        if (status == 1) {

            document.getElementById("status").innerHTML = "You Win :)";

        }

    }


    document.getElementById("boundary1").addEventListener("mousemove", boundarymove, false);


    function boundarymove() {

        for (let i = 0; i < element.length; i++) {
            element[i].style.background = "red";

        }
        document.getElementById("status").innerHTML = "You Lose :(";
        status = 0;
    }


}
