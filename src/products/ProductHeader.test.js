import React from 'react';
import ReactDOM from 'react-dom';
import ProductHeader from './ProductHeader';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import productConst from '../const/productConst';

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });
let productHeader;
beforeEach(()=>{
  productHeader = shallow(<ProductHeader subHeaderText="This is subheader text" />);

})
describe('ProductHeader is defined', () => {

  it('should render correctly', () => {
    expect(productHeader).toHaveLength(1);
  });

  it('should render inner component', () => {
    expect(productHeader).toMatchSnapshot();
  });
  it('should contains passed message', () => {
    expect(productHeader.contains('This is subheader text')).toBe(true);
  });
  it('should contains default message', () => {
    expect(productHeader.contains(productConst.HEADER_TEXT)).toBe(true);
  });

 });
