import { CARD_DRAW_SUCCESS, OCCUPIE_TILE_SUCCESS } from '../actions/actionTypes'

export function cardDrawSuccess(handState, deckState) {
    return {
        type: CARD_DRAW_SUCCESS,
        payload: {handState, deckState}
    }
}

export function occupieTileSuccess(handState, occupiedTilesState) {
    return {
        type: OCCUPIE_TILE_SUCCESS,
        payload: {handState, occupiedTilesState}
    }
}

export function cardDraw(handSlot) {
    return (dispatch, getState) => {
        const state = getState().game

        const handState = {...state.hand}
        const deckState = [...state.deck]

        handState[handSlot] = deckState.shift()
        
        dispatch(cardDrawSuccess(handState, deckState))
    }
}

export function occupieTile(tile, card, position) {
    return (dispatch, getState) => {
        const state = getState().game

        const handState = {...state.hand}
        let occupiedTilesState = []

        handState[`card${position.id}`] = null

        occupiedTilesState = occupiedTilesState.concat({tile, card, rotateDeg: position.rotateDeg, isPermanent: false})
        
        dispatch(occupieTileSuccess(handState, occupiedTilesState))
    }
    
}