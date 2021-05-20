import { verifyResponse, calculatePerformance } from './responses.service'
import { performanceResponses, performanceRatingByMonth } from './responses.mock'

const mockQuestion = {
  id: 1,
  questionText: 'This is a test question',
  answerOptions: [
    {
      answerText: 'A',
      isCorrect: true
    },
    {
      answerText: 'B',
      isCorrect: false
    }
  ],
  difficulty: 1
}

describe('Responses Module', () => {
  describe('verifyResponse', () => {
    test('should return true when supplied with correct answer option', () => {
      expect(verifyResponse(mockQuestion, 'A')).toBe(true)
    })

    test('should return false when supplied with incorrect answer option', () => {
      expect(verifyResponse(mockQuestion, 'B')).toBe(false)
    })

    test('should throw an error when answer is not a valid option', () => {
      expect(() => verifyResponse(mockQuestion, 'C')).toThrowError()
    })

    test('should throw an error when answer is not present', () => {
      expect(() => verifyResponse(mockQuestion, '')).toThrowError()
    })
  })

  describe('calculatePerformance', () => {

    const performanceRating =  calculatePerformance(performanceResponses).performanceRating
    const byMonth: any = calculatePerformance(performanceResponses).byMonth

    test('should return an average performance', () => {
      expect(performanceRating).toEqual(40.33)
    })
    test('performance rating should tally by month', () => {

      expect(Object.keys(byMonth).every((key) => {
        const ratingByMonth: any = performanceRatingByMonth
        return ratingByMonth[key].performanceRating === byMonth[key].performanceRating 
      
      })).toEqual(true)
    })

    test('average of all monthly performance breakdown byMonth should be equal to performanceRating', () => {

      const { performanceScore, difficulty } = Object.keys(byMonth).reduce((stat, month) => {
        stat.difficulty += byMonth[month].difficulty
        stat.performanceScore += byMonth[month].performanceScore
        return stat
    } , { performanceScore:0 , difficulty: 0 })
      const avgMonthlyPerformanceRating = ( performanceScore / difficulty )  * 100
      expect(+(avgMonthlyPerformanceRating).toFixed(2)).toEqual(performanceRating)
    })
  })
})
