// Select DOM elements
let number = document.querySelector(".number");
const question = document.querySelector(".question");
const textarea = document.querySelector("textarea");
const usersAnswer = document.querySelector(".users-answer");
const correctAnswer = document.querySelector(".correct-answer");
const buttons = document.querySelectorAll(".button");
const questionNav = document.querySelectorAll(".question-nav");

let counter = 1; // Counter used to display the current question number

// Object containing all the questions and answers
const questionBank = {
    question1: {
        question: "What is price elasticity of demand?",
        answer: "the price elasticity of demand is a units free measure of the responsiveness of the quantity demanded of a good to a change in its price when all other influences on buying plans remain the same. in simpler terms, it assesses how much the demand for a product changes when its price changes",
    },
    question2: {
        question: "What is the formula for price elasticity of demand?",
        answer: "price elasticity of demand = percentage change in quantity demanded/percentage change in price",
    },
    question3: {
        question: "Draw a graph example for 'Calculating the Elasticity of Demand'",
        answer: "---",
    },
    question4: {
        question: "Expatiate calculating the elasticity of demand.",
        answer: "the important parameters are: 1.) change in price. 2.) average price. 3.) change in quantity demanded. 4.) average quantity demanded. the change in price is expressed as a percentage of the average price. the change in quantity demanded is expressed as a percentage of the average quantity demanded"
    },
    question5: {
        question: "Explain perfectly inelastic demand.",
        answer: "if the quantity demanded remains constant when the price changes, then the price elasticity of demand is zero and the good is said to have a perfectly inelastic demand",
    },
    question6: {
        question: "Explain unit elastic demand.",
        answer: "if the percentage change in the quantity demanded equals the percentage change in the price, then the price elasticity of demand equals 1 and the good is said to have a unit elastic demand",
    },
    question7: {
        question: "Give an example of perfectly inelastic demand.",
        answer: "insulin. regardless of the price of insulin, a diabetic patient would always purchase it",
    },
    question8: {
        question: "Explain inelastic demand.",
        answer: "if the quantity demanded of a good does not change significantly in response to price changes, and the price elasticity of demand is between zero and one, then the good is said to have an inelastic demand",
    },
    question9: {
        question: "Give examples of goods with inelastic demand.",
        answer: "goods for which there are few substitutes available. e.g gasoline",
    },
    question10: {
        question: "Explain perfectly elastic demand.",
        answer: "if the quantity demanded changes by an infinitely large percentage in response to a tiny price change, then the price elasticity of demand is infinity and the good is said to have a perfectly elastic demand",
    },
    question11: {
        question: "Give an example of perfectly elastic demand.",
        answer: "two soft drink machines with one having a slightly lower price",
    },
    question12: {
        question: "Explain elastic demand.",
        answer: "if the quantity demanded of a good changes significantly in response to price changes, and the price elasticity of demand is greater than 1, then the good is said to have an elastic demand",
    },
    question13: {
        question: "What happens at the midpoint of a linear demand curve?",
        answer: "the price elasticity of demand equals 1",
    },
    question14: {
        question: "With respect to the slope and elasticity, what happens to a linear demand curve?",
        answer: "the slope is constant but the elasticity varies",
    },
    question15: {
        question: "What happens to the price elasticity of the linear demand curve at prices above the midpoint?",
        answer: "demand is elastic",
    },
    question16: {
        question: "What happens to the price elasticity of the linear demand curve at prices below the midpoint?",
        answer: "demand is inelastic",
    },
    question17: {
        question: "What is total revenue from the sale of a good equals??",
        answer: "total revenue from the sale of a good equals the price of the good multiplied by the quantity sold",
    },
    question18: {
        question: "A cut in price always decreases total revenue. True of false?",
        answer: "false",
    },
    question19: {
        question: "What is the first way in which the change in total revenue depends on the elasticity of demand?",
        answer: "one way change in total revenue depends on elasticity of demand: if demand is elastic, a 1 percent price cut increases the quantity sold by more than 1 percent and total revenue increases",
    },
    question20: {
        question: "What is the second way in which the change in total revenue depends on the elasticity of demand?",
        answer: "one way change in total revenue depends on elasticity of demand: if demand is inelastic, a 1 percent price cut increases the quantity demanded by less than 1 percent and total revenue decreases",
    },
    question21: {
        question: "What is the third way in which the change in total revenue depends on the elasticity of demand?",
        answer: "one way change in total revenue depends on elasticity of demand: if demand is unit elastic, a 1 percent price cut increases the quantity sold by 1 percent and total revenue does not change",
    },
    question22: {
        question: "List the factors that influence the elasticity of demand.",
        answer: "1.) the closeness of substitutes. 2.) the proportion of income spent on the good. 3.) the time elapsed since the price change",
    },
    question23: {
        question: "What is cross elasticity of demand?",
        answer: "the cross elasticity of demand is a units free measure of the responsiveness of the quantity demanded of a good to a change in the price of a substitute or complement, when all other influences on buying plans or selling plans remain the same",
    },
    question24: {
        question: "What is the formula for cross elasticity of demand?",
        answer: "cross elasticity of demand = percentage change in quantity demanded/percentage change in price of a substitute or complement",
    },
    question25: {
        question: "Cross elastiity of demand is positive for a __________?",
        answer: "cross elasticity of demand is positive for a substitute",
    },
    question26: {
        question: "Cross elasticity of demand is negative for a __________?",
        answer: "cross elasticity of demand is negative for a complement",
    },
    // Additional questions omitted for brevity
};

// Display the initial question and question number
question.textContent = questionBank[`question${counter}`]["question"];
number.textContent = `Question ${counter}`;

questionNav.forEach((nav) => {
    nav.addEventListener("click", () => {
        counter = nav.innerHTML;
        question.textContent = questionBank[`question${counter}`]["question"];
        number.textContent = `Question ${counter}`;
        textarea.value = "";
        usersAnswer.textContent = "";
        correctAnswer.textContent = "";
        questionNav.forEach((nav) => {
            if (nav.innerHTML == counter) {
                nav.classList.add("light")
            } else {
                nav.classList.remove("light");
            }
        });
    });
});

// Add event listeners to each button (previous, again, next)
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Handle "next" button click
        if (button.classList.contains("next")) {
            let objectLength = []; // Create an array to store the keys of the questionBank object
            for (x in questionBank) { // Loop through the keys in questionBank
                objectLength.push(x); // Add each key to the objectLength array
            }
            counter++; // Increment the counter
            if (counter == (objectLength.length + 1)) { // If counter exceeds the number of questions
                counter = 1; // Reset counter to 1 to loop back to the first question
            }
            // Update the question and question number on the page
            question.textContent = questionBank[`question${counter}`]["question"];
            number.textContent = `Question ${counter}`;
            // Clear the textarea and answers display
            textarea.value = "";
            usersAnswer.textContent = "";
            correctAnswer.textContent = "";
        // Handle "previous" button click

        questionNav.forEach((nav) => {
            if (nav.innerHTML == counter) {
                nav.classList.add("light")
            } else {
                nav.classList.remove("light");
            }
        });
        } else if (button.classList.contains("previous")) {
            if (counter > 1 && counter != 1) { // Check if counter is greater than 1 to prevent going below the first question
                counter--; // Decrement the counter
            }
            // Update the question and question number on the page
            question.textContent = questionBank[`question${counter}`]["question"];
            number.textContent = `Question ${counter}`;
            // Clear the textarea and answers display
            textarea.value = "";
            usersAnswer.textContent = "";
            correctAnswer.textContent = "";
        // Handle "again" button click
        questionNav.forEach((nav) => {
            if (nav.innerHTML == counter) {
                nav.classList.add("light")
            } else {
                nav.classList.remove("light");
            }
        });
        } else {
            // Clear the textarea and answers display
            textarea.value = "";
            usersAnswer.textContent = "";
            correctAnswer.textContent = "";
        }
    });
});

// Handle Enter key press to submit the answer
document.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        event.preventDefault(); // Prevent default behavior of Enter key

        // Check if the textarea is not empty
        if (textarea.value != "") {
            let userAnswerString = textarea.value;
            let userAnswerArray = userAnswerString.split(" ");
            let correctAnswerString = questionBank[`question${counter}`]["answer"];
            let correctAnswerArray = correctAnswerString.split(" ");
            // Display user's answer with highlighted differences
            usersAnswer.innerHTML = highlights(userAnswerArray, correctAnswerArray);
            // Display correct answer with highlighted differences
            correctAnswer.innerHTML = highlights2(userAnswerArray, correctAnswerArray);
        }
    }
});

// Function to highlight differences between user's answer and correct answer
function highlights(array1, array2) {
    const maxLength = Math.max(array1.length, array2.length);
    let display = "";

    for (let i = 0; i < maxLength; i++) {
        if (array1[i] == array2[i]) {
            display += `<span style="background-color: green;">${array1[i]}</span><span style="background-color: green;"> </span>`;
        } else {
            let word1 = array1[i] || "";
            let word2 = array2[i] || "";
            const stringLength = Math.max(word1.length, word2.length);
            let display2 = "";

            for (let k = 0; k < stringLength; k++) {
                if (word1[k] == word2[k]) {
                    display2 += `<span style="background-color: green;">${word1[k]}</span>`;
                } else {
                    display2 += `<span style="background-color: red;">${word1[k] || "-"}</span>`;
                }
            }

            display += `${display2}<span style="background-color: gray;"> </span>`;
        }
    }

    return display;
}

// Function to highlight differences between user's answer and correct answer, focusing on correct answer
function highlights2(array1, array2) {
    const maxLength = Math.max(array1.length, array2.length);
    let display = "";

    for (let i = 0; i < maxLength; i++) {
        if (array1[i] == array2[i]) {
            display += `<span style="background-color: green;">${array2[i]}</span><span style="background-color: green;"> </span>`;
        } else {
            let word1 = array1[i] || "";
            let word2 = array2[i] || "";
            const stringLength = Math.max(word1.length, word2.length);
            let display2 = "";

            for (let k = 0; k < stringLength; k++) {
                if (word1[k] == word2[k]) {
                    display2 += `<span style="background-color: green;">${word2[k]}</span>`;
                } else {
                    display2 += `<span style="background-color: gray;">${word2[k] || ""}</span>`;
                }
            }

            display += `${display2}<span style="background-color: gray;"> </span>`;
        }
    }

    return display;
}