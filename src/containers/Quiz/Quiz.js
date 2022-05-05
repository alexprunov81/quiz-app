import React, {useState} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

const Quiz = props => {

    const [quiz, setQuiz] = useState([
        {
            question: 'Какого цвета небо?',
            rightAnswerId: 2,
            id: 1,
            answers: [
                {text: 'Черный', id: 1},
                {text: 'Синий', id: 2},
                {text: 'Красный', id: 3},
                {text: 'Зелёный', id: 4}
            ]
        },
        {
            question: 'В каком году был основан Санкт-Петербург?',
            rightAnswerId: 3,
            id: 2,
            answers: [
                {text: '1700', id: 1},
                {text: '1701', id: 2},
                {text: '1703', id: 3},
                {text: '1803', id: 4}
            ]
        },
    ])
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [answerState, setAnswerState] = useState(null)
    const [isFinished, setIsFinished] = useState(false)
    const [results, setResults] = useState({})

    const onAnswerClickHandler = answerId => {

        const question = quiz[activeQuestion]

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }
            setResults(results)
            setAnswerState({[answerId]: 'success'})
            const timeOut = window.setTimeout(() => {
                isQuizFinished() ? setIsFinished(true) : setActiveQuestion(activeQuestion + 1)
                window.clearTimeout(timeOut)
                setAnswerState(null)
            }, 200)
        } else {
            results[question.id] = 'error'
            setAnswerState({[answerId]: 'error'})
            setResults(results)
        }
    }

    const isQuizFinished = () => {
        return activeQuestion + 1 === quiz.length
    }

    const retryHandler = () => {
        setActiveQuestion(0)
        setIsFinished(false)
        setAnswerState(null)
        setResults({})
    }
    return (
        <div className={classes.Quiz}>
            <div className={classes.QuizWrapper}>
                <h1>Ответьте на все вопросы </h1>
                {
                    isFinished
                        ? <FinishedQuiz
                            results={results}
                            quiz={quiz}
                            onRetry={retryHandler}
                        />
                        : <ActiveQuiz
                            answers={quiz[activeQuestion].answers}
                            question={quiz[activeQuestion].question}
                            onAnswerClick={onAnswerClickHandler}
                            quizLength={quiz.length}
                            answerNumber={activeQuestion + 1}
                            state={answerState}
                        />
                }
            </div>
        </div>
    )
}

export default Quiz