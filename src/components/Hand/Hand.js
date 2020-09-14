import React, { useEffect } from 'react'
import classes from './Hand.module.scss'
import Card from '../Card/Card'
import { connect } from 'react-redux'
import { cardDraw } from '../../store/actions/game'

const Hand = props => {

    useEffect(() => {
        props.cardDraw(3)
    }, [])

    return (
        <div className={classes.Hand}>
            <div>
                <Card cardId={props.hand[0]} />
            </div>
            <div>
                <Card cardId={props.hand[1]} />
            </div>
            <div>
                <Card cardId={props.hand[2]} />
            </div>
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
        cardDraw: amount => dispatch(cardDraw(amount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hand)