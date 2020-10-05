import React, { useEffect } from 'react'
import classes from './Hand.module.scss'
import Card from '../Card/Card'
import { connect } from 'react-redux'
import { cardDraw } from '../../store/actions/game'

const Hand = props => {

    useEffect(() => {
        props.cardDraw('card1')
        props.cardDraw('card2')
        props.cardDraw('card3')
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classes.Hand}>
            {Object.keys(props.hand).map((cardId, index) => {
                    return (
                        <div key={index + 1}>
                            {props.hand[cardId] 
                                ? <Card id={props.hand[cardId]} deck={props.deck} position={{type: 'hand', id: index + 1, rotateDeg: 0}} isDraggable={true} isRotatable={true} />
                                : null
                            }
                        </div>
                    )
            })}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        deck: state.game.deck,
        hand: state.game.hand
    }
}

function mapDispatchToProps(dispatch) {
    return {
        cardDraw: handSlot => dispatch(cardDraw(handSlot))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hand)