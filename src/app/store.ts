import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice";
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import authReducer from '../features/auth/authSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
    // if devTools is false then devTools will not be connected
    // devTools: false,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

// saga flow
// create sagaMiddleware -> add to store middleware -> run it