import './Question.css'

import React from 'react'

import { useQuestion, ResultState } from '../../hooks/useQuestion'

const Question = () => {
  const { question, verify, result, nextQuestion } = useQuestion()

  if (!question) {
    return <div>Loading...</div>
  }

  return (
    <section className="container">
      <h2>{question.questionText}</h2>
      <div className="question">
        {result ? (
          <>
            <p>{result === ResultState.CORRECT ? 'Correct!' : "Unlucky, that's not quite right"}</p>
            <button onClick={nextQuestion}>Next Question</button>
          </>
        ) : (
          question.answerOptions.map((answer, i) => (
            <button key={i} onClick={() => verify(answer.answerText)} className="answer-option">
              {answer.answerText}
            </button>
          ))
        )}
      </div>
    </section>
  )
}

export default Question
