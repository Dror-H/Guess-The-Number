


// =====================================
// Notes:
// Classes are selected with dot notation (.check)
// IDs are selected with (#), 
// and tags are refered (Button) example for a Button tag
// .value is a built in property that gives us the value of the input




// // Step 1 - Selecting the html element or the action creator and naming it (saving it as a variable = const)
// const checkButton = document.querySelector(".check");

// // Step 2 - Defining the action or the program that we want (Using the selected element)in order to create an action with functions. So we select the variable we just defined, and start chaining on it: Variable.document.method we want
// for example: 
// document.addEventListener ("click",function () )




// checkButton.addEventListener("click", function () {
//     const guessValue = Number(document.querySelector(".guess").value);

//     if (guessValue === secretNumber) {
//         console.log("You are correct");
//     } else {
//         console.log("High or low");
//     }
// });

// Steps 


// "Guess The Number Game"  Steps List:
// Step - 3 -> Creating a secret number between 1 to 20
// Step - 9 -> We are creating a bucket where we will store the initial score, which is 20
// Step - 11 -> We selected the .score text element where score text was stored
// Step - 1 -> Selecting the element
// Step - 2 -> Adding action to that button when a user clicks

// Step - 4 -> Getting the user guessed value

// Step - 7 -> Selecting the message element, where we will show our message


// Step - 8 -> Check if the user input or not

// Step - 5 -> Check if the guess is correct or not

// Step - 10 -> Decreasing the score (Punishment)


// Step - 12 -> Displayed the updated score


// Step - 6 -> Checking if it is high or low
// 4 - 16 -> High
// 4 - 3 -> Low



// Project Start 
// //=================================================
// // Step - 3 -> Creating a secret number between 1 to 20
// const secretNumber = Math.trunc(Math.random() * 20) + 1;

// // Step - 9 -> We are creating a bucket where we will store the initial score, which is 20
// let score = 20;
// // Step - 11 -> We selected the .score text element where score text was stored
// const displayScore = document.querySelector(".score");

// // Step - 1 -> Selecting the element
// const checkButton = document.querySelector(".check");

// // Step - 2 -> Adding action to that button when a user clicks
// checkButton.addEventListener("click", function () {
//     // Step - 4 -> Getting the user guessed value
//     const inputValue = Number(document.querySelector(".guess").value);


//     // Step - 7 -> Selecting the message element, where we will show our message
//     const message = document.querySelector(".message");

//     // Step - 8 -> Check if the user input or not
//     if (inputValue === 0) {
//         message.innerText = "⛔️ No number!";
//     } else {
//         // Step - 5 -> Check if the guess is correct or not
//         if (inputValue === secretNumber) {
//             message.innerText = "🎉 Correct Number!";
//         } else {
//             // Step - 10 -> Decreasing the score (Punishment)
//             score--;

//             // Step - 12 -> Displayed the updated score
//             displayScore.innerText = score;

//             // Step - 6 -> Checking if it is high or low
//             // 4 - 16 -> High
//             // 4 - 3 -> Low
//             if (secretNumber < inputValue) {
//                 message.innerText = "📈 Too high!";
//             } else {
//                 message.innerText = "📉 Too low!";
//             }
//         }
//     }
// });

// ===================================================================

// Project Start Alone 


// Step - 3 -> Creating a secret number between 1 to 100
let secretNumber = Math.trunc(Math.random() * 100) + 1;
// step 7 -> selecting the messege element where we will show our messege
const messege = document.querySelector(".message");

// Step 9 -> We are creating a bucket were we will store the initial score, which is 20 
let score = 20;

// step 11  - Creating "Step 1 of selecting the element and storing it in a const bucket"
const displayScore = document.querySelector(".score");


// Step 13 -> we need to store the highst score and remember it using a bucket
let highScore = 0;


let oldInputValue = 0;

const checkingFunction = function () {
    // Step  4 -> Getting the user guessed value
    const inputValue = Number(document.querySelector(".guess").value);
  
    // Step 5 - check if the guess is correct or not
  
    // 7.1 -> modifying step 5, by changing the console.log -> messege.innertext (so we will see the messege instead of in console.log in the page)
  
    // Step 8 -> creating a conditional if / else block for 0 scenario
  
    if (oldInputValue === inputValue) {
      messege.innerText = "⛔️ Why you are adding the same number?";
    } else if(inputValue===0) {
        messege.innerText= "⛔️ No number!!!";
    }
    else if (inputValue === secretNumber) {
      // console.log("Correct Number!");
      messege.innerText = "🎉 Correct Number!";
      // Step 14 - we are checking if the current score is higher then the previous score and we store in the highest bucket.
      if (score > highScore) {
        highScore = score;
  
        //  Step 15 -  We are displaying the high score
        const highScoreDisplay = document.querySelector(".highscore");
        highScoreDisplay.innerText = highScore;
      }
      document.querySelector("body").style.backgroundColor = "#60b347";
  
      // Step 6 - check if we are too high or too low
    } else {
      // Step - 10 -> Decreasing the score (Punishment)
      score--;
      // console.log("Too low!");
      // step 12 -> display the updated score (creating a "Punishment by deducting a point each time we don't guess the write guess")
      displayScore.innerText = score;
  // 45 < 47 -> Too high
    // 2 -> Too much low -> 2 + 40 = 42
    // 89 -> Too much high -> 89 - 40 = 49
    // 67 -> Too high -> 67 - 20 = 47
    // 50 -> You are close but a little high
    if (secretNumber < inputValue - 40) {
        messege.innerText = "📈 Too much high!";
      } else if (secretNumber <= inputValue - 10) {
        messege.innerText = "📈 Too high!";
      } else if (secretNumber <= inputValue) {
        messege.innerText = "📈 You are close but a little high!";
      } else if (secretNumber >= inputValue + 40) {
        messege.innerText = "📉 Too much low!";
      } else if (secretNumber >= inputValue + 10) {
        messege.innerText = "📉 Too low!";
      } else if (secretNumber > inputValue) {
        messege.innerText = "📉 You are close but a little low!";
      }
    }
    
    if (score === 0) {
      messege.innerText = "💥 You lost the game!";
      checkButton.disabled = true;
      document.querySelector("body").style.backgroundColor = "red";
    }
    oldInputValue = inputValue
  };
  
    
// Step - 1 -> Selecting the element
const checkButton = document.querySelector(".check");

// Step  2 -> Adding action to that button when a user clicks
checkButton.addEventListener("click", checkingFunction);

// step 16 - selecting the again button
const again = document.querySelector(".again")

const againFunction = () => {
    // step 18 - We are changing the background color back to initial color #222;
    document.querySelector("body").style.backgroundColor = "#222";
    // step 19 - We are changing the display message 
    messege.innerText = "Start guessing..."
    // step 20 - We are changing the score back to 20
    score = 20;
    displayScore.innerText = score;

    // step 21 - we are emptying the input field
    const input = document.querySelector(".guess");
    input.value = "";

    // step 22 - we are creating a new secret Number
    secretNumber = Math.trunc(Math.random() * 100) + 1;
}


// step 17 - Adding an event listner in again button
again.addEventListener("click", againFunction )




document.addEventListener("keypress", (event) => {
    if (event.code === "Enter") {
        if (score!== 0){
            checkingFunction()

        }
    
    } else if (event.code === "Space") {
        againFunction()
    }

})



//     // Step 21 - We are emtying the input field
//     const input = document.querySelector(".guess");
//     input.value = "";
//     // Step 22 - We are creating a new secret number
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//   };
  
//   // Step 17 - Adding an event listner in again button
//   again.addEventListener("click", againFunction);
  
//   // Keyboard functionality
//   document.addEventListener("keypress", (event) => {
//     // We are checking if the enter button is pressed
//     if (event.code === "Enter") {
//       checkingFunction();
//     } else if (event.code === "Space") {
//       againFunction();
//     }
//   });
  
  
  
  
  
  
  
  






