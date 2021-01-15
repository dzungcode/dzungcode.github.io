
const comment = document.querySelector('#comment')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const mostNameTrans = localStorage.getItem('mostNameTrans')

finalScore.innerText = mostRecentScore

if (mostRecentScore >= 100) {
    comment.innerText = `You know me mostt`
} else {
    if (mostRecentScore >=80) {
        comment.innerText = `Hmmmm`
    }
    else {
        comment.innerText = `${mostNameTrans} như kẹc :)`
    }
}