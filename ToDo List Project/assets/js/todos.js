//Check off specific todos y clicking
//click() does not work for newly added elements so using on() method
// $("li").click(function() {
//     // // alert("Clicked LI!");

//     // //if li is gray
//     // // console.log($(this).css("color"));
//     // // if ($(this).css("color") === "gray") {
//     // if ($(this).css("color") === "rgb(128, 128, 128)") {
//     //     //turn it black
//     //     // console.log("It is Currently gray");
//     //     $(this).css({
//     //         color: "black",
//     //         textDecoration: "none"
//     //     });
//     // }
//     // //else
//     // else {
//     //     //turn it gray
//     //     $(this).css({
//     //         color: "gray",
//     //         textDecoration: "line-through"
//     //     });
//     //     // $(this).css("text-decoration", "line-through");
//     // }
//     // // $(this).css({
//     // //     color: "gray",
//     // //     textDecoration: "line-through"
//     // // });
//     // // // $(this).css("text-decoration", "line-through");
//     $(this).toggleClass("completed");
// });

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
// $("span").click(function(event) {
//     // alert("clicked on span");
//     // $(this).parent().remove();
//     $(this).parent().fadeOut(500, function() {
//         $(this).remove();
//     });
//     event.stopPropagation();
// });

$("ul").on("click", "span", function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    // console.log("Key Press!");
    if (event.which === 13) {
        // console.log("Enter Pressed!");
        console.log($(this).val());
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        // $("ul").append("<li>THIS IS A NEW LI THAT IS APPENDED TO THIS UL!</li>");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});