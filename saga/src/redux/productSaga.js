import {takeEvery,put} from "redux-saga/effects"
import { PRODUCT_LIST, SET_PRODUCT_LIST,SEARCH_PRODUCT } from "./constant";

function* getProducts(){
    let data = yield fetch("http://localhost:3500/product")
    data = yield data.json()
    console.log("fetched data...",data);
    yield put({type:SET_PRODUCT_LIST,data:data})
}

function* searchProducts(data){
    //data contains type and query
    let result = yield fetch(`http://localhost:3500/product?q=${data.query}`)
    result = yield result.json()
    yield put({type:SET_PRODUCT_LIST,data:result})
}


function* productSaga(){
    yield takeEvery(PRODUCT_LIST,getProducts)
    yield takeEvery(SEARCH_PRODUCT,searchProducts)
}


export default productSaga;