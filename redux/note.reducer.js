import actions from "./actions"
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {

    notes: [
        { title: 'a' },
        { title: 'b' },
        { title: 'c' }
    ]
}

const updateStorage = async (message) => {
    try {
        const messageArrayString = await AsyncStorage.getItem('@messageArray')
        if (messageArrayString !== null) {
            let messageArray:Array = JSON.parse(messageArrayString);
            messageArray.push(message);
            let updatedMessageArrayString = JSON.stringify(messageArray);
            await AsyncStorage.setItem('@messageArray', updatedMessageArrayString);
            console.log('updated complete');
        }
        
    } catch (e) {
        console.error(e);
    }
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case actions.Types.SAVE_NEW_NOTE:
            updateStorage(payload);
            return { ...state, notes: [...state.notes, { title: payload }] }

        default:
            return state
    }
}


