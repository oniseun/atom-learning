export type Answer = {
  answerText: string
  isCorrect?: boolean
}

export type Question = {
  id: number
  questionText: string
  answerOptions: Array<Answer>
  difficulty: number //range is 1 (easy) - 5 (hard)
}
