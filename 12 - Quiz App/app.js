const quizData = [
    {
        question: "Who is the founder of Facebook",
        a:'Elon Musk',
        b:'Peter Thiel',
        c:'Mark Zuckerberg',
        d:'Steve Jobs',
        correct:'c' 
    } ,
    {
        question:"How much it cost elon to buy twitter",
        a:'44$ Billion',
        b:'4$ Billion',
        c:'23$ Billion',
        d:'80 Hazaar',
        correct:'a'
    },
    {
        question:"What is most popular song in youtube",
        a:'Dusk till Down',
        b:'Shape of you',
        c:'Selfie maine le li aaj',
        d:'Despacito',
        correct:'d'
    },
    {
        question:"Who saved apple to go bankrupt",
        a:'Xerox',
        b:'Microsoft',
        c:'Nintendo',
        d:'Samsung',
        correct:'b'
    },
    {
        question:"What is the full form of 'DevOps' ",
        a:'Development &opportunity',
        b:'Development &OpenSource',
        c:'Development & Operation',
        d:'Development & Orange',
        correct:'c'
    }
];
let quizz = document.getElementById('quiz');
const answersEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const submitBtn = document.getElementById('submit');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deSelectEl();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answersEl.forEach((ans) => {
        if(ans.checked){
         answer = ans.id;   
        }
    });
    return answer;
}


function deSelectEl(){
    answersEl.forEach((ans) => {
     ans.checked = false;
    });
}

submitBtn.addEventListener('click',() => {
   const answer = getSelected();
   console.log(score);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
    }
    else{
      quizz.style.padding = '2em'
      quizz.innerHTML = `<h2>You answered correctly at ${score} / ${quizData.length} question.</h2 >`
    }
   }
});