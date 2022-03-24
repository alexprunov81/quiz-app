import React from 'react'
import classes from './FinishedQuiz.module.css'
import Button from '../UI/Button/Button'
import {Link} from 'react-router-dom'

const FinishedQuiz = props => {


    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error'
                            ? 'fa fa-times'
                            : 'fa-check',
                        classes[props.results[quizItem.id]]

                    ]
                    return (
                        <li
                            key={index}

                        >
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>
            <p>Правильно 4 из 10</p>
            <div>
                <Button onRetry={props.onRetry} type='primary'>
                    Повторить
                </Button>
                <Link to={'/'}>
                    <Button type='danger'>Закончить</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz