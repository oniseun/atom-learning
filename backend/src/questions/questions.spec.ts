import { getOne, getMany, getRandom } from './questions.service'
import { mockQuestions, mockQuestionsBlind } from './questions.mock'

jest.mock('./questions.store', () => ({
  getQuestions: jest.fn(() => mockQuestions)
}))

describe('Questions Module', () => {
  describe('getOne', () => {
    test('should return the first question', () => {
      expect(getOne(1)).toEqual(mockQuestionsBlind[0])
    })

    test('should throw an error if question does not exist', () => {
      expect(() => getOne(5)).toThrowError()
    })
  })

  describe('getMany', () => {
    test('should return all the questions', () => {
      expect(getMany()).toEqual(mockQuestionsBlind)
    })
  })

  describe('getRandom', () => {
    test('should return one question that exists in the store', () => {
      const randomQuestion = getRandom()
      expect(mockQuestionsBlind.find((q) => q.id === randomQuestion.id)).toEqual(randomQuestion)
    })
  })
})
