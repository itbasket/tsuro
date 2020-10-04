import { CARD_DRAW_SUCCESS, OCCUPIE_TILE_SUCCESS, OCCUPIE_CONFIRM_SUCCESS, OCCUPIE_CANCEL_SUCCESS } from '../actions/actionTypes'

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

export function occupieConfirmSuccess(occupiedTilesState) {
    return {
        type: OCCUPIE_CONFIRM_SUCCESS,
        payload: {occupiedTilesState}
    }
}

export function occupieCancelSuccess(occupiedTilesState, handState) {
    return {
        type: OCCUPIE_CANCEL_SUCCESS,
        payload: {occupiedTilesState, handState}
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
        let occupiedTilesState = [...state.occupiedTiles]

        handState[`card${position.id}`] = null

        occupiedTilesState = occupiedTilesState.concat({tile, card, rotateDeg: position.rotateDeg, originalHandSlot: `card${position.id}`, isPermanent: false})
        
        dispatch(occupieTileSuccess(handState, occupiedTilesState))
    }
}

export function occupieConfirm(tileId) {
    return (dispatch, getState) => {
        const state = getState().game

        const occupiedTilesState = [...state.occupiedTiles]
        const newOccupiedTilesState = occupiedTilesState.map((item) => {
            if (item.tile === tileId) {
                item.isPermanent = true
            }
            return {...item}
        })
        dispatch(occupieConfirmSuccess(newOccupiedTilesState))
    }
}

export function occupieCancel(tileId, originalHandSlot, cardId) {
    return (dispatch, getState) => {
        const state = getState().game

        const occupiedTilesState = [...state.occupiedTiles]
        const newOccupiedTilesState = occupiedTilesState.filter((item) => {
            return item.tile !== tileId
        })

        const handState = {...state.hand}
        handState[originalHandSlot] = cardId

        dispatch(occupieCancelSuccess(newOccupiedTilesState, handState))
    }
}