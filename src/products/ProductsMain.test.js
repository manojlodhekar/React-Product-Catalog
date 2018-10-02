import React from 'react';
import ReactDOM from 'react-dom';
import ProductsMain from './ProductsMain';
import configureStore from 'redux-mock-store';
import ProductSearch from './ProductSearch';
import Snackbar from '@material-ui/core/Snackbar';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import initialState from '../store/initialState'

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore(initialState);
const productsMain = mount(
    <ProductsMain store={store}>
      <ProductSearch />
      <Snackbar />
    </ProductsMain>
);

describe('ProductsMain is defined', () => {

  it('should be defined', () => {
    expect(productsMain).toBeDefined();
  });
  it('should render correctly', () => {
    expect(productsMain).toHaveLength(1);
  });


  it('should render Product Search', () => {
    //expect(productsMain.contains('ProductSearch')).toBe(true);
  });

  it('should render inner component', () => {
    expect(productsMain).toMatchSnapshot();
  });

 });
