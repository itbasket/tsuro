import React from 'react'
import classes from './Tile.module.scss'
import { connect } from 'react-redux'
import PlayerSpot from '../PlayerSpot/PlayerSpot'

const Tile = props => {

    return (
        <td className={classes.Tile}>
            {props.playersPositions.map(player => {
                return player.coordinates.tile === props.id ? <PlayerSpot color={player.color} spot={player.coordinates.spot} key={player.id} /> : null
            })}
        </td>
    )
}

function mapStateToProps(state) {
    return {
        playersPositions: state.game.playersPositions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile)