import * as type from '../actions/actionTypes';
import productConst from '../const/productConst';
import axios from 'axios';

export function searchProduct(searchProductStr){
    
  let productApiURL = productConst.PRODUCT_SEARCH_API_URL + '?query='  + searchProductStr + '&format=json&apiKey=' + productConst.PRODUCT_API_KEY; ;  
  let productLookApi = ''; 

  const getProductSuccess = (response) => {
    debugger;
    console.log(response)
     return {
      type: type.SEARCH_PRODUCT,
      payload: response
    }
  }
  const getProductLookup = (url) => {
    return function(dispatch) {
      axios.get(url)
        .then((response) => {
          debugger;
          dispatch(getProductSuccess(response.data))
        })
        .catch((err) => {
          dispatch(getProductError(err))
        })
    }
  }
  

  const getProductError = (err) => {
    err = "";
    return {
      type: type.PRODUCT_API_ERROR,
      payload: true
    }
  }
  
   return function(dispatch) {
    axios.get(productApiURL)
      .then((response) => {
        return response.data;
      }).then((response) =>{
        let ids = response.items.map( (item) => item.itemId);
        let idStr = ids.splice(0,10).join(',');
        productLookApi = productConst.PRODUCT_LOOKUP_API_URL + '?ids=' + idStr + '&apiKey=' + productConst.PRODUCT_API_KEY;
        dispatch(getProductLookup(productLookApi))
      })
      .catch((err) => {
        dispatch(getProductError(err))
      })
  }
    
};
export function setApiError(isError){
  return {
    type: type.PRODUCT_API_ERROR,
    payload: false
  }
}