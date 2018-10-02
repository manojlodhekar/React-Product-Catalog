import React from 'react';
import ReactDOM from 'react-dom';
import ProductsMain from './ProductsMain';
import configureStore from 'redux-mock-store';
import ProductReccomendation from './ProductReccomendation';
import ProductHeader from './ProductHeader';
import ProductList from './ProductList';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import initialState from '../store/initialState'

jest.mock('react-dom');
const mockProductReccomendationListfn = jest.fn();
const mockGetProductDetailsFn = jest.fn();

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore(initialState);
const productReccomendation = mount(
    <ProductReccomendation store={store} 
    productReccomendationList={mockProductReccomendationListfn}
    getProductDetails={mockGetProductDetailsFn}>
       <ProductHeader />
        <ProductList />
    </ProductReccomendation>
);

describe('ProductReccomendation is defined', () => {
  it('should be defined', () => {
    expect(productReccomendation).toBeDefined();
  });
  it('should render correctly', () => {
    expect(productReccomendation).toHaveLength(1);
  });

  it('should render the ProductList container component', () => {
        
    const product = productReccomendation.find(ProductList);
    expect(productReccomendation.find(product)).toBeDefined();
  });

  it('should render the productHeader component', () => {
    
    const productHeader = productReccomendation.find(ProductHeader);
    expect(productReccomendation.find(productHeader)).toBeDefined();
  });

  it('should render inner component', () => {
    expect(productReccomendation).toMatchSnapshot();
  });

 });
