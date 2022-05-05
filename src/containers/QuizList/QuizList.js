import React, {useEffect, useState} from 'react'
import classes from './QuizList.module.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

const QuizList = () => {

    const [quizes, setQuizes] = useState([])

    const renderQuizzes = () => {
        return quizes.map(quiz => {
            return (
                <li
                    key={quiz.id}
                >
                    <NavLink to={'/quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    useEffect(async () => {
        try {
            const response = await axios.get('https://react-quiz-app-minin-default-rtdb.europe-west1.firebasedatabase.app/quizes.json')
            const quizes = []
            Object.keys(response.data).forEach((key, index) => {
                quizes.push({
                    id: key,
                    name: `Тест №${index + 1}`
                })
            })
            setQuizes(quizes)
        } catch (e) {
            console.log('Что то не так с сервером! Ошибка: ', e)
        }
    }, [])

    return (
        <div className={classes.QuizList}>
            <div>
                <h1>Список тестов</h1>

                <ul>
                    {renderQuizzes()}
                </ul>
            </div>
        </div>
    )
}

export default QuizList