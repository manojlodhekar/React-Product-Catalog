import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getProductDetails } from '../actions/getProductDetails';
import { getReccomendationProductList } from '../actions/getReccomendationProductList';
import productConst from '../const/productConst';
import ProductList from './ProductList';
import ProductHeader from './ProductHeader';


class ProductReccomendation extends Component {

    componentWillMount(){
        if(this.props.match.params.id){
            this.props.actions.getReccomendationProductList(this.props.match.params.id);
        }
    }

    productSelection = (item) =>{
        if(item){
            this.props.actions.getProductDetails(item.itemId);
        }
    }
    render(){
        return(
           <div  className='container'>
            <ProductHeader subHeaderText={productConst.PRODUCT_RECCOMENDATION_PAGE_SUBHEADER}/>
                
                <div className="recsContent">
               <ProductList items={this.props.productReccomendationList} 
               linkUrl="/product/"
               productSelection={(item) => this.productSelection(item)}/>
                </div>
            </div>
        );
    };
}

ProductReccomendation.propTypes = {
    productReccomendationList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return{
        productReccomendationList: state.products.productReccomendationList
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators( { getProductDetails, getReccomendationProductList }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductReccomendation);
