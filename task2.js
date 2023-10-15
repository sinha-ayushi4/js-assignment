function sortStringAlphabetically(inputString) {
    const sortedString = inputString.split('').sort().join('');
    return sortedString;
  }
  
  // Get user input
  const userInput = prompt("Enter a string:");
  if (userInput !== null) {
    const sortedOutput = sortStringAlphabetically(userInput);
    console.log(`Sorted string: ${sortedOutput}`);
  } else {
    console.log("User canceled input.");
  }