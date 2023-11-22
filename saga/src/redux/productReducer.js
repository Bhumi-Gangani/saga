import { SET_PRODUCT_LIST } from "./constant"

export const productData = (prevdata = [], action) => {

    switch(action.type){
        // case PRODUCT_LIST:
        //     console.warn("product reducer called!!", action.data)
        //     return [action.data]
        case SET_PRODUCT_LIST:
            console.warn(" set product reducer called!!", action)
            return [...action.data]
            
        default:
            return prevdata
    }
}