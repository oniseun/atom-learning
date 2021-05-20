import express, { Router, Request, Response, NextFunction } from 'express'
const routes: Router = express.Router()
import { verifyResponse } from './responses.service'
import { getOne } from '../questions/questions.service'
const LOG_PREFIX = 'response.controller: '
routes.post('/verify', (req: Request, res: Response, next: NextFunction) => {
  
  try {
    const { questionId, userAnswer } = req.body
    const id = parseInt(questionId as string)
    const question = getOne(id, false)
    const isCorrect =  verifyResponse(question, userAnswer)
    return res.status(200).json({isCorrect})

  } catch (e) {
    return res.status(400).json({message: e.message})

  }
})

export default routes
