const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Who is the president of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motoboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'None of the above',
        correct: 'b'
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const index = document.getElementById('quiz-index');
const submitBtn = document.getElementById('button');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

let currentQuiz = 0;
let totalQuiz = quizData.length;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    index.innerText = `Question ${currentQuiz + 1} (${totalQuiz - 1} remaining)`;
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    
    let answer = undefined;

    answerEls.forEach((answerEls) => {
        if (answerEls.checked) {
            answer = answerEls.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEls) => {
        answerEls.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        console.log(answer, quizData[currentQuiz].correct, score);
        totalQuiz--;
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h1>Yow answered correctly at ${score}/${quizData.length} questions.</h1> <button onclick="location.reload()">RELOAD</button>`;
        }
    }

});