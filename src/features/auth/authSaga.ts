import { delay } from "@redux-saga/core/effects"

export function* authSaga() {
    yield delay(100)
    console.log('authSaga')
}

