import { CARD_DRAW, OCCUPIE_TILE } from '../actions/actionTypes'

export function cardDraw(amount = 1) {
    return {
        type: CARD_DRAW,
        amount
    }
}

export function occupieTile(tile, card) {
    return {
        type: OCCUPIE_TILE,
        payload: {tile, card}
    }
}