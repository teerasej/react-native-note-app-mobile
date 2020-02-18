import { AsyncStorage } from 'react-native';


export const Types = {
    SAVE_NEW_NOTE: 'SAVE_NEW_NOTE'
}

// สร้าง function ที่ใช้ในการกำหนดข้อมูลของ Action 
export const createNewNote = async (message, dispatch) => {

    await updateStorage(message);

    dispatch({
        type: Types.SAVE_NEW_NOTE,
        payload: message
    });
}


const updateStorage = async (message) => {
    try {
        console.log('updating storage...');

        let messageArray;
        const messageArrayString = await AsyncStorage.getItem('@messageArray');

        if (messageArrayString !== null) {
            messageArray: Array = JSON.parse(messageArrayString);
        } else {
            messageArray = [];
        }

        messageArray.push(message);
        
        let updatedMessageArrayString = JSON.stringify(messageArray);
        await AsyncStorage.setItem('@messageArray', updatedMessageArrayString);

        console.log('updated complete');

    } catch (e) {
        console.error(e);
    }
}

// เสร็จแล้วอย่าลืม Export เพื่อเอาไปใช้ในไฟล์อื่นๆ
export default {
    Types,
    createNewNote
} 