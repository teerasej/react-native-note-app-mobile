export const Types = {
    SAVE_NEW_NOTE: 'SAVE_NEW_NOTE'
}

// สร้าง function ที่ใช้ในการกำหนดข้อมูลของ Action 
export const createNewNote = (message) => {
    return {
        type: Types.SAVE_NEW_NOTE,
        payload: message
    };
}

// เสร็จแล้วอย่าลืม Export เพื่อเอาไปใช้ในไฟล์อื่นๆ
export default {
    Types,
    createNewNote
} 