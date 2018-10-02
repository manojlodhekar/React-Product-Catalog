import React, { Component } from 'react';
import ProductSearch  from "./ProductSearch";
import Snackbar from '@material-ui/core/Snackbar';
import productConst from '../const/productConst';
import { connect } from 'react-redux';
import {setApiError} from '../actions/searchProduct';
import { bindActionCreators } from 'redux';

class ProductsMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            open : false
        }
    };
    handleRequestClose = () => {
        this.props.actions.setApiError(false)
      };
    render(){
        const {productApiError} = this.props;
        return(
           <div>
               <ProductSearch />
               <Snackbar
                    className="snakeBarCls"
                    open={productApiError}
                    message={productConst.ERROR_MESSAGE}
                    action="undo"
                    autoHideDuration={3000}
                    onClose={this.handleRequestClose}
                />
            </div>
        );
    };
}

function mapStateToProps(state){
    return{
        productApiError: state.products.productApiError
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators( { setApiError }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsMain);