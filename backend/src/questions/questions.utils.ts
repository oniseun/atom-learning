import { Question} from './questions.types'
const removeCorrectAnswerIndicator = (question: Question): Question => {

    const qstn = JSON.parse(JSON.stringify(question))
    qstn.answerOptions = question.answerOptions.map(answers => {
        delete answers.isCorrect
        return answers
    })
    return qstn
}

export { removeCorrectAnswerIndicator }
