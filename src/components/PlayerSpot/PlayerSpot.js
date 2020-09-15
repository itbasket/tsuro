import React from 'react'
import classes from './PlayerSpot.module.scss'

const PlayerSpot = props => {
    const cls = [classes.PlayerSpot, classes[`player__${props.color}`]]

    return (
        <div className={cls.join(' ')}></div>
    )
}

export default PlayerSpot