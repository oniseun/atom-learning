import { Question } from './questions.types'

export const mockQuestions: Question[] = [
  {
    id: 1,
    questionText: 'This is a test question for tests',
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
  },
  {
    id: 2,
    questionText: 'This is another test question for tests',
    answerOptions: [
      {
        answerText: 'A',
        isCorrect: false
      },
      {
        answerText: 'B',
        isCorrect: true
      }
    ],
    difficulty: 2
  },
  {
    id: 3,
    questionText: 'Yet another test question for tests!',
    answerOptions: [
      {
        answerText: 'This one',
        isCorrect: false
      },
      {
        answerText: 'Or that one',
        isCorrect: true
      },
      {
        answerText: 'Or maybe those ones',
        isCorrect: false
      }
    ],
    difficulty: 3
  }
]

export const mockQuestionsBlind: Question[] = [
  {
    id: 1,
    questionText: 'This is a test question for tests',
    answerOptions: [
      {
        answerText: 'A'
      },
      {
        answerText: 'B'
      }
    ],
    difficulty: 1
  },
  {
    id: 2,
    questionText: 'This is another test question for tests',
    answerOptions: [
      {
        answerText: 'A'
      },
      {
        answerText: 'B'
      }
    ],
    difficulty: 2
  },
  {
    id: 3,
    questionText: 'Yet another test question for tests!',
    answerOptions: [
      {
        answerText: 'This one'
      },
      {
        answerText: 'Or that one'
      },
      {
        answerText: 'Or maybe those ones'
      }
    ],
    difficulty: 3
  }
]
