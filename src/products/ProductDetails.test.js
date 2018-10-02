import React from 'react';
import configureStore from 'redux-mock-store';
import ProductDetails from './ProductDetails';
import ProductHeader from './ProductHeader';
import ProductList from './ProductList';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import initialState from '../store/initialState'

jest.mock('react-dom');
const mockSelectedProductDetailfn = jest.fn();
const mockGetProductDetailsFn = jest.fn();

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore(initialState);
const productDetails = mount(
    <ProductDetails store={store} 
    getProductDetails={mockGetProductDetailsFn}
    selectedProductDetail={mockSelectedProductDetailfn}>
       <ProductHeader />
    </ProductDetails>
);

describe('ProductDetails is defined', () => {

  it('should be defined', () => {
    expect(productDetails).toBeDefined();
  });
  it('should render correctly', () => {
    expect(productDetails).toHaveLength(1);
  });

  it('should render the productHeader component', () => {
    
    const productHeader = productDetails.find(ProductHeader);
    expect(productDetails.find(productHeader)).toBeDefined();
  });

  it('should render inner component', () => {
    expect(productDetails).toMatchSnapshot();
  });

 });
