import productReducer from "./productReducer";
import initialState from "../store/initialState";
import * as type from '../actions/actionTypes';

describe('Product Reducer', () =>{
    it('should return the initial state', () => {
        expect(productReducer(undefined, {})).toEqual(initialState);
      });

    //   it('should handle empty SEARCH_PRODUCT', () => {
    //     const searcProducthAction = {
    //       type: type.SEARCH_PRODUCT
    //     };
    //     expect(productReducer({}, searcProducthAction)).toEqual();
    //   });

      it('should handle SEARCH_PRODUCT', () => {
        const searchPayload = {"items":[{"itemId":15608958,"parentItemId":15608958,"name":"Red (Special Edition) (DVD)","msrp":9.98,"salePrice":7.99,"upc":"025192091490"}]}

        const searcProducthAction = {
          type: type.SEARCH_PRODUCT,
          payload: searchPayload
          }
        expect(productReducer({}, searcProducthAction)).toEqual({"productList":searchPayload.items});
      });

    

    it('should handle empty GET_PRODUCT_ITEM', () => {
        const searcProducthAction = {
          type: type.GET_PRODUCT_ITEM
        };
        expect(productReducer({}, searcProducthAction)).toEqual({});
      });

    it('should handle GET_PRODUCT_ITEM', () => {
        const itemPayload = {"itemId":15608958,"parentItemId":15608958,"name":"Red (Special Edition) (DVD)","msrp":9.98,"salePrice":7.99,"upc":"025192091490"}

        const searcProductAction = {
          type: type.GET_PRODUCT_ITEM,
          payload: itemPayload
          }
        expect(productReducer({}, searcProductAction)).toEqual({"selectedProductDetail" : itemPayload});
      });

      

      it('should handle empty SET_RECCOMENDATION_PRODUCTS', () => {
        const searcProducthAction = {
          type: type.SET_RECCOMENDATION_PRODUCTS
        };
        expect(productReducer({}, searcProducthAction)).toEqual({});
      });

    it('should handle SET_RECCOMENDATION_PRODUCTS', () => {
        const recsPayload = {"items":[{"itemId":15608958,"parentItemId":15608958,"name":"Red (Special Edition) (DVD)","msrp":9.98,"salePrice":7.99,"upc":"025192091490"}]}

        const recsProductAction = {
          type: type.SET_RECCOMENDATION_PRODUCTS,
          payload: recsPayload
          }
        expect(productReducer({}, recsProductAction)).toEqual({"productReccomendationList" : recsPayload});
      });

})