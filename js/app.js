'use strict';

// Get the user's name
var userName = prompt('Greetings, Earthling! What is your name?');

alert('Nice to have you here, ' + userName + ', I\'m going to ask you some fun questions about me. These are all yes/no questions, so feel free to answer with y/n or yes/no.');

// Ask them five y/n questions

var answerOne = prompt('Do I have any pets?').toLowerCase();
if (answerOne === 'y'|| answerOne === 'yes') {
    alert('You got it right!');
        console.log('The' + userName + 'was asked if I have any dogs and the answer is yes.')
}
    else {
        alert('Epic Fail. Of course I do, this is Seattle!');
        }

var answerTwo = prompt('Do I have any dragons?').toLowerCase();
if (answerTwo === 'n'|| answerTwo === 'no') {
    alert('Correct! Breathe a sigh of relief.. and not fire.');
         console.log('The' + userName + 'was asked if I have any dragons and the answer is no.')
}
    else {
        alert('No, but I wish I did!');
        }

var answerThree = prompt('Do I like chai tea lattes?').toLowerCase();
if (answerThree === 'n'|| answerThree === 'no') {
    alert('With all my heart no, you got it.');
        console.log('The' + userName + 'was asked if I chai tea latte and the answer is no.')
}
    else {
        alert('No way jose, I don\'t like it!');
        }

var answerFour = prompt('Do I own a DeLorean?').toLowerCase();
if (answerFour === 'n'|| answerFour === 'no') {
    alert('Right! Sadly, no time travel for me.');
         console.log('The' + userName + 'was asked if I own a DeLorean and the answer is no.')
 }
    else {
         alert('Whoaaa whoaaa, sorry incorrect!');
        }      

var answerFive = prompt('Do I have a Denver Broncos jersey for my dog?').toLowerCase();
 if (answerFive === 'y'|| answerFive === 'yes') {
     alert('You\'re darn tootin\', correct!');
         console.log('The' + userName + 'was asked if my dog has a Denver Broncos jersey and the answer is yes.')
 }
    else {
         alert('How could you get this wrong?! I thought you knew me..');
         }