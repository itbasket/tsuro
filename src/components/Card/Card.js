import React from 'react'
import classes from './Card.module.scss'
import { useDrag } from 'react-dnd'

const Card = props => {
    const cls = [classes.Card, classes[`card${props.cardId}`]]

    const [{isDragging}, drag] = useDrag({
        item: { type: 'card', id: props.cardId },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
    })
    

    return (
        <div className={cls.join(' ')} ref={drag} style={{opacity: isDragging ? 0.5 : 1}}>
            
        </div>
    )
}

export default Card