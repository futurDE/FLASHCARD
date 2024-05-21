// Select DOM elements.
const question = document.querySelector(".question"); // The question element
const textarea = document.querySelector("textarea"); // The textarea for user input
let userAnswer = document.querySelector(".user-answer"); // The element displaying the user's answer
let correctAnswer = document.querySelector(".correct-answer"); // The element displaying the correct answer
const buttons = document.querySelectorAll(".button"); // All the buttons

let counter = 1;

// Object to store the questions and their corresponding answers
const questionBank = {
    question1: {
        question: "What color is the Sun?",
        answer: "the sun is yellow",
    },
    question2: {
        question: "What color is the sky?",
        answer: "the sky is blue",
    },
    question3: {
        question: "What color is the earth?",
        answer: "the earth is green",
    },
};

question.textContent = questionBank[`question${counter}`]["question"];

// Add event listeners to each button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Check if the clicked button has the class "previous"
        if (button.classList.contains("previous")) {
            counter --;
            question.textContent = questionBank[`question${counter}`]["question"];
        } else if (button.classList.contains("next")) {
            counter ++;
            question.textContent = questionBank[`question${counter}`]["question"];
        } else {
            textarea.value = "";
            userAnswer.textContent = "";
            correctAnswer.textContent = "";
        }
        // Additional checks for other buttons can be added here (e.g., "again", "next")
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        event.preventDefault();

        if (textarea.value != "") {
            correctAnswer.textContent = questionBank[`question${counter}`]["answer"];
            let userAnswerString = textarea.value;
            let userAnswerArray = userAnswerString.split(" ");
            let correctAnswerString = questionBank[`question${counter}`]["answer"];
            let correctAnswerArray = correctAnswerString.split(" ");
            userAnswer.innerHTML = compareAndHighlight(userAnswerArray, correctAnswerArray);
        }
    }
});

function compareAndHighlight(array1, array2) {
    const maxLength = Math.max(array1.length, array2.length);
    let display = "";

    for (let i = 0; i < maxLength; i++) {
        if (array1[i] == array2[i]) {
            display += `<span style="background-color: green;">${array1[i]}</span> `;
        } else {
            let char1 = array1[i] || "";
            let char2 = array2[i] || "";
            const strLength = Math.max(char1.length, char2.length);
            let display2 = "";
            for (let k = 0; k < strLength; k++) {
                
                if (char1[k] == char2[k]) {
                    display2 += `<span style="background-color: green;">${char1[k]}</span>`;
                } else {
                    display2 += `<span style="background-color: red;">${char1[k] || "-"}</span>`;        
                }
            }
            
            display += `${display2} `;
        }
    }

    return display;
}