import { all } from 'redux-saga/effects';
import { authSaga } from '../features/auth/authSaga';
import counterSaga from '../features/counter/counterSaga';

// function* helloSaga() {
//     console.log('hello saga')
// }

export default function* rootSaga() {
    console.log('root saga')
    yield all([
        counterSaga(),
        authSaga(),
    ])
}