import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './semantic/dist/semantic.min.css'
import './App.css';
import configureStore from './store/configureStore';
import { Provider } from'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';

import ProductsMain from './products/ProductsMain';
import ProductsDetails from './products/ProductDetails';
import App from './App';
import ProductReccomendation from './products/ProductReccomendation';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router>
        <div className="container">
        <Route exact={true} path="/" component={App} />
        <Route path="/products" component={ProductsMain}/> 
        <Route path="/reccomendation/:id" component={ProductReccomendation}/> 
        <Route path="/product/:id" component={ProductsDetails}/>
      </div>    
    </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
