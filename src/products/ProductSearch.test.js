import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductHeader from './ProductHeader';
import { Input } from 'semantic-ui-react';
import * as actions from '../actions/getProductDetails';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import initialState from '../store/initialState'
import ProductSearch from './ProductSearch';
import { mapStateToProps, mapDispatchToProps } from './ProductSearch';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';



Enzyme.configure({ adapter: new Adapter() });
jest.mock('react-dom');
//const initialState = {}; 

const mockStore = configureStore();
let store;

describe('Product Search Component', () => {
    let productSearch;
    const mockSearchProductfn = jest.fn();
    const mockGetReccomendationProductListFn = jest.fn();
    
     beforeEach(() => {
        store = mockStore(initialState)
       productSearch = mount(
        <ProductSearch store={store} searchProduct={mockSearchProductfn} getReccomendationProductList={mockGetReccomendationProductListFn}>
          <ProductHeader />
          <ProductList />
          <Input />
        </ProductSearch>
      );
    })


     it('should render the container component', () => {
        
        const product = productSearch.find(ProductList);
        expect(productSearch.find(product)).toBeDefined();
      });

      it('should render the productHeader component', () => {
        
        const productHeader = productSearch.find(ProductHeader);
        expect(productSearch.find(productHeader)).toBeDefined();
      });

     it('Snapshot of Product Search', () => {
        expect(productSearch).toMatchSnapshot();
    });

    //  it('should call the mock search Product function', () => {
    //     productSearch.find('#SearchBtn').simulate(
    //       'onClick', 
    //       {preventDefault() {}}
    //     )
    //     //expect(mockLoginfn.mock.calls.length).toBe(1)
    //    });


      //  it('should be called with the email and password in the state as arguments', () => {
        
      //   let searchInput = productSearch.find(Input);
      //   console.log(searchInput);
      //   productSearch.find('#searchTxt').simulate(
      //     'change', 
      //     {target: 
      //       {value: 'watch'}
      //     }
      //   )
        
      //   // simulate form submission   
      //   productSearch.find('#SearchBtn').simulate(
      //     'onClick', 
      //     {preventDefault() {}}
      //   )
      //   //expect(mockSearchProductfn.mock.calls[1][0]).toEqual('watch')
      //  })

 });
