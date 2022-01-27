import React from 'react';
import classes from './Drawer.module.css'
import BackDrop from "../../UI/BackDrop/BackDrop";

const links = [
    1, 2, 3
]

const Drawer = props => {
    const renderLinks = () => {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a>{link}</a>

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

export default Drawer;