import { delay, fork, take, put, call } from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import { authActions, LoginPayload } from "./authSlice";


export function* handleLogin(payload: LoginPayload) {
    try {
        yield delay(100)
        localStorage.setItem('access_token', 'sth');
        yield put(authActions.loginSuccess({
            id: 1,
            name: 'andy'
        }))
        // redirect to admin page
        yield put(push('/admin'))
    } catch (error) {
        // put: dispatch action from saga
        yield put(authActions.loginFailed('error'))
    }

}

export function* handleLogout() {
    yield delay(100);
    localStorage.removeItem('access_token')
    yield put(push('/login'))

}

export function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if (!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type)
            yield fork(handleLogin, action.payload)
        }

        yield take(authActions.logout.type)
        yield call(handleLogout)
    }
}

export function* authSaga() {
    console.log('auth saga');
    yield fork(watchLoginFlow)
}


