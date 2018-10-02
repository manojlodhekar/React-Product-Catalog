import * as type from '../actions/actionTypes';
import productConst from '../const/productConst';
import axios from 'axios';
import { push, } from 'react-router-redux'

export const getProductDetails = (itemId) => (dispatch) =>{
    

  let productLookupApiURL = productConst.PRODUCT_LOOKUP_API_URL +'/' + itemId + '?format=json&apiKey=' + productConst.PRODUCT_API_KEY; ;  
   

   const getProductItemSuccess = (response) => {
    return {
      type: type.GET_PRODUCT_ITEM,
      payload: response
    }
  }
  
  const getProductItemError = (err) => {
    return {
      type: type.PRODUCT_API_ERROR,
      payload: true
    }
  }


  return axios.get(productLookupApiURL)
    .then((response) => {
      dispatch(getProductItemSuccess(response.data))
      dispatch(push(`/product/${itemId}`))
    })
    .catch((err) => {
      dispatch(getProductItemError(err))
    })
    
};