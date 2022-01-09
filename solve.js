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

//two objects

const studentOneDetails = {
    firstName: "Tahjeeb",
    lastName: "Omio",
    birthDate: "16, January 1994",
    declareBDay: function() {
        console.log(`${this.firstName} ${this.lastName} is his name and he came to earth in ${this.birthDate}`)
    },
    prediction: function(){
        console.log(`${this.lastName} will one day become known for the most number of naps taken on daily bus journeys`)
    }

}
console.log(studentOneDetails.declareBDay());
console.log(studentOneDetails.prediction());

const movieRecord = {
    movieName: "Spiderman: No Way Home",
    directorName: "Jon Watts",
    leadActor: "Tom Holland",
    endingSequence: "They all forget about him",
    nextMovie: function() {
        console.log(`The movie after ${this.movieName} will be Doctor Strange: Multiverse of Madness`)
    },
    upcomingMovieoftheactor: function(){
        console.log(`${this.leadActor} will star in the video game movie adaptation of Uncharted`)
    }

}
console.log(movieRecord.nextMovie());
console.log(movieRecord.upcomingMovieoftheactor());
