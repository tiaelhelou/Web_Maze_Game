window.onload = () => {

    const element = document.getElementsByClassName("boundary");
 
    document.getElementById("start").addEventListener("click", reset);

    function reset() {
        for (let i = 0; i < element.length; i++) {
            element[i].style.background = "#eeeeee";

        }
        document.getElementById("status").innerHTML = "Begin by moving your mouse over the S.";
    }

}
