import * as type from '../actions/actionTypes';
import initialState from '../store/initialState'

export default function productReducer(currentState = initialState, action){
    let updatedState = Object.assign({}, currentState)
    switch(action.type){
        case type.SEARCH_PRODUCT :
           updatedState.productList = action.payload.items
        break;
        case type.GET_PRODUCT_ITEM :
           updatedState.selectedProductDetail = action.payload
        break;
        case type.SET_RECCOMENDATION_PRODUCTS :
            updatedState.productReccomendationList = action.payload
        break;
        case type.PRODUCT_API_ERROR :
            updatedState.productApiError = action.payload
        break;
        default:
        return currentState;
    }
    return updatedState
   
}