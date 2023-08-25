import {takeEvery, put, call, } from 'redux-saga/effects';
import {getBooks} from "../apis/main";
import {GET_BOOKS, LOAD_MORE} from "../types";
import {getBooksSlice, getLoadMoreSlice, getLoadingSlice, getErrorSlice} from "../slices/books";
import {IAPIResponse, ISagaBooksParams} from "../../typings";


export function* sendQuerySaga({data}:ISagaBooksParams) {
    try {
        yield put(getLoadingSlice(true));
        const result: IAPIResponse = yield call(getBooks, data);
        yield put(getBooksSlice(result));
        yield put(getLoadingSlice(false));
        yield put(getErrorSlice({}));
    } catch (e: any) {
        yield put(getErrorSlice(e.response.data.error));
        yield put(getLoadingSlice(false));
    }
}

export function* sendLoadMoreSaga({data}:ISagaBooksParams) {
    try {
        const result: IAPIResponse = yield call(getBooks, data);
        yield put(getLoadMoreSlice(result));
        yield put(getErrorSlice({}));
    } catch (e: any) {
        yield put(getErrorSlice(e.response.data.error));
        yield put(getLoadingSlice(false));
    }
}

export function* watchQuery() {
    yield takeEvery<ISagaBooksParams>(GET_BOOKS, sendQuerySaga);
    yield takeEvery<ISagaBooksParams>(LOAD_MORE, sendLoadMoreSaga);
}