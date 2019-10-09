
const Types = {
    SAVE_NEW_NOTE: 'SAVE_NEW_NOTE'
}

const createNewNote = (message) => {
    return {
        type: Types.SAVE_NEW_NOTE,
        payload: message
    };
}

export default {
    Types
}