import { Question } from '../questions/questions.types'

export type UserResponse = {
  question: Question
  userAnswer: string
  dateUnix: number
}

export type UserPerformance = {
  performanceRating: number
  byMonth?: object
}

export type MonthlyBreakDown = {
  January: MonthlyStats,
  February: MonthlyStats,
  March: MonthlyStats,
  April: MonthlyStats,
  May: MonthlyStats,
  June: MonthlyStats,
  July: MonthlyStats,
  August: MonthlyStats,
  September: MonthlyStats,
  October: MonthlyStats,
  November: MonthlyStats,
  December: MonthlyStats,

}

export type MonthlyStats = {
   questionsAnswered: number,
    wrongAnswers: number,
    correctAnswers: number,
    difficulty: number,
    performanceScore: number,
    performanceRating: number 
}