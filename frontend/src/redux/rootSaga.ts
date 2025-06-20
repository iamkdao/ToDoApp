import { all } from 'redux-saga/effects';
import sidebarSaga from './sidebarSaga';

export default function* rootSaga() {
    yield all([
        sidebarSaga()
    ]);
}