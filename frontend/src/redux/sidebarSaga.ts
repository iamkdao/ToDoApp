import { put, takeEvery } from 'redux-saga/effects';
import { openSidebar, closeSidebar, toggleSidebar } from './sidebarSlice';

function* handleOpenSidebar() {
    yield put(openSidebar)
}

function* handleCloseSidebar() {
    yield put(closeSidebar)
}

function* handleToggleSidebar() {
    yield put(toggleSidebar)
}

export default function* sidebarSaga() {
    yield takeEvery(openSidebar.type, handleOpenSidebar)
    yield takeEvery(closeSidebar.type, handleCloseSidebar)
    yield takeEvery(toggleSidebar.type, handleToggleSidebar)
}