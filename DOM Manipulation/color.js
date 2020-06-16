var b = document.querySelector("button");
var isPurple = false;
b.addEventListener("click", function() {
    // if(isPurple) {
    //     document.body.style.background = "white";
    //     isPurple = false;
    // } else {
    //     document.body.style.background = "purple";
    //     isPurple = true;
    // }

    document.body.classList.toggle("purple");
});