import React from 'react';
import classes from './Drawer.module.css'
import BackDrop from "../../UI/BackDrop/BackDrop";
import {NavLink} from "react-router-dom";

const links = [
    {to: '/', label: 'Список'},
    {to: '/auth', label: 'Авторизация'},
    {to: '/quiz-creator', label: 'Создать тест'}
]

const Drawer = props => {

    const clickHandler = () => {

    }

    const renderLinks = () => {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        // activeClassName={classes.active}
                        onClick={()=>props.onClose()}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    const cls = [
        classes.Drawer,
        !props.isOpen && classes.close
    ]

    return (
        <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    {renderLinks()}
                </ul>
            </nav>
            {props.isOpen ? <BackDrop onClick={props.onClose}/> : null}
        </React.Fragment>

    )
}

export default Drawer