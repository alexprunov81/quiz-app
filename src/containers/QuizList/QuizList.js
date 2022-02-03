import React from 'react'
import classes from './QuizList.module.css'
import {NavLink} from "react-router-dom";

const QuizList = () => {

    const renderQuizzes = () => {
        return [1,2,3].map((quiz,index) => {
            return (
                <li
                key={index}
                >
                    <NavLink to={'/quiz/' + quiz}>
                        Test {quiz}
                    </NavLink>
                </li>
            )
        })
    }

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