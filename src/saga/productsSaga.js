import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts } from "../service/ProductService";
import { updateProducts } from "../reducer/productReducer";

function* getProductsWorker() {
  try {
    const responseData = yield call(getProducts);
    yield put(updateProducts(responseData));
  } catch (error) {}
}

function* watcher() {
  yield takeLatest("GET_PRODUCTS", getProductsWorker);
}

export default watcher;
