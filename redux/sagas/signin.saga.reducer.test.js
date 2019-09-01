import { expectSaga } from 'redux-saga-test-plan';
import appReducer from "../reducers/app.reducer";
import noteReducer from "../reducers/note.reducer";

import { doSignIn }  from "./signin.saga";
import actions from '../actions';

describe('Sign In Saga Integration Test', () => {

    it('worker SignIn Saga success effect home token', () => {

        const authInfo = { username: 'a', password: 'pass' }

        const action = {
            type: actions.ActionTypes.SIGN_IN_START,
            payload: authInfo
        }

        return expectSaga(doSignIn, action)
        .withReducer(appReducer)
        .run() 
        .then((result) => {
            expect(result.storeState.token).toBeTruthy()
        });
    });


});