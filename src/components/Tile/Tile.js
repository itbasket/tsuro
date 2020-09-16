import React from 'react'
import classes from './Tile.module.scss'
import { connect } from 'react-redux'
import PlayerSpot from '../PlayerSpot/PlayerSpot'
import { useDrop } from 'react-dnd'

const Tile = props => {

    const [{ isOver }, drop] = useDrop({
        accept: 'card',
        drop: () => console.log('dropped ' + props.id),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })

    return (
        <td className={classes.Tile} ref={drop}>
            {props.playersPositions.map(player => {
                return player.coordinates.tile === props.id ? <PlayerSpot color={player.color} spot={player.coordinates.spot} key={player.id} /> : null
            })}
            {isOver && (
                <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: 'yellow',
                }}
                />
            )}
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