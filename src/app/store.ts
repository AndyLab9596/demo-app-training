import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice";
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import authReducer from '../features/auth/authSlice';
import { combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from '../utils';
import dashboardReducer from '../features/dashboard/dashboardSlice';


const rootReducer = combineReducers({
    router: connectRouter(history),
    counter: counterReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
})

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    // if devTools is false then devTools will not be connected
    // devTools: false,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
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