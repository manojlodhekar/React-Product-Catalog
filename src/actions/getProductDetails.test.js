import * as type from '../actions/actionTypes';
import * as actions from '../actions/getProductDetails';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getProductDetails actions', () => {

  const getItemDetailsMock = {"itemId":15608958,"parentItemId":15608958,"name":"Red (Special Edition) (DVD)","msrp":9.98,"salePrice":7.99,"upc":"025192091490"}

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates GET_PRODUCT_ITEM after successfuly fetching items', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getItemDetailsMock,
      });
    });

    const expectedActions = [
      { type: type.GET_PRODUCT_ITEM, payload: getItemDetailsMock },
    ];

    const store = mockStore({ response: {} })

    return store.dispatch(actions.getProductDetails('12345')).then(() => {
      // return of async actions
      expect([store.getActions()[0]]).toEqual(expectedActions);
    });
  });
});