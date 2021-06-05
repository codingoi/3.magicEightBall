//Variables

//If the user wants, they can enter their name in between the quotation marks.
let userName = "Jane"

//Code acknowledges that the user has or has not entered a name
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!')

//The user's question for the Magic 8 Ball to answer
let userQuestion = "Will I travel this summer?"

//Code acknowledges the user's question
console.log(`${userName}'s Question is: ${userQuestion}`)


//The variable is initiated that will hold the 8 Ball's answer to the question
let eightBall = ""

//Code generates a random number between 0 and 7 that corresponds to an assigned 8 Ball answer
let randomNumer = Math.floor(Math.random()*8)


//Conditional Control Flow
//Each case is indicative of a randomly generated number and it's assigned 8 Ball Answer
switch (randomNumer) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
     eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
}

//Presentation
console.log(`The answer: ${eightBall}`)
