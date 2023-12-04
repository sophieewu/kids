// Function to generate random numbers based on difficulty level
function generateRandomNumber(difficultyLevel) {
  min = Math.pow(10, difficultyLevel - 1);
  max = Math.pow(10, difficultyLevel);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the addition game
function startAdditionGame() {
  const userGrade = prompt("What grade are you in? (1-5)");

  // Convert the user's grade to a number
  const grade = parseInt(userGrade);

  if (isNaN(grade) || grade < 1 || grade > 5) {
    alert("Please enter a valid grade between 1 and 5.");
    return;
  }

  alert(`Great! Let's play. You are in grade ${grade}.`);

  while (true) {
    // Adjust difficulty based on grade
    const difficultyLevel = grade;

    // Generate two random numbers
    const num1 = generateRandomNumber(difficultyLevel);
    const num2 = generateRandomNumber(difficultyLevel);

    // Ask the user to solve the addition
    const userAnswer = prompt(`${num1} + ${num2} = (Type "stop" to end the game)`);

    // Check if the user wants to stop the game
    if (userAnswer.toLowerCase() === 'stop') {
      alert('Thanks for playing! The game is now stopping.');
      break;
    }

    // Convert the user's answer to a number
    const userNumber = parseInt(userAnswer);

    // Calculate the correct answer
    const correctAnswer = num1 + num2;

    // Check if the user's answer is correct
    if (userNumber === correctAnswer) {
      alert("Congratulations! Your answer is correct.");
    } else {
      alert(`Sorry, the correct answer is ${correctAnswer}. Try again!`);
    }
  }
}

// Start the game
startAdditionGame();
