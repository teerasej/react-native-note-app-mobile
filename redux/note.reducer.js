import actions from "../redux/actions";

const initialState = {
    notes: [
        { title: 'a' },
        { title: 'b' },
        { title: 'c' }
    ]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actions.Types.SAVE_NEW_NOTE:
        return { ...state, notes: [...state.notes, { title: payload }] }

    default:
        return state
    }
}
