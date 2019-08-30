import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';

import createRootReducer from "./reducers/root.reducer";

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/root.saga';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
    const store = createStore(
        createRootReducer(),
        compose(
            applyMiddleware(
                logger,
                sagaMiddleware
            ),
        ),
    );

    sagaMiddleware.run(rootSaga);

    return store;
}