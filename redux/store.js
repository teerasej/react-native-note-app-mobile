import { createStore } from 'redux'
import reducer from "./reducer"

export default configureStore = () => {
    const store = createStore(reducer)
    return store
}   