import React from 'react'
import classes from './Board.module.scss'
import Tile from '../../components/Tile/Tile'

const Board = props => {

    return (
        <div className={classes.Board}>
            <Tile />
        </div>
    )
}

export default Board