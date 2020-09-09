import React from 'react'
import classes from './Game.module.scss'
import Board from '../../components/Board/Board'

const Game = props => {

    return (
        <div className={classes.Game}>
            <Board />
        </div>
    )
}

export default Game