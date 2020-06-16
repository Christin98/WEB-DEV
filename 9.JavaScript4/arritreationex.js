// Using forEach

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ["red", "orange", "yellow", "green"];

numbers.forEach(function(color) {
	if (color % 3 === 0) {
		console.log(color);
	}
});

// Answer - 3 5 9

// Using for loop

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var colors = ["red", "orange", "yellow", "green"];

for (var i = 0; i < numbers.length; i++) {
	if (numbers[i] % 3 === 0) {
		console.log(numbers[i]);
	}
}

// Answer - 3 5 9
