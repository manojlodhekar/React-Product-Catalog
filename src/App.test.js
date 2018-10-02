import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

jest.mock('react-dom');

Enzyme.configure({ adapter: new Adapter() });

describe('App is defined', () => {
  it('should be defined', () => {
    expect(App).toBeDefined();
  });
  it('should render correctly', () => {
    const app = shallow(<App  />);
    expect(app).toHaveLength(1);
  });
  it('should render inner component', () => {
    const app = shallow(<App  />);
    expect(app).toMatchSnapshot();
  });

 });
