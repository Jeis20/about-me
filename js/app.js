'use strict';

// Get the user's name
var userName = prompt('Greetings, Earthling! What is your name?');

alert('Nice to have you here, ' + userName + ', I\'m going to ask you some fun questions about me. These are all yes/no questions, so feel free to answer with y/n or yes/no.');

var correctAnswers = 0;

// Ask them five y/n questions

function quesntionCountOne(){
  var num = [1];
  for (var i = 0; i < num.length; i++){

    var answerOne = prompt('Do I have any pets?').toLowerCase();
    if (answerOne === 'y'|| answerOne === 'yes') {
      alert('You got it right!');
      correctAnswers++;
      console.log('The' + userName + 'was asked if I have any dogs and the answer is yes.');
    }
    else {
      alert('Epic Fail. Of course I do, this is Seattle!');
    }
  }
}
quesntionCountOne();

function questionCountTwo () {
  var answerTwo = prompt('Do I have any dragons?').toLowerCase();
  if (answerTwo === 'n'|| answerTwo === 'no') {
    alert('Correct! Breathe a sigh of relief.. and not fire.');
    correctAnswers++;
    console.log('The' + userName + 'was asked if I have any dragons and the answer is no.');
  }
  else {
    alert('No, but I wish I did!');
  }
}
questionCountTwo();

function questionCountThree(){
  var answerThree = prompt('Do I like chai tea lattes?').toLowerCase();
  if (answerThree === 'n'|| answerThree === 'no') {
    alert('With all my heart no, you got it.');
    correctAnswers++;
    console.log('The' + userName + 'was asked if I chai tea latte and the answer is no.');
  }
  else {
    alert('No way jose, I don\'t like it!');
  }
}
questionCountThree();

function questionCountFour(){
  var answerFour = prompt('Do I own a DeLorean?').toLowerCase();
  if (answerFour === 'n'|| answerFour === 'no') {
    alert('Right! Sadly, no time travel for me.');
    correctAnswers++;
    console.log('The' + userName + 'was asked if I own a DeLorean and the answer is no.');
  }
  else {
    alert('Whoaaa whoaaa, sorry incorrect!');
  }
}
questionCountFour();

function questionCountFive(){
  var answerFive = prompt('Do I have a Denver Broncos jersey for my dog?').toLowerCase();
  if (answerFive === 'y'|| answerFive === 'yes') {
    alert('You\'re darn tootin\', correct!');
    correctAnswers++;
    console.log('The' + userName + 'was asked if my dog has a Denver Broncos jersey and the answer is yes.');
  }
  else {
    alert('How could you get this wrong?! I thought you knew me..');
  }
}
questionCountFive();

function questionCountSix(){
  var specialNumber = 84;
  var num = 4;
  while (num > 0) {
    var answerSix = parseInt(prompt('Let\'s play a game, what\'s my favorite number between 0 to 100, and based on multiples of 12?'));
    console.log('answerSix', answerSix);
    // if (num <= 3 && num > 0) {
    if (answerSix === specialNumber) {
      alert('Well look at you, you gone and done it. Yeeehawwww!');
      correctAnswers++;
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
}
questionCountSix();

// question 7
function questionCountSeven(){
  var dogBreeds = ['Chihuahua','German Shepherd','Rottweiler'];
  var num = 0;

  do {
    var userDog = prompt('Can you guess any of the different dog breeds I\'ve had in my entire life?');
    if (userDog === dogBreeds[0]) {
      alert('Correct, you get a tail wag!');
      console.log('checking first array position for correct answer');
      correctAnswers++;
      break;
    } else if (userDog === dogBreeds[1]){
      alert('Correct, you get a tail wag');
      console.log('checking second array position for correct answer');
      correctAnswers++;
      break;
    } else if (userDog === dogBreeds[2]){
      alert('Correct, you get a tail wag');
      console.log('checking third array position for correct answer');
      correctAnswers++;
      break;
    } else if(num === 5) {
      alert('This is the end, go back through to earn your tail wag!');
      console.log('user has run out of attempts, can try again');
      break;
    } else {
      alert('Tail is wagging, try again!');
      console.log('user gets message saying answer was incorrect');
      num++;
    }
  } while (num < 6);
}
questionCountSeven();

alert('Out of 7 questions about me, you got ' + correctAnswers + ' correct. Happy trails ' + userName + '!');
console.log('tells user the number of total questions correct out of seven');

