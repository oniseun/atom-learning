import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import questionsRouter from './questions/questions.controller'
import responsesRouter from './responses/responses.controller'

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors())

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`ACCESS LOG: ${req.url}`)
  next()
})

app.get('/health', (req, res) => {
  res.json({ isAlive: true })
})

app.use('/questions', questionsRouter)
app.use('/responses', responsesRouter)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Backend server started at http://localhost:${port}`)
  })
}

export default app
