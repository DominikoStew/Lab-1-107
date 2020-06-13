

/*console.log("Hello from Node!");

var name = "Dominique Steward";
var age = 27;
var average = 12.34;
var found = false;

let another = "asasd";

function test(){
    var a = 1;
    console.log("This is a fn");

    for(var i=0; i< 10; i++){
        var b= 2;
        let y = 2;
        console.log(i);
    }

    console.log(i);
}

function sayHello(name){
    console.log("Hi there, " + name);
}

test();
test();

sayHello("Buddy");
sayHello(name);*/


var evens = []; // put here only event numbers

var mathLib = require('')
function exc1(){
    for(let i= 1; i <= 10; i++){
        if(i != 3 && i !=7) {
        console.log(i);
        }
    }
}

function exc2(howMany){

    for(let i =0; i < (howMany *2); i++){
        var res = i % 2;
        if(res == 0){
            console.log("even:" + i);
            evens.push (i);
        }
    }
}

exc1();

exc2();
console.log(mathLib.sum(21,21));

var res = mathLib.divide(12,8);
console.log(res);

var two = mathLib.divide(42,0);
console.log(two);