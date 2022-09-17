window.onload = () => {

    const element = document.getElementsByClassName("boundary");

    let status = 0;
    let end ;

    document.getElementById("start").addEventListener("mousemove", start, false);

    function start() {

        if(status == 0){
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


    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener("mousemove", boundarymove, false);

    }

    function boundarymove() {

        if (end == 0) {
            for (let i = 0; i < element.length; i++) {
                element[i].style.background = "red";

            }
            document.getElementById("status").innerHTML = "You Lose :(";
            status = 0;
            end =1;
        }
    }


    document.getElementById("end").addEventListener("mousemove", endmove, false);

    function endmove() {
        if (status == 1) {

            document.getElementById("status").innerHTML = "You Win :)";
            end = 1;
        }
    }

}
