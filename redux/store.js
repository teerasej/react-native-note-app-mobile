import { createStore, combineReducers } from 'redux';

import noteReducer from "./note.reducer";
import { reducer as formReducer } from "redux-form";

export default configureStore = () => {
    const store = createStore(
        combineReducers({
            note: noteReducer,
            form: formReducer
        })
    );

    return store;
}  