import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import productConst from '../const/productConst';

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });
let productList;
describe('ProductList is defined', () => {

beforeEach(()=>{
     productList = shallow(<ProductList linkUrl="/redccomendation/"    items={items}/>);

})

const items = [{itemId: '123', name: 'test', mediumImage:"fd/df.jpg", longDescription:'test1', salePrice: '123', customerRating: 4, numReviews: 5 }];
  it('should be defined', () => {
    expect(ProductList).toBeDefined();
  });
  it('should render correctly', () => {
    
    expect(productList).toHaveLength(1);
  });
  it('should render inner component', () => {
    expect(productList).toMatchSnapshot();
  });
  it('should contains default message', () => {
    expect(productList.contains(productConst.SEARCHED_PRODUCT_MESSAGE)).toBe(false);
  });
  it('should contains listof items', () => {
    const productList = shallow(<ProductList linkUrl="/redccomendation/"  items={[]}
    />);
    expect(productList.contains(productConst.SEARCHED_PRODUCT_MESSAGE)).toBe(true);
  });

 });
