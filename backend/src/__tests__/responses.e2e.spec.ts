import supertest from 'supertest'
import app from '../index'

const request = supertest(app)

describe('E2E Tests (Responses Module)', () => {
  test('should return true if provided with correct answer and question', async (done) => {
    const res = await request.post('/responses/verify').send({
      questionId: 194983,
      userAnswer: 'piglet'
    })
    expect(res.status).toBe(200)
    expect(res.body).toEqual({ isCorrect: true })
    done()
  })

  test('should return false if provided with incorrect answer and question', async (done) => {
    const res = await request.post('/responses/verify').send({
      questionId: 194983,
      userAnswer: 'pork'
    })
    expect(res.status).toBe(200)
    expect(res.body).toEqual({ isCorrect: false })
    done()
  })

  test('should return error code if user answer isnt in question', async (done) => {
    const res = await request.post('/responses/verify').send({
      questionId: 194983,
      userAnswer: 'not_an_option'
    })
    expect(res.status).toBe(400)
    done()
  })

  test('should return error code if question is missing', async (done) => {
    const res = await request.post('/responses/verify').send({
      userAnswer: 'some_answer'
    })
    expect(res.status).toBe(400)
    done()
  })

  test('should return error code if userAnswer is missing', async (done) => {
    const res = await request.post('/responses/verify').send({
      questionId: 194983
    })
    expect(res.status).toBe(400)
    done()
  })
})
