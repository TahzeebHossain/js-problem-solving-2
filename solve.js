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
