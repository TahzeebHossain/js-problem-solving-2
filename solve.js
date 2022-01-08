// multiplication and division

function multidiv(num1, num2){
    console.log("The Product of the two numbers is " + (num1*num2).toFixed(2));
    console.log("When you divide the first number with the second number you get " + (num1/num2).toFixed(2));
}

multidiv(456,7)


// Celsius to Fahrenheit & Fahrenheit to Celsius

function temperatureconverter (celsius, fahrenheit) {
    let convertedFahrenheit = (9*celsius + (32*5))/5;
    console.log(celsius +" "+ "Celsius is equal to " + convertedFahrenheit + " " + "Fahrenheit");

    let convertedCelsius = (5 * (fahrenheit-32))/9;
    console.log(fahrenheit + " " + "Fahrenheit is equal to " + convertedCelsius + " " + "Celsius");
}

temperatureconverter(4,14);

//tell if one number is positive and the other negative

function plusOrMinusdual(numberOne, numberTwo) {
    if (numberOne > 0 && numberTwo < 0){
        console.log(`${numberOne} is positive and ${numberTwo} is negative`);
    } else if (numberOne < 0 && numberTwo > 0){
        console.log(`${numberOne} is negative and ${numberTwo} is positive`);
    } else if (numberOne > 0 && numberTwo > 0){
        console.log(`${numberOne} and ${numberTwo} are both positive`);
    } else if (numberOne < 0 && numberTwo < 0) {
        console.log(`${numberOne} and ${numberTwo} are both negative`);
    } else {
        console.log("Both Numbers are 0");
    }
}

plusOrMinusdual(-12,-12);





//Check if the number is positive or negative

function plusOrMinus(givenNumber) {
    if (givenNumber > 0) {
        console.log(`${givenNumber} is a Positive Number`);
    } else if (givenNumber === 0) {
        console.log(`${givenNumber} is 0`);
    } else {
        console.log(`${givenNumber} is a negative Number`);
    }
}

plusOrMinus(0)

//Removing a character from a string and returning the new string
let phraseSpoken = "I am not a Coder";

let phraseCOrrected = phraseSpoken.split("not");

console.log(phraseCOrrected);

let newPhrase = phraseCOrrected.join(" ");

console.log(newPhrase);

//Reverse a string

function reverser(str){
    let diced = str.split("");
    let flipped = diced.reverse();
    let resversedString = flipped.join("");
    console.log(resversedString);
}

reverser("clear");
