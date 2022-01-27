import React from 'react'
import classes from './AnsversList.module.css'

const AnsversList = props => {
    return (
<ul className={classes.AnsversList}>
    {props.answers.map((answer, index))}
</ul>
    );
};

export default AnsversList;