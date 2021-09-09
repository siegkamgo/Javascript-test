 //Javascript Crash Course (Clever Programmer)

//alert('Hello World');

// How to write a comment inline.(//)

console.log('Yooo!');

// 1. Variables

let x = 'Cozi';
console.log(x);

var  Randomnumber = 15;
// console.log(Randomnumber);


// let age = prompt('what is your age?');

// document.getElementById('outline').innerHTML = age;

// 2. Numbers in Javascript
let num1 = 8.5;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide(/), Multiply(*) and get remainders(%)
console.log(num1 % 6);

// Increment/decrement by 12 (or any number you want)
num1 += 12;
console.log(num1);

/*  3. Functions in Javascript 
        step 1. Create a function
        step 2. Call the function
*/

        // Create
    function web3() {
        console.log('This is my web3 learning journey');
    }

        // Call
        web3();

        /* Let's create a function that takes in a name and says hello followed by your name
        
        For example 

        Name: "Kamgo"
        Return: "Hello kamgo"
        */

        function greetings() {
            let name = prompt('What is your name?');
            let result = 'Hello' + ' ' + name; // String Concatenation
            console.log(result);
        }

        // greetings();

        // How do arguments work in functions?
        // How do we add 2 numbers together in a function?

        function sumNumbers(a, b) {
            let result = a + b;
            console.log(result);
        }

        sumNumbers(1278, 2369);

        /* While loops

        let num = 0;

        while( num < 200) {
            num += 2;
            console.log(num);
        }
        */

        // For loops
        for (let = num = 0; num <= 100; num++){
            console.log(num);
        }

        // Data Types
        let yourAge = 21; // Number
        let yourName = 'Bob'; // string
        let name = {first: 'Siegfried', last: 'Kamgo'} // Object
        let truth = false; // Boolean
        let groceries = [ 'apple', 'banana', 'oranges']; // Array
        let anything; // undefined
        let nothing = null; //value null


        /*let number = 0;
        while (number < 12) {
            number = number += 2;
            console.log(number);
        }
        */


        // Strings in Javascript (Common methods)

        // let fruits = 'apple';
        // let moreFruits = 'apple\nbanana';                           // New line
        // // console.log(moreFruits);


        // console.log(fruits.length);
        // console.log(fruits.indexOf('le'));
        // console.log(fruits.slice(3, 6));
        // console.log(fruits.replace('le', '123'));
        // console.log(fruits.toUpperCase(fruits));
        // console.log(fruits.toLowerCase(fruits));
        // console.log(fruits.charAt(3));
        // console.log(fruits[2]);


 // Eloquent Javascript book (Exercices)

 // Looping a triangle
 let numRows = 7;
 for(let counter = 0; counter < numRows; counter++ ){
     let toPrint = '#';
     for(let column = 0; column < counter; column++){
         toPrint += '#';
     }
    console.log(toPrint);

 }

 // FizzBuzz

 for (let x = 1; x <= 100; x++){
     if(x % 3 == 0 && x % 5 == 0) {console.log('FizzBuzz');}        // If number is divisible by both print 'Fizzbuzz'
        else if(x % 3 == 0 && x % 5 != 0) {console.log('Fizz');}    // If only divisible by 3, print 'Fizz'
        else if(x % 5 == 0){ console.log('Buzz')}                   // If only 5, print 'Buzz'
        else {console.log(x);}
}


// ChessBoard
let size = 8;
let grid = "";
for (let y = 0; y < size; y++){
    for ( let x = 0; x < size; x++){ 
        if ( (x + y) % 2 == 0) {grid += " ";}
        else { grid += "#";}
    }
    grid += "\n";
}
console.log(grid);


if(true && false){alert("true!");}

// While Loop + Boolean

let i = 15;
while(i < 100){
    console.log("Yes Yess!"); i++;
}


// Functions

// function about(name, age, country){
//     document.write( "<h2> Hi my name is " + name + ",");
//     document.write(" <h3>I am " + age);
//     document.write(" and I am from " + country + ".");
    
// }

// about("Sieg", 24, "Cameroon");
// about("Pissu", 30, "Turkey");
// about("Cisse", 23, "Liberia");


// ABSTRACTION and returning Values from functions

function add(x, y){
    return x+y;
}

function multiplication(a, b){
    // Let's imagine a= 4 and b= 5

    let toReturn = 0;
    // This means toReturn + a + a + a .... ( b times) 
    for(let counter = 0; counter<b; counter++){

        toReturn = add(toReturn, a);
    }

    return toReturn;

}
 

let answer = multiplication(30, 9);
console.log(answer);

// E.g. MULTIPLICATION
// 4*4 = 4+4+4+4
// We see that multiplication is just combining addition and Repetition
// For and While Loops


// Chapter 3 Exercises - FUNCTIONS;

// 1. MINIMUM

function min(a, b){
    if(a<b) return a;
    else return b;
}

console.log(min(3, 14));
console.log(min(0,-2000));



// 2. RECURSION

function isEven(a){
    if (a == 0) return true;
    else if (a == 1) return false;
    else if (a < 0) return isEven(-a)
    else return isEven(a - 2);
}

console.log (isEven(-24));


// 3. BEAN COUNTING

function countBs(string){
    let count = 0;
    for (let i = 0; i < string.lenth; i++){
        if (string[i] == "B"){
            count += 1;
        }
    }
}

function countChar(string, char){
    let count = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i] == char ){
            count+= 1;
        }
    }
    return count;
}

function countBs(string){
    return countChar(string, "B");
}

console.log(countBs("I eat Bananas and Beans every day BBB"));
console.log( countChar("good gods gggggoogoogo", "g"));







// ARRAYS in JS

// document.write("<h2>ARRAYS in JS:</h2>");

// let cars = ["Audi", "BMW", "Ford"];
// document.write("<h2> Car number one: " + cars[0]);
// document.write("<h2> Car number two: " + cars[1]);
// document.write("<h2> Car number three: " + cars[2]);

// cars.push("Tesla");

// document.write("<h2> Car number four: " + cars[3]);



// Here, we now have jQuery functionality

$(document).ready(function(){
    $("#submit").click(function(){

        let firstName = $("#fname").val();
        let lastName = $("#lname").val();
        console.log(firstName + " " + lastName);
    });
});




// Chapter 4: DATA Structures ARRAYS and OBJECTS

console.log(Object.keys({x: 0, y: 0, z: 2}));

let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

// let journal = [
//     {event: [ "work", "touched tree", "pizza", "running", "television"],
//     squirrel: false},
//     {events: ["work", "ice cream", "cauliflower", "lasanga", "touched tree", "brushed teeth"],
//     squirrel: false},
//     {events: [ "weekend", "cycling", "break", "peanuts", "beer"],
//     squirrel: true},
// ];

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

// LYCANTHROPE'S LOG

// let journal = [];

// function addEntry(events, squirrel) {
//     journal.push({events, squirrel});
// }
// console.log(journal);

// OBJECTS in JS

// var carObject = {producer: "BMW", year: 2008, distance: 2000};
// console.log(carObject.producer);

var car1 = {producer: "BMW", year: 2008, distance: 2000};
var car2 = {producer: "Mercedes", year: 1999, distance: 1000};
var car3 = {producer: "Peugot", year: 2016, distance: 1200};

car1.producer = "Tesla";
car1.transmission = "Automatic";
car1.model = ["model 3", "model S", "model T"];

var allCars = [car1, car2, car3];

console.log(car1);

// alert(allCars[0].transmission);

// FUNCTIONS ARGUMENTS AND TIMEOUT
// function yourNameManyTimes(toName, number){
//     for (let counter = 0; counter < number; counter++) {
//         toName();   
//     }
    
// }

// function nameAlert(){
//     alert("HIIIIIIIiiiiii");
// }

// yourNameManyTimes(nameAlert, 10);


// ANONYMOUS FUNCTIONS:

// setTimeout(function(){console.log("Coziiiiiiii")}, 1000);

// ITERATING AN ARRAY:

$.each(allCars, function(_,value){
    console.log(value); 
});

// DYBAMIC LISTS AND ASSIGNMENTS

// var fruits = ["Banana", "Mango", "Orange", "Apple"];

var fruits = [{name: "Banana", color: "Yellow", weigth: 5},
             {name: "Mango", color: "Ligth-green", weigth: 7},
              {name: "Orange", color: "Orange", weigth: 8},
             {name: "Apple", color: "Green", weigth:10} ];

function redrawList(){
            var list = $("#fruitlist");
            list.html("");

        $.each(fruits, function(index,value){
            
            console.log(value);
            $("<li/>").text(value.name + ", " + value.color + ", " + value.weigth).appendTo(list);
        });

        }

redrawList();

        $("#fruitButton").click(function(){
            let addFruitName = $("#addfruitName").val();
            let addFruitColor = $("#addfruitColor").val();
            let addFruitWeigth = $("#addfruitWeigth").val();

            let fruitObject = {name: addFruitName, color: addFruitColor, weigth: addFruitWeigth};
            
            fruits.push(fruitObject);
            console.log(fruits);

            redrawList();
        });

        let listOfNumbers = [2, 3, 5, 7, 11];
        console.log(listOfNumbers[2 - 1]);

        let doh = "Doh";
        console.log(typeof doh.toUpperCase);
        console.log(doh.toLowerCase());

        let sequence = [1, 2, 3];
            sequence.push(4);
            sequence.push(5);
            console.log(sequence.pop(1));
            console.log(sequence);


            let string = JSON.stringify({squirrel: false,
                events: ["weekend"]});
                console.log(JSON.parse(string).squirrel);



// CHAPTER 4 EXCERCISES:

//The Sum of a Range





// Promises(Solution to Callback Hell)


function timeOutPromise(){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, 2000);
});
    
}
            
timeOutPromise().then(function(){
    console.log("Connecting to database");

    return timeOutPromise();
}).then(function(){
    console.log("Reading from database");
    return timeOutPromise();
}).then(function(){
    console.log("Structuring Data");
    return timeOutPromise();
}).then(function(){
    console.log("Initiating send transaction");
    return timeOutPromise();
}).then(function(){
    console.log("Data sent!");
    return timeOutPromise();
}).then(function(){
    console.log("Task Completed...!");
    return timeOutPromise();
});



        









