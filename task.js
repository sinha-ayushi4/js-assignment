function reverseNumber(x) {
    const reversedString = x.toString().split('').reverse().join('');
    const reversedNumber = parseInt(reversedString);
    return reversedNumber;
  }
  
  // Get user input from the user
  const userInput = prompt("Enter a number:");
  const inputNumber = parseFloat(userInput);
  
  if (!isNaN(inputNumber)) {
    const reversedX = reverseNumber(inputNumber);
    console.log(`Reversed number: ${reversedX}`);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }
  