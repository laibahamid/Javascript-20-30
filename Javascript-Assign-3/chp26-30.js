//--------For positive integer---------
document.write('<br><br>-----For positive integer--------<br>')
var num = prompt("Enter any positive decimal integer: ");
var roundNum = Math.round(num);
var ceilNum = Math.ceil(num);
var floorNum = Math.floor(num);
document.write('Number: ', num, '<br>');
document.write('Rounded off value: ', roundNum,'<br>');
document.write('Floor value: ',floorNum,'<br>');
document.write('Ceil value: ',ceilNum, '<br>');

//--------For negative integer---------
document.write('<br><br>-----For negative decimal integer--------<br>')
var num = prompt("Enter any negative decimal integer: ");
var roundNum = Math.round(num);
var ceilNum = Math.ceil(num);
var floorNum = Math.floor(num);
document.write('Number: ', num, '<br>');
document.write('Rounded off value: ', roundNum,'<br>');
document.write('Floor value: ',floorNum,'<br>');
document.write('Ceil value: ',ceilNum, '<br>');

//--------For an absolute value---------
document.write('<br><br>-----For an absolute value--------<br>')
var numb = prompt("Enter an integer for an absolute value: ");
var absNum = Math.abs(numb);
document.write('Number: ',numb, '<br>');
document.write('Absolute value: ', absNum, '<br>');

//--------For random dice value---------
document.write('<br><br>-----For random dice value--------<br>')
var min = 1;
var max = 6;
var diceRoll = Math.floor(Math.random() * (max - min + 1)) + min;
document.write('Random dice value : ',diceRoll);

//--------For random coin value---------
document.write('<br><br>-----For random coin value--------<br>')
var coinToss = Math.random() < 0.5? "Heads" : "Tails";
document.write('The coin landed on: ', coinToss);

//--------For random number---------
document.write('<br><br>-----For random number--------<br>')
var mini = 1;
var maxi = 100;
var randomNumber = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
document.write('Random number: ', randomNumber);

//--------For weight---------
document.write('<br><br>-----For weight--------<br>')
var weightInput = prompt("Enter your weight in kilograms");
let weightInKgs;
if (weightInput.includes("kgs")) {
  weightInKgs = parseFloat(weightInput);
} else if (weightInput.includes("kilograms")) {
  weightInKgs = parseFloat(weightInput.replace("kilograms", "kgs"));
} else {
  weightInKgs = parseFloat(weightInput);
}
document.write(`Your weight is ${weightInKgs} kilograms.`);

//--------For secret number---------
document.write('<br><br>-----For secret number-------<br>')
var secretNumber = Math.floor(Math.random() * 10) + 1;
var userInput = prompt("Guess the secret number between 1 and 10!");
if (userInput == secretNumber) {
  document.write("Congratulations! You guessed the secret number!");
} else {
  document.write('Sorry, the secret number was ', secretNumber, '. Try again!');
}
