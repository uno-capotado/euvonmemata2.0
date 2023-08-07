const quizData = [
    {
        question: "Quanto que é 33 + 77",
        a: "100",
        b: "69",
        c: "420",
        d: "110",
        correct: "d",
    },

    {
        question: "Ele me tira da cadeira de rodas...",
        a: "e sai",
        b: "me bota na pia do banheiro",
        c: "me bota no châo",
        d: "me rouba",
        correct: "b",
    },

    {
        question: "crazy? i was crazy once",
        a: "they locked me in a room",
        b: "a rubber room",
        c: "a rubber room full of rats",
        d: "and the rats made me crazy",
        correct: "a",
    },

    {
        question: "3,141592653589793238... os próxiomos dois numeros serão:",
        a: "76",
        b: "46",
        c: "82",
        d: "nenhum acima",
        correct: "b",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Você repondeu ${score}/${quizData.length} perguntas corretamente ;)</h2>
           <button onclick="location.reload()">Jogar Novamente</button>
           `
       }
    }
})