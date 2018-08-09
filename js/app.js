'use strict';

// Get the user's name
var userName = prompt('Greetings, Earthling! What is your name?');

alert('Nice to have you here, ' + userName + ', I\'m going to ask you some fun questions about me. These are all yes/no questions, so feel free to answer with y/n or yes/no.');

var correctAnswers = 0;

// Ask them five y/n questions

function (questionCount1){
    var nums = [1]
    for (var i = 0; i < num.length; i++){
    
var answerOne = prompt('Do I have any pets?').toLowerCase();
    if (answerOne === 'y'|| answerOne === 'yes') {
        alert('You got it right!');
            correctAnswers++;
        console.log('The' + userName + 'was asked if I have any dogs and the answer is yes.')
}
    else {
        alert('Epic Fail. Of course I do, this is Seattle!');
        }
    }
}
function (questionCount1);

function (questionCount2) {
var answerTwo = prompt('Do I have any dragons?').toLowerCase();
    if (answerTwo === 'n'|| answerTwo === 'no') {
        alert('Correct! Breathe a sigh of relief.. and not fire.');
            correctAnswers++;
         console.log('The' + userName + 'was asked if I have any dragons and the answer is no.')
}
    else {
        alert('No, but I wish I did!');
        }
    }
    function(questionCount2);

var answerThree = prompt('Do I like chai tea lattes?').toLowerCase();
    if (answerThree === 'n'|| answerThree === 'no') {
        alert('With all my heart no, you got it.');
            correctAnswers++
        console.log('The' + userName + 'was asked if I chai tea latte and the answer is no.')
}
    else {
        alert('No way jose, I don\'t like it!');
        }

var answerFour = prompt('Do I own a DeLorean?').toLowerCase();
    if (answerFour === 'n'|| answerFour === 'no') {
        alert('Right! Sadly, no time travel for me.');
            correctAnswers++
         console.log('The' + userName + 'was asked if I own a DeLorean and the answer is no.')
 }
    else {
        alert('Whoaaa whoaaa, sorry incorrect!');
        }      

var answerFive = prompt('Do I have a Denver Broncos jersey for my dog?').toLowerCase();
    if (answerFive === 'y'|| answerFive === 'yes') {
        alert('You\'re darn tootin\', correct!');
            correctAnswers++
         console.log('The' + userName + 'was asked if my dog has a Denver Broncos jersey and the answer is yes.')
 }
    else {
        alert('How could you get this wrong?! I thought you knew me..');
         }   

var specialNumber = 84;
var num = 3;
while (num > 0) {
    var answerSix = parseInt(prompt('Let\'s play a game, what\'s my favorite number between 0 to 100, and based on multiples of 12?'));
        console.log('answerSix', answerSix);
    // if (num <= 3 && num > 0) {
        if (answerSix === specialNumber) {
            alert('Well look at you, you gone and done it. Yeeehawwww!');
            correctAnswers++
            break;
        } else if (answerSix > specialNumber) {
            alert('Too high, try again!');
        } else if (answerSix < specialNumber) {
            alert('Too low, give it another go!');            
            // var answerSix = prompt('Let\'s play a game, what\'s my favorite number between 0 to 100, and based on multiples of 12?');
        }
        num--;
    // }
}
        if(num === 0) {
            alert('Nah nah nah nah, hey hey hey, goooodddbyyyeeee');
    }

    var dogBreeds = ["Chihuahua","German Shepherd","Rottweiler"];
    var answerSeven;
    var num = 6;
    while (num > 0) {
        answerSeven = prompt('Can you guess any of the different breeds of dog I\'ve had in my entire life?').toLowerCase();
        for (var i = 0; i < dogBreeds.length; i++) {
            if (answerSeven === dogBreeds[i]) {
                alert('Where my dogs at!? Argghhh, Arghhh! You got it! I\'ve had Chihuahuas, a German Shepherd, and a Rottweiler!');
                correctAnswers++
                console.log('first if statement');
                console.log(dogBreeds[i]);
                break;
            } else if (answerSeven !== dogBreeds[i]) {
                alert('Tail is wagging, but try again!');
                console.log('first else if statement');
                console.log(dogBreeds[i]);
            } else if (num === 0) {
                alert('Thanks for playing.. you still get a tail wag! I\'ve had Chihuahuas, a German Shepherd, and a Rottweiler');
                console.log('second else if statement');
            }
        }
        num--;
    }