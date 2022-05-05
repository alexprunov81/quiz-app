import React,  {Fragment, useState} from 'react'
import classes from './QuizCreator.module.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import {createControl} from '../../form/formFramework'

const createOptionControl = number => {
    return createControl({
        label: `Вариант ${number}`,
        errorMessage: 'Значение не может быть пустым',
        id: number
    }, {required: true})
}

const createFormControls = () => {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}

const QuizCreator = () => {

    const [state, setState] = useState({
        quiz: [],
        formControls: createFormControls()
    })

    const submitHandler = event => {
        event.preventDefault()
    }

    const addQuestionHandler = () => {

    }

    const createQuestionHandler = () => {

    }

    const changeHandler = (value, control) => {

    }

    const renderInputs = () => {
        return Object.keys(state.formControls).map((controlName, index) => {
            const control = state.formControls[controlName]

            return (
                <Fragment key={controlName+index}>
                    <Input
                        key={index}
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={event => changeHandler(event.target.value, controlName)}
                    />
                    {index === 0 ? <hr/> : null}
                </Fragment>
            )
        })
    }

    return (
        <div className={classes.QuizCreator}>
            <div>
                <h1>Создание теста</h1>
                <form onSubmit={submitHandler}>
                    {renderInputs()}
                    <select></select>
                    <Button
                        type="primary"
                        onClick={addQuestionHandler}
                    >
                        Добавить ворос
                    </Button>
                    <Button
                        type="success"
                        onClick={createQuestionHandler}
                    >
                        Создать тест
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default QuizCreator