// กำหนด object ซึ่งเก็บชื่อ Action แบบต่างๆ เอาไว้
export const actionTypes = {
    SAVE_NEW_NOTE: 'SAVE_NEW_NOTE'
}

// สร้าง function ที่ใช้ในการกำหนดข้อมูลของ Action 
export const createNewNote = (message) => {
    return {
        type: actionTypes.SAVE_NEW_NOTE,
        payload: message
    };
}