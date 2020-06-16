// Higher Order Functions.

// Normal Function

function sing() {
	console.log("Twinkle Twinkle...");
	console..log("How I Wonder...");
}

// Higher Order Function

setInterval(sing, 1000); //repeats calling of sing() function every 1 sec.

//To stop execution of setInterval

stopInterval(2); // The argument number is a number returned by setInterval() function.

// setInterval with anonymous function

setInterval(function() {
	console.log("I AM A ANONYMOUS FUNCTION");
	console.log("THIS IS AWESOME!");
}, 2000);