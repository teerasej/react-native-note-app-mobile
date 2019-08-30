
const ActionTypes = {
    SAVE_NEW_NOTE: 'SAVE_NEW_NOTE'
}

const saveNewNote = (message) => (
    {
        type: ActionTypes.SAVE_NEW_NOTE,
        payload: message
    }
)

export default {
    ActionTypes,
    saveNewNote
}