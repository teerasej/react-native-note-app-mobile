import actions from "../actions";

const initialState = {
    token: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actions.ActionTypes.SIGN_IN_SUCCESS:
        return { ...state, token: payload.token }

    default:
        return state
    }
}
