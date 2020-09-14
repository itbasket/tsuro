import { CARD_DRAW } from '../actions/actionTypes'

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

const initialState = {
    deck: shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]),
    hand: []
}

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case CARD_DRAW:
            return {
                ...state, hand: state.deck.splice(0, action.amount)
            }
        default:
            return state
    }
}