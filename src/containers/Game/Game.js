import React from 'react'
import classes from './Game.module.scss'
import Board from '../../components/Board/Board'
import Hand from '../../components/Hand/Hand'
import { connect } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Game = props => {

    return (
        <div className={classes.Game}>
            <DndProvider backend={HTML5Backend}>
                <Board />
                <Hand />
            </DndProvider>
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