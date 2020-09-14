import { CARD_DRAW } from '../actions/actionTypes'

export function cardDraw(amount = 1) {
    return {
        type: CARD_DRAW,
        amount
    }
}