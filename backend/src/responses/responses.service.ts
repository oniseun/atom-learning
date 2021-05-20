import { Answer, Question } from '../questions/questions.types'
import { UserResponse, UserPerformance } from './responses.types'
const verifyResponse = (question: Question, userAnswer: string): boolean => {
  const answer: Answer = question.answerOptions.find((answer: Answer) => answer.answerText === userAnswer)

  if (!answer) {
    throw new Error('ANSWER_NOT_FOUND')
  }

  return answer.isCorrect;
}

const calculatePerformance = (responses: UserResponse[]): UserPerformance => {
  let performanceScore = 0, difficulty = 0, performanceRating = 0
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  const byMonth = monthNames.reduce((stats: any, month: string) => {
    stats[month] = { questionsAnswered: 0, wrongAnswers:0, correctAnswers:0,  difficulty: 0, performanceScore: 0, performanceRating: 0 }
    return stats
  }, {})

  responses.forEach(res => {
    const { question, userAnswer, dateUnix } = res

    const month = monthNames[(new Date(dateUnix * 1000)).getMonth()]
    difficulty += question.difficulty
    byMonth[month].questionsAnswered++
    byMonth[month].difficulty += question.difficulty
    if (verifyResponse(question, userAnswer)) {
      const score = (1 * question.difficulty)
      performanceScore += score
      byMonth[month].performanceScore += score
      byMonth[month].correctAnswers++
    } else {
      const score = (5 - question.difficulty)
      performanceScore -= score
      byMonth[month].performanceScore -= score
      byMonth[month].wrongAnswers++
    }
    performanceRating = +((performanceScore / difficulty) * 100).toFixed(2)
    byMonth[month].performanceRating = +(byMonth[month].performanceScore / byMonth[month].difficulty) * 100
    
  })
  
  return {
    byMonth,
    performanceRating: +((performanceScore / difficulty) * 100).toFixed(2)
  }
}

export { verifyResponse, calculatePerformance }
