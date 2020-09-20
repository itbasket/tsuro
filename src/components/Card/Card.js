import React, { useState } from 'react'
import classes from './Card.module.scss'
import { useDrag } from 'react-dnd'
import { cards } from '../../utils/cards'

const Card = props => {
    console.log(cards.find(card => card.id === props.id))
    const [rotateDeg, setRotateDeg] = useState(props.position.rotateDeg)
    // const [paths, setPaths] = useState(cards.find(card => card.id === props.id))

    // useEffect(() => {
    //     if (cards.find(card => card.id === props.id)) {
    //         setPaths(cards.find(card => card.id === props.id).paths)
    //     }
    // }, [props.id])

    const cls = [classes.Card, classes[`card${props.id}`]]

    const rotate = () => {
        setRotateDeg(prevState => {
            return prevState + 90
        })
        // setPaths(prevState => {
        //     const newState = {}
        //     Object.keys(prevState).forEach(path => {
        //         const newPath = prevState[path] + 2
        //         Object.assign(newState, {[path]: newPath > 8 ? newPath - 8 : newPath})
        //     })
        //     return newState
        // })
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