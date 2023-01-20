const text1Elem = document.getElementById('no-of-questions-answered');
const scoreElem = document.getElementById('score');

const questionElement = document.getElementById('question');
const optionInputs = document.getElementsByClassName('option');

const btnSubmit = document.getElementById('btn-submit');

let questionNumber = 1;

let score = 0;
let questionsAnswered = 0;

scoreElem.innerHTML = score;
text1Elem.innerHTML = questionsAnswered;

const questions = [
    'When was JavaScript launched?',
    'How do we get the DOM object in JavaScript?',
    'How are the objects organised in HTML DOM?',
    'Which of the following can be implemented using animation?'
];

const options = [
    ['1996', '1995', '1994', 'None of the above'],
    ['getElementById()', 'getObject()', 'getElement()', 'getNode()'],
    ['Class wise', 'Hierarchy', 'Stack', 'Queue'],
    ['Fireworks', 'Fade effect', 'Roll-in or Roll-out', 'All of the above']
];

const answers = [1, 0, 1, 3];

function setQuestion(number) {
    questionElement.innerHTML = questions[number];

    for (let i = 0; i < options[number].length; i++) {
        optionInputs[i].innerHTML = options[number][i];
    }
}

setQuestion(0);

btnSubmit.addEventListener('click', () => {
    questionsAnswered++;

    const checkAnswer = document.querySelector('input[name="answer"]:checked');

    if (checkAnswer.id == answers[questionNumber - 1]) {
        score++;
        scoreElem.innerHTML = score;
    }

    checkAnswer.checked = false;

    questionNumber++;

    text1Elem.innerHTML = questionsAnswered;

    setQuestion(questionNumber - 1);
});
