
import { takeEvery, put, call } from "redux-saga/effects";
import actions from "../actions";
import { NavigationActions } from "../NavigationActionClass";
import "isomorphic-fetch";

function* signInWatch() {
    yield takeEvery(actions.ActionTypes.SIGN_IN_START, doSignIn)
}

export function* doSignIn(action) {

    const authInfo = action.payload;

    try {
        const response = yield call(fetch, 'http://localhost:3002/api/auth/signin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authInfo)
        })

        console.log(response);

        if (response && response.status === 200) {
            const json = yield call([response, response.json]);
            yield put({ type: actions.ActionTypes.SIGN_IN_SUCCESS, payload: json });
            yield call(NavigationActions.navigate, 'Home')
        } else {
            yield put({ type: actions.ActionTypes.SIGN_IN_FAILED, payload: result });
        }

    } catch (error) {
        yield put({ type: actions.ActionTypes.SIGN_IN_FAILED, payload: error });
    }




}

export default signInWatch;