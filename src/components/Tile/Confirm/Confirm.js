import React from 'react'
import classes from './Confirm.module.scss'

const Confirm = props => {

    return (
        <div className={classes.Confirm}>
            <div className={classes.accept} onClick={() => props.onAccept()}></div>
            <div className={classes.cancel} onClick={() => props.onCancel()}></div>
        </div>
    )
}

export default Confirm