//1

function test(x,y) {
	return y - x;
}

//calling function

test(10, 40);

//2

function test(x) {
	return x*2;
	//Not going to execute because function terminates at return statement.
	console.log(x);
	return x/2;
}

//calling function

test(40);