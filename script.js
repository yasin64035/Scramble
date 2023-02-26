// Define the words to be scrambled
const words = [
    {word: 'mahfin', hint: 'yasin bhai er friend'},
    {word: 'afif', hint: 'music kore '},
    {word: 'Anis Sir', hint: 'Teacher New  ideal school'},
    {word: 'javascript', hint: 'A high-level programming language'},
    {word: 'html', hint: 'A markup language for creating web pages'},
    {word: 'css', hint: 'A stylesheet language used to describe the presentation of a document written in HTML'},
    {word: 'programming', hint: 'The process of designing, writing, testing, debugging, and maintaining the source code of computer software'},
    {word: 'computer', hint: 'An electronic device that can perform arithmetic and logical operations'}
  ];
  
  let randomWord; // Initialize the variable for the random word
  let scrambledWord; // Initialize the variable for the scrambled word
  let timerId; // Initialize the variable for the timer
  
  // Get the DOM elements for the game
  const scrambledWordElement = document.getElementById('scrambled-word');
  const guessElement = document.getElementById('guess');
  const submitButton = document.getElementById('submit-guess');
  const messageElement = document.getElementById('message');
  const newWordButton = document.getElementById('new-word');
  const hintElement = document.getElementById('hint');
  const timerElement = document.getElementById('timer');
  
  // Define the function to start the timer
  function startTimer() {
    let timeLeft = 15; // Set the time limit to 15 seconds
  
    timerId = setInterval(() => {
      timerElement.textContent = `Time left: ${timeLeft--}`; // Update the timer display
  
      if (timeLeft < 0) {
        clearInterval(timerId); // Clear the timer interval
        messageElement.textContent = 'Time out!'; // Display "Time out!"
        resetGame(); // Reset the game
      }
    }, 1000);
  }
  
  // Define the function to reset the game
  function resetGame() {
    // Select a new random word and scramble its letters
    randomWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = randomWord.word
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
    scrambledWordElement.textContent = scrambledWord;
  
    // Clear the guess and message input elements
    guessElement.value = '';
    messageElement.textContent = '';
  
    // Set the hint text content
    hintElement.textContent = `Hint: ${randomWord.hint}`;
  
    // Start the timer
    startTimer();
  }
  
  // Initialize the game
  resetGame();
  
  // Add an event listener to the submit button
  submitButton.addEventListener('click', () => {
    const guess = guessElement.value.toLowerCase();
  
    if (guess === randomWord.word) {
      clearInterval(timerId); // Clear the timer interval
      messageElement.textContent = 'Correct!';
      resetGame();
    } else {
      messageElement.textContent = 'Incorrect. Try again.';
    }
  
    // Clear the guess input element
    guessElement.value = '';
  });
  
  // Add an event listener to the new word button
  newWordButton.addEventListener('click', () => {
    clearInterval(timerId); // Clear the timer interval
    resetGame();
  });
  