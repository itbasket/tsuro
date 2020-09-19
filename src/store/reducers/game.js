import { CARD_DRAW_SUCCESS, OCCUPIE_TILE_SUCCESS } from '../actions/actionTypes'

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

const initialState = {
    playerId: 1,
    deck: shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]),
    hand: {card1: null, card2: null, card3: null},
    playersPositions: [{id: 1, color: 'red', coordinates: {tile: 11, spot: 7}}, {id: 2, color: 'blue', coordinates: {tile: 11, spot: 8}}],
    occupiedTiles: []
}

export default function gameReducer(state = initialState, action) {
    switch (action.type) {
        case CARD_DRAW_SUCCESS:
            return {
                ...state, hand: action.payload.handState, deck: action.payload.deckState
            }
        case OCCUPIE_TILE_SUCCESS:
            return {
                ...state, hand: action.payload.handState, occupiedTiles: action.payload.occupiedTilesState
            }
        default:
            return state
    }
}