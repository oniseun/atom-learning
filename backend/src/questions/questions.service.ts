import { Question } from './questions.types'
import { getQuestions } from './questions.store'
import { removeCorrectAnswerIndicator } from './questions.utils'
const getOne = (id: number, blind: boolean = true): Question => {
  const question: Question = getQuestions().find((qus) => qus.id === id)

  if (!question) {
    throw new Error('QUESTION_NOT_FOUND')
  }

  return blind ? removeCorrectAnswerIndicator(question) : question
}

const getRandom = (blind : boolean = true): Question => {
  const question = getQuestions()[Math.floor(Math.random() * getQuestions().length)]

  return blind ? removeCorrectAnswerIndicator(question) : question
}

const getMany = (blind: boolean = true): Question[] => {
  return getQuestions().map(question => blind ? removeCorrectAnswerIndicator(question) : question)
}

export { getOne, getRandom, getMany }
