import React from 'react'
import classes from './Game.module.scss'
import Board from '../../components/Board/Board'
import Hand from '../../components/Hand/Hand'

const Game = props => {

    return (
        <div className={classes.Game}>
            <Board />
            <Hand />
        </div>
    )
}

export default Game