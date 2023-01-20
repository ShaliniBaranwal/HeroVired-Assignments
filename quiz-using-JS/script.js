const container = document.createElement('div');
container.classList.add('container');

const question = document.createElement('div');
question.id = 'question';

const optionsElem = document.createElement('div');
optionsElem.id = 'options';

const form = document.createElement('form');

for (let i = 0; i < 4; i++) {
    const input = document.createElement('input');

    input.id = i.toString();
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'answer');

    form.appendChild(input);

    const label = document.createElement('label');

    label.setAttribute('for', i.toString());
    label.classList.add('option');

    form.appendChild(label);

    if (i !== 3) {
        form.appendChild(document.createElement('br'));
    }
}

optionsElem.appendChild(form);

const submitBtn = document.createElement('button');

submitBtn.classList.add('btn-submit');
submitBtn.innerText = 'SUBMIT';

container.appendChild(question);
container.appendChild(optionsElem);
container.appendChild(submitBtn);

document.body.appendChild(container);

// -----------------------------------------------------------

const scoreDisplay = document.createElement('div');
scoreDisplay.classList.add('score-display');

const reloadBtn = document.createElement('button');
reloadBtn.classList.add('reload-btn');

reloadBtn.innerHTML = 'Reload';

const finalDiv = document.createElement('div');
finalDiv.classList.add('score');

finalDiv.appendChild(scoreDisplay);
finalDiv.appendChild(reloadBtn);

document.body.appendChild(finalDiv);

// -----------------------------------------------------------

const text1Elem = document.getElementById('no-of-questions-answered');

const questionElement = document.getElementById('question');
const optionInputs = document.getElementsByClassName('option');

let questionNumber = 1;

let score = 0;
let questionsAnswered = 0;

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

    console.log(questionNumber);

    for (let i = 0; i < options[number].length; i++) {
        optionInputs[i].innerHTML = options[number][i];
    }
}

setQuestion(0);

submitBtn.addEventListener('click', () => {
    questionsAnswered++;

    const checkAnswer = document.querySelector('input[name="answer"]:checked');

    if (checkAnswer.id == answers[questionNumber - 1]) {
        score++;
    }

    checkAnswer.checked = false;

    if (questionNumber === 4) {
        reset();
    } else {
        questionNumber++;
        setQuestion(questionNumber - 1);
    }
});

function reset() {
    container.style.display = 'none';
    finalDiv.style.display = 'block';

    scoreDisplay.innerHTML = `You answered ${score} / 4 questions correctly.`;

    reloadBtn.addEventListener('click', () => {
        container.style.display = 'block';
        finalDiv.style.display = 'none';

        score = 0;

        questionNumber = 1;
        setQuestion(0);
    });
}
