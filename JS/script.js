const startContainer = document.getElementById("start-container");
const categoryContainer = document.getElementById("category-container");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;
let score = 0;
let questions = [];
const userAnswers = [];

const toggleBgButton = document.getElementById("toggle-bg");
const body = document.body;

const backgrounds = [
   
    "IMG/planet.jpg",
    "IMG/aurora.webp",
    "IMG/night_sky.jpg",
];

let currentIndex = 0; 

const preloadedImages = [];
backgrounds.forEach(src => {
    const img = new Image();
    img.src = src;
    preloadedImages.push(img);
});


toggleBgButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % backgrounds.length;
    body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
});

function startQuiz() {
    startContainer.style.display = "none";
    categoryContainer.classList.remove("hidden");
}

function selectCategory(category) {
    categoryContainer.style.display = "none";
    quizContainer.classList.remove("hidden");

    if (category === "IP") {
        questions = questionsIP;
    } else if (category === "Estruturada") {
        questions = questionsEstruturada;
    } else if (category === "POO") {
        questions = questionsPOO;
    }

    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2 style="color : #ffffff;">${questionData.question}</h2>
        <ul>
            ${questionData.options.map((option, index) => `
                <li class="option" onclick="selectAnswer(${index})">${option}</li>
            `).join('')}
        </ul>
        <p id="explanation" class="hidden">${questionData.explanation}</p>
    `;

    nextButton.classList.add("hidden");
}

function selectAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selectedIndex;

    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.classList.remove("correct", "incorrect");
        if (index === questionData.correct) {
            option.classList.add("correct");
        } else if (index === selectedIndex) {
            option.classList.add("incorrect");
        }
        option.style.pointerEvents = "none";
    });

    document.getElementById("explanation").classList.remove("hidden");

    if (selectedIndex === questionData.correct) {
        score++;
    }

    nextButton.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    let finalGrade = (score / questions.length) * 10;

    let statusMessage = "";
    let statusColor = "";

    if (finalGrade > 7) {
        statusMessage = "Aprovado! 🎉";
        statusColor = "#4CAF50";
    } else if (finalGrade >= 4) {
        statusMessage = "Em Avaliação Final! 📖";
        statusColor = "#FFC107";
    } else {
        statusMessage = "Reprovado! ❌";
        statusColor = "#F44336";
    }

    let resultHTML = `
        <h2>Quiz Finalizado!</h2>
        <p>Sua pontuação: <strong>${score} de ${questions.length}</strong> (${finalGrade.toFixed(2)}/10)</p>
        <h3 style="color: ${statusColor};">${statusMessage}</h3>
        
        <h3>Revisão de Respostas:</h3>
        <table id="result-table">
            <thead>
                <tr>
                    <th onclick="sortTable(0)">Pergunta 🔼</th>
                    <th onclick="sortTable(1)">Sua Resposta 🔼</th>
                    <th onclick="sortTable(2)">Resposta Correta 🔼</th>
                    <th onclick="sortTable(3)">Explicação 🔼</th>
                </tr>
            </thead>
            <tbody>
    `;

    questions.forEach((question, index) => {
        let userAnswerIndex = userAnswers[index];
        let userAnswerText = userAnswerIndex !== undefined ? question.options[userAnswerIndex] : "Não respondida";
        let correctAnswerText = question.options[question.correct];

        let rowClass = userAnswerIndex === question.correct ? "correct-row" : "incorrect-row";

        resultHTML += `
            <tr class="${rowClass}">
                <td>${question.question}</td>
                <td>${userAnswerText}</td>
                <td>${correctAnswerText}</td>
                <td>${question.explanation}</td>
            </tr>
        `;
    });

    resultHTML += `</tbody></table>`;

    questionContainer.innerHTML = resultHTML;
    nextButton.style.display = "none";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers.length = 0; 

    quizContainer.classList.add("hidden"); 
    categoryContainer.classList.remove("hidden"); 
}

function sortTable(columnIndex) {
    let table = document.getElementById("result-table");
    let tbody = table.querySelector("tbody");
    let rows = Array.from(tbody.querySelectorAll("tr"));

    let sortedRows = rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        let cellB = rowB.cells[columnIndex].innerText.toLowerCase();
        return cellA.localeCompare(cellB);
    });

    tbody.innerHTML = "";
    sortedRows.forEach(row => tbody.appendChild(row));
}










nextButton.addEventListener("click", nextQuestion);
alert("Olá, boa sorte em nosso quiz!")
