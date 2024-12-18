
/* 
CHALLENGE 1
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430
*/

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);



// CHALLENGE2: Temperature Converter (Switch Statements)
// Create a program that converts temperatures between Celsius and Fahrenheit and prints the result.

const temp = 100;
const type = 'CtoF'

const tempFahrenheit = temp * 9 / 5 + 32;
const tempCelsius = (temp - 32) * 5 / 9;

switch (type) {
  case 'CtoF':
    console.log(`${temp}°C is equal to ${tempFahrenheit}°F`);
    break;
  case 'FtoC':
    console.log(`${temp}°F is equal to ${tempCelsius}°C`);
    break;
  default:
    console.log('Invalid conversion type!');
    break;
}


// Challenge 3: Leap Year Checker(Ternary operator)
// Write a program to determine whether a given year is a leap year.
const year = 2000;
console.log(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 'leap' : 'not leap');


// Challenge 4: Score Grader (Nested Ternary Operator)
// Write a program to grade a student based on their score.
const score = 85
const grade = score >= 90
  ? 'A' : score >= 80 && score <= 89
    ? 'B' : score >= 70 && score <= 79
      ? 'C' : score >= '60'
        ? 'D' : 'F';
console.log(`Your score is ${grade}`);


// Challenge5: Zodiac Sign Finder (Switch statements with if and else statements)
// Write a program that determines the zodiac sign based on a given month and day.
const month = 'November';
const day = 15;

switch (month) {
  case 'January':
    if (day <= 19) {
      console.log('Your zodiac sign is Capricorn');
    }
    else {
      console.log('Your zodiac sign is Aquarius')
    }
    break;
  case 'February':
    if (day <= 18) {
      console.log('Your zodiac sign is Aquarius');
    }
    else {
      console.log('Your zodiac sign is Pisces');
    }
    break;
  case 'March':
    if (day <= 20) {
      console.log('Your zodiac sign is pisces');
    }
    else {
      console.log('Your zodiac sign is Aries');
    }
    break;
  case 'April':
    if (day <= 19) {
      console.log('Your zodiac sign is Aries');
    }
   else {
      console.log('Your zodiac sign is Taurus');
    }
    break;
  case 'May':
    if (day <= 20) {
      console.log('Your zodiac sign is Taurus');
    }
   else {
      console.log('Your zodiac sign is Gemini');
    }
    break;
  case 'June':
    if (day <= 21) {
      console.log('Your zodiac sign is Gemini');
    }
   else {
      console.log('Your zodiac sign is Cancer');
    }
    break;
  case 'July':
    if (day <= 22) {
      console.log('Your zodiac sign is Cancer');
    }
   else {
      console.log('Your zodiac sign is Leo');
    }
    break;
  case 'August':
    if (day <= 22) {
      console.log('Your zodiac sign is Leo');
    }
   else {
      console.log('Your zodiac sign is Virgo');
    }
    break;  
  case 'September':
    if (day <= 22) {
      console.log('Your zodiac sign is Virgo');
    }
   else {
      console.log('Your zodiac sign is Libra');
    }
    break;
  case 'October':
    if (day <= 22) {
      console.log('Your zodiac sign is Libra');
    }
   else {
      console.log('Your zodiac sign is Scorpio');
    }
    break;
  case 'November':
    if (day <= 21) {
      console.log('Your zodiac sign is Scorpio');
    }
   else {
      console.log('Your zodiac sign is Sagittarius');
    }
    break;
  case 'December':
    if (day <= 21) {
      console.log('Your zodiac sign is Sagittarius');
    }
   else {
      console.log('Your zodiac sign is Capricorn');
    }
    break;
  default:
    console.log('Not a valid month')
    break;
}

// Challenge6: Fruit Price Checker
// Write a program that tells the price of a fruit based on its name using a switch statement.

const fruit = 'Apple';
 switch (fruit) {
  case 'Apple':
     console.log("The price of an apple is $2 each.");
    break;
  case 'Banana':
     console.log("The price of a Banana is $3 each.");
    break;
  case 'Watermelon':
     console.log("The price of a watermelon is $1 each.");
    break;
   default:
     console.log("Sorry, we don't have that fruit.");
    break;
}
 
// Challenge7: Movie Ticket Price
// Write a program to determine the ticket price for a movie based on the viewer's age using a ternary operator.

const age1 = 25;
console.log(age1 <= 13
  ? 'Your ticket price is $8' : age1 >= 13
    ? 'Your ticket price is $13' : age1 >= 60
      ? 'Ypur ticket price is $6' : 'Invalid');



