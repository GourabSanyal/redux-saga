import { takeEvery, put } from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constants";

function* getProducts() {
    let data = yield fetch("http://localhost:3500/product");
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, data})
}

export default function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);

}