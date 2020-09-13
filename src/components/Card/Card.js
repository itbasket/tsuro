import React from 'react'
import classes from './Card.module.scss'

const Card = props => {
    const cls = [classes.Card, classes[`card${props.cardId}`]]

    return (
        <div className={cls.join(' ')}>
            
        </div>
    )
}

export default Card