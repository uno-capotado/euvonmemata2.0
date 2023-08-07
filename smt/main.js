const quiz = [
    {
        question: "uaua",
        a: "a",
        b: "b",
        c: "c",
        d: "D",
        correct: "a",
    },
    {
        question: "dkfej",
        a: "aa",
        b: "bb",
        c: "cc",
        d: "Dd",
        correct: "b",
    },
    {
        question: "fazoL",
        a: "aaa",
        b: "bbb",
        c: "ccc",
        d: "Ddd",
        correct: "c",
    },
];

const quizur = document.getElementById('quiz')
const respostas = document.querySelectorAll('.resposta')
const quizando = document.getElementById('question')
const textoa = document.getElementById('resposta_a')
const textob = document.getElementById('resposta_b')
const textoc = document.getElementById('resposta_c')
const textod = document.getElementById('resposta_d')
const responder = document.getElementById('responder')

let quiztotal = 0
let score = 0

loadQuiz()

function loadQuiz() {

   naoSelecionar() 

   const quizdata = quiz[quiztotal]

   quizando.innerHTML = quizdata.question
   textoa.innerText = quizdata.a
   textob.innerText = quizdata.b
   textoc.innerText = quizdata.c
   textod.innerText = quizdata.d
}

function naoSelecionar() {
    respostas.forEach(quizando => quizando.checked = false)
}

function selecionar() {
    let resposta
    respostas.forEach(quizando => {
        if(quizando.checked) {
            resposta = quizando.id
        }
    })
    return resposta
}

responder.addEventListener('click', () => {
    const resposta = selecionar()
    if(resposta) {
        if(resposta === quiz[quiztotal].correct){
            score++
        }
        
        quiztotal++

        if(quiztotal < quiz.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>voce respondeu ${score}/${quiz.length} questoes certas</h2>
            <button onclick="location.reload()">reiniciar</button>
            `
        }
    }
})
