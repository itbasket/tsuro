import React, { useState } from 'react'
import classes from './Card.module.scss'
import { useDrag } from 'react-dnd'

const Card = props => {
    const [rotateDeg, setRotateDeg] = useState(props.position.rotateDeg)

    const cls = [classes.Card, classes[`card${props.id}`]]

    if (props.isDraggable) {
        cls.push(classes.draggable)
    }

    const rotate = () => {
        setRotateDeg(prevState => {
            return prevState + 90
        })
    }

    const [{isDragging}, drag] = useDrag({
        item: { type: 'card', id: props.id, position: {...props.position, rotateDeg} },
        canDrag: () => props.isDraggable,
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
    })
    

    return (
        <div className={cls.join(' ')} ref={drag} style={{opacity: isDragging ? 0.5 : 1, transform: `rotate(${rotateDeg}deg)`}} onClick={() => rotate()}>
            
        </div>
    )
}

export default Card