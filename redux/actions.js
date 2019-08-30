
const ActionTypes = {
    SAVE_NEW_NOTE: 'SAVE_NEW_NOTE',
    SIGN_IN_START: "SIGN_IN_START",
    SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
    SIGN_IN_FAILED: "SIGN_IN_FAILED",
}

const saveNewNote = (message) => (
    {
        type: ActionTypes.SAVE_NEW_NOTE,
        payload: message
    }
)

const startSignIn = (username, password) => (
    {
        type: ActionTypes.SIGN_IN_START,
        payload: { username: username, password: password}
    }
)

export default {
    ActionTypes,
    saveNewNote,
    startSignIn
}