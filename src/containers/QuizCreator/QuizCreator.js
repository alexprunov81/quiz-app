import React, {Fragment, useState} from 'react'
import classes from './QuizCreator.module.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import {createControl, validate, validateForm} from '../../form/formFramework'
import Select from "../../components/UI/Select/Select";

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
        isFormValid: false,
        formControls: createFormControls()
    })

    const [rightAnswerId, setRightAnswerId] = useState(1)

    const submitHandler = event => {
        event.preventDefault()
    }

    const addQuestionHandler = event => {
        event.preventDefault()

        const quiz = state.quiz.concat()
        const index = quiz.length + 1

        const {question, option1, option2, option3, option4} = state.formControls

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId,
            answers: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id}
            ]
        }
        quiz.push(questionItem)
        setState({
            quiz,
            isFormValid: false,
            formControls: createFormControls()
        })
        setRightAnswerId(1)
    }

    const createQuizHandler = event => {
        event.preventDefault()

        console.log(state.quiz)
    }

    const changeHandler = (value, controlName) => {
        const FormControls = {...state.formControls}
        const control = {...FormControls[controlName]}

        control.touched = true
        control.value = value
        control.valid = validate(control.value, control.validation)

        FormControls[controlName] = control

        console.log(state.quiz)

        setState({
            quiz: state.quiz,
            formControls: FormControls,
            isFormValid: validateForm(FormControls)
        })
    }

    const renderInputs = () => {
        return Object.keys(state.formControls).map((controlName, index) => {
            const control = state.formControls[controlName]

            return (
                <Fragment key={controlName + index}>
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

    const selectChangeHandler = event => {
        setRightAnswerId(+event.target.value)
    }

    return (
        <div className={classes.QuizCreator}>
            <div>
                <h1>Создание теста</h1>
                <form onSubmit={submitHandler}>
                    {renderInputs()}
                    <Select
                        label="Выберите правильный ответ"
                        value={rightAnswerId}
                        onChange={selectChangeHandler}
                        options={[
                            {text: '1', value: 1},
                            {text: '2', value: 2},
                            {text: '3', value: 3},
                            {text: '4', value: 4}
                        ]}
                    />
                    <Button
                        type="primary"
                        onClick={addQuestionHandler}
                        disabled={!state.isFormValid}
                    >
                        Добавить ворос
                    </Button>
                    <Button
                        type="success"
                        onClick={createQuizHandler}
                        disabled={state.quiz.length === 0}
                    >
                        Создать тест
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default QuizCreator