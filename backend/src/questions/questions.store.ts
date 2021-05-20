import store from '../../data/questions.json'
import { Question } from './questions.types'

const getQuestions = (): Question[] => store.questions

export { getQuestions }
