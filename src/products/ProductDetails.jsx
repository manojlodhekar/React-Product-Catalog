import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Item, Button, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { getProductDetails } from '../actions/getProductDetails';
import ProductHeader from './ProductHeader';
import productConst from '../const/productConst';
import { htmlDecode, getStarRating} from '../utils/ProductUtils';


class ProductDetails extends Component {
    
    componentWillMount(){
        if(this.props.match.params.id){
            this.props.actions.getProductDetails(this.props.match.params.id);
        }
    }

    render(){
        const {selectedProductDetail} = this.props;
        
        let longDesc = htmlDecode(selectedProductDetail.longDescription);
        let shortDesc = htmlDecode(selectedProductDetail.shortDescription);
        return(
            
            <div className="detailsContainer">
                <ProductHeader subHeaderText={productConst.PRODUCT_DETAILS_PAGE_SUBHEADER + ' "' + selectedProductDetail.name  + '" '} />
            {
                selectedProductDetail.name ?
                <div>
                    <Item.Group>
                        <Item>
                        <Item.Image size='medium' src={selectedProductDetail.largeImage}/>
                            <Item.Content className='productContent'>
                            <Item.Header className='productTitle'>{selectedProductDetail.name}</Item.Header>
                                <Item.Meta className='moreInfo'> {getStarRating(selectedProductDetail.customerRating)} {selectedProductDetail.numReviews} Reviews</Item.Meta>
                                <Item.Meta className='category'>{selectedProductDetail.categoryPath}</Item.Meta>
                                <Item.Meta className='productPrice'>$ {selectedProductDetail.salePrice}</Item.Meta>
                                <Button primary>
                                    <Button.Content visible>
                                        <Icon name='cart'/>Buy
                                    </Button.Content>
                                </Button>


                                <Item.Meta className='productTitle'>About This Item </Item.Meta>
                                <Item.Description>
                                    <div dangerouslySetInnerHTML={{__html: shortDesc}}/>
                                    <div dangerouslySetInnerHTML={{__html: longDesc}}/>
                                </Item.Description>
                                <Item.Meta className='productPrice'>{ selectedProductDetail.stock ? productConst.PRODUCT_IN_STOCK : productConst.PRODUCT_OUT_STOCK} </Item.Meta>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                    </div>
                    :
                    <div> Loading....</div>
            }

            
        </div>
        );
    };
}

ProductDetails.propTypes = {
    selectedProductDetail: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
}
function mapStateToProps(state){
    return{
        selectedProductDetail: state.products.selectedProductDetail
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators( { getProductDetails }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
