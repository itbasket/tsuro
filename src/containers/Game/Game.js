import React from 'react'
import classes from './Game.module.scss'
import Board from '../../components/Board/Board'
import Hand from '../../components/Hand/Hand'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

const Game = props => {

    return (
        <div className={classes.Game}>
            <DragDropContext>
                <Board />
                <Hand />
            </DragDropContext>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        deck: state.game.deck
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)