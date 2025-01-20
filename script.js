/* Code for Alert on Empty Input: */
document.getElementById("check-btn").addEventListener("click", () => {
  const userInput = document.getElementById("user-input").value.trim();
  const resultsDiv = document.getElementById("results-div");

  if (!userInput) {
    alert("Please provide a phone number");
  } else {
    // Validate the phone number and update results
    const result = numberValidator(userInput) 
      ? `Valid US number: ${userInput}` 
      : `Invalid US number: ${userInput}`;

    resultsDiv.textContent = result; // Display result in the results div
  }
});

/* Code for clearing the results and input field: */
document.getElementById("clear-btn").addEventListener("click", () => {
  // Clear the input field
  document.getElementById("user-input").value = "";

  // Clear the results div
  const resultsDiv = document.getElementById("results-div");
  resultsDiv.innerHTML = ""; // Clears the content in the results div
});

/* Number Validator for phone number validation: */
function numberValidator(str) {
  let regExp = /^(1\s?)?(\(\d{3}\)|\d{3})[\-\s]?\d{3}[\-\s]?\d{4}$/;
  return regExp.test(str);
}

console.log(numberValidator("555-555-5555")); // Test case
