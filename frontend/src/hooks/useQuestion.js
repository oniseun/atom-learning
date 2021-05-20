import { useEffect, useState } from 'react'

export const ResultState = {
  CORRECT: 1,
  INCORRECT: 2
}

export const useQuestion = () => {
  const [question, setQuestion] = useState(null)
  const [result, setResult] = useState(null)

  const fetchQuestion = async () => {
    const response = await fetch('http://localhost:4000/questions/random')
    const data = await response.json()

    setQuestion(data)
  }

  const verify = (response) => {
    setResult(ResultState.CORRECT)
  }

  const nextQuestion = () => {
    setResult(null)
    fetchQuestion()
  }

  useEffect(() => {
    fetchQuestion()
  }, [])

  return { question, verify, result, nextQuestion }
}
