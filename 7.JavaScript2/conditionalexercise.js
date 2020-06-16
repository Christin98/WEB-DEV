var age = Number(prompt("What is your age?"));

if (age < 0) {
	console.log("Come back when you are out of womb.");
}

if (age === 21) {
	console.log("Happy 21st bithday.");
}

if (age % 2 !== 0) {
	console.log("Your age is odd.");
}

if (age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square.")
}