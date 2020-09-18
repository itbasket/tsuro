import React from 'react'
import { connect } from 'react-redux'
import { useDrop } from 'react-dnd'
import classes from './Tile.module.scss'
import Card from '../Card/Card'
import PlayerSpot from '../PlayerSpot/PlayerSpot'
import { occupieTile } from '../../store/actions/game'

const Tile = props => {

    const [{ isOver }, drop] = useDrop({
        accept: 'card',
        drop: (item) => props.occupieTile(props.id, item.id),
        canDrop: () => !props.occupied && props.isDroppable,
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })

    return (
        <td className={classes.Tile} ref={drop}>
            {props.occupied ? <Card cardId={props.occupied.card} /> : null}
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
                        backgroundColor: props.isDroppable ? 'green' : 'yellow',
                    }}
                />
            )}
        </td>
    )
}

function mapStateToProps(state) {
    return {
        playerId: state.game.playerId,
        playersPositions: state.game.playersPositions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        occupieTile: (tile, card) => dispatch(occupieTile(tile, card))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile)