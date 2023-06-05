//----to greet user---------
var fs = prompt('Enter your first name')
var ls = prompt('Enter your last name')
var fullName = (fs + ' ' +ls)
var greet = ('Hello ' + fullName)
alert(greet)

//-----phone model-------
document.write('------Phone Model-------<br>')
var pm = prompt('Enter your favourite phone model')
document.write('My favorite phone is: ' + pm)
var length = pm.length;
document.write('<br>The length of string is : ' + length)

//----last letter l--------
document.write('<br><br>------Last index of letter l in hello world-----<br>')
var string = 'Hello World';
document.write('String: '+string)
var lastIndex = string.lastIndexOf("l")
document.write('<br>Last index of l is: '+lastIndex)

//------3rd char-------
document.write('<br><br>------Third character-------<br>')
var str = 'Pakistani';
document.write('String: '+str)
var thirdChar = str.charAt(3);
document.write('<br>Character at index 3 is: '+thirdChar)

//------Replacement------
document.write('<br><br>-------Replacment from Hyder to Islam-------<br>')
var stri = 'Hyderabad';
document.write('City: ', stri,'<br>')
var newStr = stri.replace('Hyder', 'Islam');
document.write('After replacement: ',newStr);

//------Replacement------
document.write('<br><br>-------Replacment from "and" to "&"-------<br>')
var message = 'Ali and Sami are best friends. They play cricket and football together.';
document.write('City: ', message,'<br>')
var newStri = message.replace('and', '&');
document.write('After replacement: ',newStri);

//-------Data type---
document.write('<br><br>-------Data type-----<br>')
var value = '472';
document.write('Value: ',value, '<br>Type: String<br>')
console.log(value,typeof(value));
var num = 472;
document.write('Value: ',num, '<br>Type: Number')
console.log(num,typeof(num));
document.write('<br>(Result in console too).')

//-----Uppercase---------
document.write('<br><br>--------Upper case-------')
var inp = prompt('Enter any word to convert to capital letters')
document.write('<br>User input: ',inp)
var uppercase = inp.toUpperCase()
document.write('<br>Upper case : ',uppercase)

//------var num to string--------
document.write('<br><br>------Var num to string-------<br>')
var num = 35.36;
document.write('Number: ',num)
var numStr = num.toString().replace(".", "");
num = parseFloat(numStr);
document.write('<br>Result: ',num); 

//------Valid username
var username = prompt("Please enter your username:");
//---------valid username--------
if (/@|\||\||\.|,|!/.test(username)) {
  alert("Please enter a valid username");
//  
}
console.log("Username: ", username);

// //------Split method--------
document.write('<br><br>------Split method-------<br>')
var university = "University of Karachi";
document.write('String: ',university, '<br>')
var myArray = university.split('');
document.write('After split: ',myArray); 

//----last character finder------
var input = prompt('Enter your country: ')
document.write('<br><br>------last character finder-------<br>')
document.write('Your country: ',input)
var lc = input.charAt(input.length - 1);
document.write('<br>Last character of input is: ' + lc)

//------Occurrence of 'the'--------
document.write('<br><br>------Occurrence of "the"-------<br>')
var text = "the quick brown fox jumps over the lazy dog";
document.write('Text: ',text)
var count = text.split("the").length - 1;
document.write("<br>Number of occurrences of 'the': " + count);
