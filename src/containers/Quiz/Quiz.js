import React, {useState} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

const Quiz = props => {

    const [quiz, setQuiz] = useState([
        {
            question: 'Какого цвета небо?',
            rightAnswerId: 2,
            answers: [
                {text: 'Черный', id: 1},
                {text: 'Синий', id: 2},
                {text: 'Красный', id: 3},
                {text: 'Зелёный', id: 4}
            ]
        }
    ])

    const onAnswerClickHandler = (answerId) => {
        console.log('Answer Id ', answerId)
    }

    return (
        <div className={classes.Quiz}>
            <div className={classes.QuizWrapper}>
                <h1>Ответьте на все вопросы </h1>
                <ActiveQuiz
                    answers={quiz[0].answers}
                    question={quiz[0].question}
                    onAnswerClick={onAnswerClickHandler}
                />
            </div>
        </div>
    )
}

export default Quiz