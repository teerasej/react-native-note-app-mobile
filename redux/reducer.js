import { actionTypes } from "./actions"

// ใช้ snippet: rxreducer
const initialState = {
    notes: [
        { title: 'a' },
        { title: 'b' },
        { title: 'c' }
    ]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.SAVE_NEW_NOTE:
        const newState = { ...state }
        newState.notes = [ ...state.notes, { title: payload }]
        return newState
        //return { ...state, notes: [...state.notes, { title: payload }] }

    default:
        return state
    }
}