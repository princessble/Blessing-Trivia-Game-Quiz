// Get the necessary HTML elements
const usernameContainer = document.getElementById("username-container");
const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score-value");
const feedbackElement = document.getElementById("feedback");


// Initialize variables for tracking quiz progress and score
let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    const username = document.getElementById("username").value;
    if (username.trim() !== "") {
        // Hide the username input container
        usernameContainer.style.display = "none";
        
        // Display the first question
        displayQuestion();
    } else {
        // Display an error message or prompt the user to enter a valid username
    }
}

// Event listener for the start button
startButton.addEventListener("click", startQuiz);

// Array of quiz questions
const questions = [
    // Question objects with options and correct answers
    // Add more questions here
        {
            question: "1. What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: 0
        },
        {
            question: "2. Which planet is known as the 'Red Planet'?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: 1
        },
        {
            question: "3. Which famous scientist developed the theory of general relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            correctAnswer: 1
        },
        {
            question: "4. What is the largest mammal on Earth?",
            options: ["Blue Whale", "Elephant", "Giraffe", "Lion"],
            correctAnswer: 0
        },
        {
            question: "5. Which country is known as the 'Land of the Rising Sun'?",
            options: ["China", "Japan", "South Korea", "Thailand"],
            correctAnswer: 1
        },
        {
            question: "6. Which famous artist painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
            correctAnswer: 1
        },
        {
            question: "7. What is the chemical symbol for gold?",
            options: ["Au", "Ag", "G", "Go"],
            correctAnswer: 0
        },
        {
            question: "8. Which famous playwright wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "George Orwell", "Charles Dickens", "Jane Austen"],
            correctAnswer: 0
        },
        {
            question: "9. What is the largest planet in our solar system?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: 2
        },
        {
            question: "10. Which animal is known as the 'King of the Jungle'?",
            options: ["Lion", "Tiger", "Elephant", "Giraffe"],
            correctAnswer: 0
        },

        {
            question: "11. Which gas do plants use for photosynthesis?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correctAnswer: 1
        },
        {
            question: "12. In which year did the Titanic sink?",
            options: ["1905", "1912", "1921", "1930"],
            correctAnswer: 1
        },
        {
            question: "13. What is the largest species of shark?",
            options: ["Hammerhead Shark", "Great White Shark", "Tiger Shark", "Bull Shark"],
            correctAnswer: 1
        },
        {
            question: "14. Which planet is known as the 'Morning Star' or 'Evening Star'?",
            options: ["Venus", "Mars", "Mercury", "Saturn"],
            correctAnswer: 0
        },
        {
            question: "15. Who wrote the novel 'Pride and Prejudice'?",
            options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Agatha Christie"],
            correctAnswer: 0
        },
    ];
    

// Function to display a question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Display the current question
    questionElement.textContent = currentQuestion.question;
    
    // Display answer options as buttons
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(index));
        optionsElement.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        feedbackElement.textContent = "Correct!";
    } else {
        feedbackElement.textContent = "Incorrect!";
    }
    
    // Update score and move to the next question
    scoreElement.textContent = score;
    currentQuestionIndex++;
    
    // Check if there are more questions to display
    if (currentQuestionIndex < questions.length) {
        displayQuestion();

    } else {
        // Display quiz completion message
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
    }
}

// Function to submit the quiz
function submitQuiz() {

    // Calculate final score, display results, etc.
    // Customize this function based on your requirements
    // For now, let's display an alert with the final score
    alert(`Quiz completed!\nYour final score is: ${score}/${questions.length}`);
}

// Event listener for the "Submit Quiz" button
document.getElementById("submit-button").addEventListener("click", submitQuiz);

// Display the first question when the page loads
displayQuestion();

// Get references to elements
const finalScoreElement = document.getElementById('finalScore');
const restartButton = document.getElementById('restartButton');


// Function to restart the quiz
function restartQuiz() {
    // Reset any necessary variables or states here
    score = 0;
    currentQuestionIndex = 0;

    // Clear the final score display
    finalScoreElement.textContent = '';

    // Re-display the first question
    displayQuestion();
}

// Event listener for the restart button
restartButton.addEventListener('click', restartQuiz);
