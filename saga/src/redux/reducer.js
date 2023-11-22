import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant"

export const cartData = (prevdata = [], action) => {
    //prev data before performing current action
    //action returns type and data returned from action.js OR returned obj from action

    switch (action.type) {
        case ADD_TO_CART:
            console.warn("reducer add called!!", action.data, prevdata)
            return [action.data, ...prevdata]

        case REMOVE_FROM_CART:
            console.warn("reducer remove called!!", action)
            // prevdata.length = prevdata.length>0 ? prevdata.length-1 : prevdata.length
            const remaining = prevdata.filter((item) => item.id !== action.data) //data is id that is passed from main.js
            return [...remaining]

        case EMPTY_CART:
            console.warn("reducer empty called!!", action, prevdata)
            // prevdata = []
            // return [...prevdata]
            return []

        default:
            return prevdata
    }
}