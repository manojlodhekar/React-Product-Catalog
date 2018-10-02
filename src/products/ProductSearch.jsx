import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Input, Button, Divider, Icon } from 'semantic-ui-react';
import { searchProduct } from '../actions/searchProduct';
import { getReccomendationProductList } from '../actions/getReccomendationProductList';
import productConst from '../const/productConst';
import ProductList from './ProductList';
import ProductHeader from './ProductHeader';
import  './ProductStyle.css'


class ProductSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchStr : ''
        }
    };

    componentWillMount(){
    }

    searchedStr = event =>{
        this.setState({
            searchStr: event.currentTarget.value
        })
    }
    handleKeyPress = event =>{
        if (event.key === 'Enter') {
            this.props.actions.searchProduct(this.state.searchStr);
          }
    }
    searchProductsByStr = event =>{
        this.props.actions.searchProduct(this.state.searchStr)
    }
    productSelection = (item) =>{
        if(item){
            this.props.actions.getReccomendationProductList(item.itemId);
        }
    }
    render(){
        return(
           <div className="container">
            <ProductHeader subHeaderText={productConst.PRODUCT_MAIN_PAGE_SUBHEADER}/>
                
                <div className="searchedContent">

                 <Input icon placeholder={productConst.PLACEHOLDER_TEXT}
                 id='searchTxt'
                 value={this.state.searchStr}
                 onChange={e => this.searchedStr(e)}
                 onKeyPress={e => this.handleKeyPress(e)}
                 className="searchInput">
                    <input />
                    <Icon name='search' />
                    </Input>

                    <Button id="SearchBtn" onClick={e => this.searchProductsByStr(e)}>Search</Button>
                    </div>
                    <Divider />
               <ProductList items={this.props.productList} 
               linkUrl="/reccomendation/"
               productSelection={(item) => this.productSelection(item)}/>
            </div>
        );
    };
}

ProductSearch.propTypes = {
    productList: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return{
        productList: state.products.productList
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators( { searchProduct, getReccomendationProductList }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);
