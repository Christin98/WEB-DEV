//Check off specific todos y clicking
$("li").click(function() {
    // // alert("Clicked LI!");

    // //if li is gray
    // // console.log($(this).css("color"));
    // // if ($(this).css("color") === "gray") {
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     //turn it black
    //     // console.log("It is Currently gray");
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // }
    // //else
    // else {
    //     //turn it gray
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    //     // $(this).css("text-decoration", "line-through");
    // }
    // // $(this).css({
    // //     color: "gray",
    // //     textDecoration: "line-through"
    // // });
    // // // $(this).css("text-decoration", "line-through");
    $(this).toggleClass("completed");
});