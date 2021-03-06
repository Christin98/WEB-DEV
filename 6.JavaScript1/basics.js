//Numbers
4
9.3
-10

//Strings
"Hello World"
"43"

//Booleans
true
false

//null and undefined
null
undefined


//Numbers
4
9.3
-10

//We can do some math

4 + 10     //14
1/5        //0.2

//Modulo - remainder operator

10 % 3   //1
24 % 2   //0
15 % 11  //4

//Strings
//Single or Double quotes OK
"hello world"
'hello world'

//Concatenation
"charlie" + "brown"  //"charliebrown"

//Escape Characters start with "\"
"Singin \"Do wah diddy, diddy, dum diddy do\" "
"This is a backslash: \\"

//"Singin "Do wah diddy, diddy, dum diddy do" "
//"This is a backslash: \"

//Strings have a length property
"hello world".length  //11

//Access individual characters using [] and an index
"hello"[0]  //"h"
"hello"[4]  //"o"

//1.
100 % 3
// 1

//2.
("blah" + "blah")[6]
// "a"

//3.
"hello".length % "hi\\".length
// 2

//Variables are simply containers that store values
//They follow this pattern:
var yourVariableName = yourValue;

//They can store all of the values we've seen
var name = "Rusty";
var secretNumber = 73;
var isAdorable = true;

//Recall the stored value by calling the variable name
var name = "Rusty";
"hello there " + name    //"hello there Rusty"

var num = 37;
num + 3 + 10    //50

//We can also update existing variables
var name = "Robert";
name = "Bob";

//The two other primitives are null and undefined

//Variables that are declared but not 
//initialized are undefined
//The following variables are undefined:
var name;
var age;

//null is "explicitly nothing"
var currentPlayer = "charlie";
currentPlayer = null;   //game over

//buit-in methods 
//alert

alert("A Message");

// prompt

prompt("Enter something");

//console.log

console.log("Log Message");