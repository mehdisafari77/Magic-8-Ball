var userName = "Mehdi";

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

var userQuestion = "Will I get the SVJ Roadster by my birthday this year?";

console.log(`The user asked: ${userQuestion}`);

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = ""

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
  case 2:
    eightBall = 'Reply hazy try again';
  case 3:
    eightBall = 'Cannot predict now';
  case 4:
    eightBall = 'Do not count on it';
  case 5:
    eightBall = 'My sources say no';
  case 6:
    eightBall = 'Outlook not so good';
  case 7:
    eightBall = 'Signs point to yes';
    break;  
}
console.log(`The eight ball answered: ${eightBall}`); 

