//Question bank
var questionBank = [{
    question: 'what does CSS stants for ?',
    option: [' central style sheets', 'cascading style sheets', 'cascading simple sheets', 'cars suvs sailboats'],
    answer: 'cascading style sheets'
},
{
    question: 'what does HTML stands for ?',
    option: ['hypertext markup language', 'hypertext markdown language', 'hyperloop machine language ', 'helicopters terminals motorboats lamborginis'],
    answer: 'hypertext markup language'
},
{
    question: 'In which year was javascript launched ?',
    option: ['1996', '1995', '1994', 'All of the above'],
    answer: '1995'
},
{
    question: 'what does PHP stands for ?',
    option: ['hypertext preprocessor', 'hypertext programming', 'hypertext preprogramming', 'hometext preprocessor'],
    answer: 'hypertext preprocessor'
},
{
    question: 'which language runs in a web browser ?',
    option: ['java', 'C', 'python', 'javascript'],
    answer: ' javascript'
}
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {
for (var a = 0; a < span.length; a++) {
    span[a].style.background = 'none';
}
question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
option0.innerHTML = questionBank[i].option[0];
option1.innerHTML = questionBank[i].option[1];
option2.innerHTML = questionBank[i].option[2];
option3.innerHTML = questionBank[i].option[3];
stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = 'limegreen';
} else {
    document.getElementById(e.id).style.background = 'tomato';
}
setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
if (i < questionBank.length - 1) {
    i = i + 1;
    displayQuestion();
} else {
    points.innerHTML = score + '/' + questionBank.length;
    quizContainer.style.display = 'none';
    scoreboard.style.display = 'block'
}
}

//click events to next button
next.addEventListener('click', nextQuestion);

//Back to Quiz button event
function backToQuiz() {
location.reload();
}

//function to check Answers
function checkAnswer() {
var answerBank = document.getElementById('answerBank');
var answers = document.getElementById('answers');
answerBank.style.display = 'block';
scoreboard.style.display = 'none';
for (var a = 0; a < questionBank.length; a++) {
    var list = document.createElement('li');
    list.innerHTML = questionBank[a].answer;
    answers.appendChild(list);
}
}


displayQuestion();