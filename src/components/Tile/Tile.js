import React from 'react'
import { connect } from 'react-redux'
import { useDrop } from 'react-dnd'
import classes from './Tile.module.scss'
import Card from '../Card/Card'
import PlayerSpot from '../PlayerSpot/PlayerSpot'
import Confirm from './Confirm/Confirm'
import { occupieTile, occupieConfirm, occupieCancel } from '../../store/actions/game'

const Tile = props => {

    const [{ isOver }, drop] = useDrop({
        accept: 'card',
        drop: (item) => props.occupieTile(props.id, item.id, item.position),
        canDrop: () => !props.occupied && props.isDroppable,
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
    })

    const onAccept = () => {
        props.occupieConfirm(props.id)
    }

    const onCancel = () => {
        props.occupieCancel(props.id, props.occupied.originalHandSlot, props.occupied.card)
    }

    return (
        <td className={classes.Tile} ref={drop}>
            {props.occupied ? <Card id={props.occupied.card} position={{type: 'tile', id: props.id, rotateDeg: props.occupied.rotateDeg, originalHandSlot: props.occupied.originalHandSlot}} isDraggable={false} isRotatable={props.occupied && !props.occupied.isPermanent ? true : false} /> : null}
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
            {props.occupied && !props.occupied.isPermanent ? <Confirm tileId={props.id} onAccept={onAccept} onCancel={onCancel} /> : null}
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
        occupieTile: (tile, card, position) => dispatch(occupieTile(tile, card, position)),
        occupieConfirm: (tileId) => dispatch(occupieConfirm(tileId)),
        occupieCancel: (tileId, originalHandSlot, cardId) => dispatch(occupieCancel(tileId, originalHandSlot, cardId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile)