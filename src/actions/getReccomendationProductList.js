import * as type from '../actions/actionTypes';
import productConst from '../const/productConst';
import axios from 'axios';
import { push, } from 'react-router-redux'

export function getReccomendationProductList(itemId){
    

  let productLookupApiURL = '';  
  let productReccomendationApiUrl = productConst.PRODUCT_RECCOMENDATION_API_URL + productConst.PRODUCT_API_KEY + '&itemId=' + itemId; 

  //http://api.walmartlabs.com/v1/nbp?apiKey=afffhq7phcwhc28kb45skp9d&itemId=118505871

   const getProductReccomendationItemsSuccess = (response) => {
    return {
      type: type.SET_RECCOMENDATION_PRODUCTS,
      payload: response.items
    }
  }
  
  const getProductError = (err) => {
    return {
      type: type.PRODUCT_API_ERROR,
      payload: true
    }
  }

  const getProductReccomendation = (url) => {
    return function(dispatch) {
      axios.get(url)
        .then((response) => {
          debugger;
          dispatch(getProductReccomendationItemsSuccess(response.data))
        })
        .catch((err) => {
          dispatch(getProductError(err))
        })
    }
  }

   return function(dispatch) {
    axios.get(productReccomendationApiUrl)
      .then((response) => {
        return response.data;
      }).then((response) =>{
        let ids = response.map( (item) => item.itemId);
        let idStr = ids.splice(0,10).join(',');
        productLookupApiURL = productConst.PRODUCT_LOOKUP_API_URL + '?ids=' + idStr + '&apiKey=' + productConst.PRODUCT_API_KEY;
        dispatch(getProductReccomendation(productLookupApiURL));
        dispatch(push(`/reccomendation/${itemId}`))
      })
      .catch((err) => {
        dispatch(getProductError(err))
      })
  }
    
};