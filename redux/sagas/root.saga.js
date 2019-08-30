import { all } from 'redux-saga/effects'
import signIn from "./signin.saga";

export default function* rootSaga() {
    yield all([
        signIn()
    ])
}