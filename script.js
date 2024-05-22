// Select DOM elements.
const question = document.querySelector(".question"); // The question element
const textarea = document.querySelector("textarea"); // The textarea for user input
let userAnswer = document.querySelector(".user-answer"); // The element displaying the user's answer
let correctAnswer = document.querySelector(".correct-answer"); // The element displaying the correct answer
const buttons = document.querySelectorAll(".button"); // All the buttons

let counter = 1; // Initialize question counter

// Object to store the questions and their corresponding answers
const questionBank = {
    question1: {
        question: "Explain the JavaScript reduce() method",
        answer: "the reduce() method executes a callback function provided to the reduce method on each element of an iterable such as an array or node list, passing in the return value from the calculation on the preceding element. the final result of running the reducer (supplied callback function) across all elements of the iterable is a single value. the first time the callback is run there is no 'return value from the previous calculation'. if supplied, an initial value may be used in its place. otherwise the element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0)",
    },
    question2: {
        question: "Explain the JavaScript split() method",
        answer: "the split() method splits a string into an array of substrings based on a specified separator and returns a new array",
    },
    question3: {
        question: "What is the syntax for the split() method?",
        answer: "string.split(separator, limit)",
    },
    question4: {
        question: "Explain what the JavaScript spread operator does.",
        answer: "the spread operator is used on an iterable to expand the iterable into individual elements",
    },
    question5: {
        question: "What does the getBoundingClientRect() method do?",
        answer: "the getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport",
    },
    question6: {
        question: "What is the JavaScript DOMRect?",
        answer: "DOMRect is a built-in-JavaScript object that describes the size and position of a rectangle with properties for the top, left, right, and bottom coordinates of the rectangle, as well as with the width and height",
    },
};

// Set the initial question text
question.textContent = questionBank[`question${counter}`]["question"];

// Add event listeners to each button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Check if the clicked button has the class "previous"
        if (button.classList.contains("previous")) {
            counter --; // Decrement the counter
            question.textContent = questionBank[`question${counter}`]["question"]; // Update the question
            textarea.value = ""; // Clear the textarea
            userAnswer.textContent = ""; // Clear the user's answer display
            correctAnswer.textContent = ""; // Clear the correct answer display
        } else if (button.classList.contains("next")) {
            counter ++; // Increment the counter
            question.textContent = questionBank[`question${counter}`]["question"]; // Update the question
            textarea.value = ""; // Clear the textarea
            userAnswer.textContent = ""; // Clear the user's answer display
            correctAnswer.textContent = ""; // Clear the correct answer display
        } else {
            // Clear the textarea and answer displays for other buttons
            textarea.value = "";
            userAnswer.textContent = "";
            correctAnswer.textContent = "";
        }
        // Additional checks for other buttons can be added here (e.g., "again", "next")
    });
});

// Add event listener for Enter key press
document.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        event.preventDefault(); // Prevent default behavior

        if (textarea.value != "") { // If there is input in the textarea
            let userAnswerString = textarea.value; // Get the user's answer
            let userAnswerArray = userAnswerString.split(" "); // Split the user's answer into words
            let correctAnswerString = questionBank[`question${counter}`]["answer"]; // Get the correct answer
            let correctAnswerArray = correctAnswerString.split(" "); // Split the correct answer into words
            userAnswer.innerHTML = compareAndHighlight(userAnswerArray, correctAnswerArray); // Compare and highlight differences
            correctAnswer.innerHTML = compareAndHighlight2(userAnswerArray, correctAnswerArray); // Display the correct answer
        }
    }
});

// Function to compare and highlight differences between user and correct answers
function compareAndHighlight(array1, array2) {
    const maxLength = Math.max(array1.length, array2.length); // Get the max length of both arrays
    let display = ""; // Initialize display string

    for (let i = 0; i < maxLength; i++) {
        if (array1[i] == array2[i]) {
            display += `<span style="background-color: green;">${array1[i]}</span> `; // Highlight matching words in green
        } else {
            let char1 = array1[i] || ""; // Get the current word from the user's answer or an empty string
            let char2 = array2[i] || ""; // Get the current word from the correct answer or an empty string
            const strLength = Math.max(char1.length, char2.length); // Get the max length of both words
            let display2 = ""; // Initialize inner display string
            for (let k = 0; k < strLength; k++) {
                if (char1[k] == char2[k]) {
                    display2 += `<span style="background-color: green;">${char1[k]}</span>`; // Highlight matching characters in green
                } else {
                    display2 += `<span style="background-color: red;">${char1[k] || "-"}</span>`; // Highlight non-matching characters in red
                }
            }
            display += `${display2} `; // Append the inner display to the outer display
        }
    }

    return display; // Return the final display string
}


function compareAndHighlight2(array1, array2) {
    const maxLength = Math.max(array1.length, array2.length); // Get the max length of both arrays
    let display = ""; // Initialize display string

    for (let i = 0; i < maxLength; i++) {
        if (array1[i] == array2[i]) {
            display += `<span style="background-color: green;">${array2[i]}</span> `; // Highlight matching words in green
        } else {
            let char1 = array1[i] || ""; // Get the current word from the user's answer or an empty string
            let char2 = array2[i] || ""; // Get the current word from the correct answer or an empty string
            const strLength = Math.max(char1.length, char2.length); // Get the max length of both words
            let display2 = ""; // Initialize inner display string
            for (let k = 0; k < strLength; k++) {
                if (char1[k] == char2[k]) {
                    display2 += `<span style="background-color: green;">${char2[k]}</span>`; // Highlight matching characters in green
                } else {
                    display2 += `<span style="background-color: gray;">${char2[k] || ""}</span>`; // Highlight non-matching characters in red
                }
            }
            display += `${display2} `; // Append the inner display to the outer display
        }
    }

    return display; // Return the final display string
}