const questionData = [
    {
        question:"Who is the CEO of Facebook",
        a:'Elon musk',
        b:'Jeff Bezos',
        c:'Mark Zuckerberg',
        d:'Jack dorsey',
        correct:'c'
    },
    {
        question:"In which year india got independence",
        a:'1999',
        b:'1947',
        c:'1964',
        d:'1960',
        correct:'b'
    },
    {
        question:"Which language computer understand without translation",
        a:'Binary bit (0/1)',
        b:'Javascript',
        c:'Assembly',
        d:'Python',
        correct:'a'
    },
    {
        question:"Who is new owner of Twitter",
        a:'Jeff Bezos',
        b:'Mark Zuckerberg',
        c:'Elon musk',
        d:'Jack dorsey',
        correct:'c'
    },
    {
        question:"How much Facebook paid to buy Whatsapp",
        a:'19 Billion',
        b:'10 Billion',
        c:'1 Billion',
        d:'4 Million',
        correct:'a'
    },
    {
        question:"How is the current CEO of Apple",
        a:'Mike tyson',
        b:'Jeff Bezos',
        c:'Gautam Adani',
        d:'Tim cook',
        correct:'d'
    },
    {
        question:"Who is the most popular star in india",
        a:'Salman Khan',
        b:'Ajay Devgan',
        c:'Shahrukh Khan',
        d:'Saif ali Khan',
        correct:'c'
    },
    {
        question:"What is the name of SRK house",
        a:'Mannat',
        b:'Antillia',
        c:'Jalsa',
        d:'Heaven',
        correct:'a'
    },
    {
        question:"In which age a baby should go to school",
        a:'5yrs',
        b:'10yrs',
        c:'3yrs',
        d:'12yrs',
        correct:'c'
    },
    {
        question:"Which thing a human should give more importance",
        a:'Health',
        b:'Wealth',
        c:'Women',
        d:'Cloth',
        correct:'a'
    }
]
let questionEl = document.getElementById('question');
let answerA = document.getElementById('input-a');
let answerB = document.getElementById('input-b');
let answerC = document.getElementById('input-c');
let answerD = document.getElementById('input-d');
const btn = document.getElementById('btn');
let radio = document.querySelectorAll('input[type="radio"]');
let quizEl = document.getElementById('quiz-ul')


let currentQuiz = 0;
let score = 0;
deSelect();

function load(){
    questionEl.innerText = questionData[currentQuiz].question;
    answerA.innerText = questionData[currentQuiz].a;
    answerB.innerText = questionData[currentQuiz].b;
    answerC.innerText = questionData[currentQuiz].c;
    answerD.innerText = questionData[currentQuiz].d;
}
btn.addEventListener('click',()=> {
    let answer = Select();
    if(answer){
        if(answer === questionData[currentQuiz].correct){
            score++;
            console.log(score);
        }
        currentQuiz++;
    if(currentQuiz < questionData.length){
        deSelect();
    } 
    else{
        questionEl.innerText = "";
        quizEl.innerHTML = `
                <h1>You answered correctly at ${score}/${questionData.length} questions.</h1>
                
                <button onclick="location.reload()">Reload</button>`
    }
}
});
function deSelect(){
    radio.forEach(number => {
        number.checked = false;
    });
    load();
}
function Select(){
    let answer = undefined;
    radio.forEach(number => {
        if(number.checked){
            answer = number.id;
        }
    });
    return answer;
}