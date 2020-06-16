//1 Function to check even number.

// function isEven(x) {
// 	if (x % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// OR

function isEven(x) {
	return x % 2 === 0;
}

//2 Function to print factorial of a number.

function factorial(x) {
	var x1 = 1;
	for (var i = 2; i <= x; i++) {
		x1 *= i;
	}
	return x1;
}

//3 Function to convert kebabcase to snakecase.

function kebabToSnake(str) {
	var myStr = str.replace(/-/g, "_");
	return myStr;
}
