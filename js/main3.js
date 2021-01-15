
const choices = Array.from(document.querySelectorAll('.question-img'));
const choiceDescs = Array.from(document.querySelectorAll('.question-desc'));
const questionNum = document.querySelector('#quiz');
const scoreText = document.querySelector('#score');

const choiceContainers = Array.from(document.querySelectorAll('.choice-container'));

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        choiceDesc1: 'Beach',
        choice1: '<img src="/img/quiz/q1_beach.jpg" alt="beach" data-number="1">',
        choiceDesc2: 'Mountain',
        choice2: '<img src="/img/quiz/q1_mountain.jpg" alt="mountain" data-number="2">',
        answer: 2,

    },
    {
        choiceDesc1: 'Coffee',
        choice1: '<img src="/img/quiz/q2_coffee.jpg" alt="coffee" data-number="1">',
        choiceDesc2: 'Juice',
        choice2: '<img src="/img/quiz/q2_juice.jpg" alt="juice" data-number="2">',
        answer: 2,
    },
    {
        choiceDesc1: 'External beauty',
        choice1: '<img src="/img/quiz/q3_external.jpg" alt="external" data-number="1">',
        choiceDesc2: 'Inner value',
        choice2: '<img src="/img/quiz/q3_inner.jpg" alt="inner" data-number="2">',
        answer: 1,

    },
    {
        choiceDesc1: 'Action film',
        choice1: '<img src="/img/quiz/q4_action.jpg" alt="action" data-number="1">',
        choiceDesc2: 'Romance film',
        choice2: '<img src="/img/quiz/q4_romance.jpg" alt="romance" data-number="2">',
        answer: 2,

    },
    {
        choiceDesc1: 'Sleeping',
        choice1: '<img src="/img/quiz/q5_sleeping.jpeg" alt="sleeping" data-number="1">',
        choiceDesc2: 'Outdoor activities',
        choice2: '<img src="/img/quiz/q5_outdoor.jpg" alt="outdoor" data-number="2">',
        answer: 2,

    },
    {
        choiceDesc1: 'Kick-boxing',
        choice1: '<img src="/img/quiz/q6_boxing.jpg" alt="boxing" data-number="1">',
        choiceDesc2: 'Golf',
        choice2: '<img src="/img/quiz/q6_golf.jpg" alt="golf" data-number="2">',
        answer: 1,

    },
    {
        choiceDesc1: 'Black',
        choice1: '<img src="/img/quiz/q7_black.png" alt="black" data-number="1">',
        choiceDesc2: 'Red',
        choice2: '<img src="/img/quiz/q7_red.jpg" alt="red" data-number="2">',
        answer: 1,

    },
    {
        choiceDesc1: 'Lòng lợn',
        choice1: '<img src="/img/quiz/q8_longlon.jpg" alt="longlon" data-number="1">',
        choiceDesc2: 'Steak',
        choice2: '<img src="/img/quiz/q8_steak.jpg" alt="steak" data-number="2">',
        answer: 1,

    },
    {
        choiceDesc1: 'Hoodie',
        choice1: '<img src="/img/quiz/q9_hoodie.jfif" alt="hoodie" data-number="1">',
        choiceDesc2: 'Suit',
        choice2: '<img src="/img/quiz/q9_suit.jfif" alt="suit" data-number="2">',
        answer: 2,

    },
    {
        choiceDesc1: 'Rock',
        choice1: '<img src="/img/quiz/q10_rock.jpg" alt="rock" data-number="1">',
        choiceDesc2: 'Pop',
        choice2: '<img src="/img/quiz/q10_pop.jpg" alt="pop" data-number="2">',
        answer: 2,
    }

]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

// Sinh câu hỏi
getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/html/end.html')
    }

    questionCounter++
    questionNum.innerText = `${questionCounter}/${MAX_QUESTIONS}`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerHTML = currentQuestion['choice' + number]
    })

    choiceDescs.forEach(choiceDesc => {
        const number = choiceDesc.dataset['number']
        choiceDesc.innerText = currentQuestion['choiceDesc' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

// Bôi hình ảnh
// choiceContainers.forEach(choiceContainer => {
//     choiceContainer.addEventListener('click', (e) => {
//         if(!acceptingAnswers) return

//         acceptingAnswers = false
//         const selectedChoice = e.path.filter(item => item.tagName !== 'IMG')[1]
//         const selectedAnswer = selectedChoice.dataset['number']
//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

//         if(classToApply === 'correct') {
//             incrementScore(SCORE_POINTS)
//         }
        
//         selectedChoice.classList.add(classToApply)

//         setTimeout(() => {
//             selectedChoice.classList.remove(classToApply)
//             getNewQuestion()

//         }, 1000)
//     })
// })

// Bôi hình ảnh
choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()