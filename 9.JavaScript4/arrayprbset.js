// 1 printReverse

function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

printReverse([1,2,3]);

//Answer
// 3
// 2
// 1

//2 isUniform

function isUniform(arr) {
	var first = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== first) {
			return false;
		}
	}
	return true;
}

isUniform([1,1,1,1]);

//Answer - true

isUniform([1,1,1,3]);

//Answer - false

//3 sumArray

function sumArray(arr) {
	var sum = 0;
	arr.forEach(function (element) {
		sum += element;
	});
	console.log("sum = " + sum);
}

sumArray([1,6,7]);

//Answer - 14

//3 max

function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

max([1,4,9]);

//Answer - 9
