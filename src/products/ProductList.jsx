import React from 'react';
import { Item,} from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import productConst from '../const/productConst';
import { htmlDecode, getStarRating} from '../utils/ProductUtils';

const ProductList = (props) =>{
debugger;
const productSelected = (item) =>{
    console.log(item.name);
    props.productSelection(item);
}
const renderProductList = () =>{

    let productDetail =  props.items.map((item) => {
        let longDesc = htmlDecode(item.longDescription);
        return(
            
            <div style={{padding: 15, borderBottom: '1px solid grey'}} key={item.itemId}>
                <Item.Group divided className="listContainer">
                    <Item>
                       <Link to={props.linkUrl + item.itemId } > <Item.Image size='small' src={item.mediumImage} 
                        onClick={ (e) => productSelected(item)}/> 
                        </Link>

                        <Item.Content className="listContent">
                        <Link to={props.linkUrl + item.itemId } >
                        <Item.Header className="productHeader"
                            onClick={ (e) => productSelected(item)}>{item.name}</Item.Header>
                            </Link>
                            <Item.Meta className="productHeader">Price : $ {item.salePrice}</Item.Meta>
                            <Item.Meta className="moreInfo"> {getStarRating(item.customerRating)} {item.numReviews}</Item.Meta>
                            <Item.Description>
                            <div dangerouslySetInnerHTML={{__html: longDesc}}/>
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>

                {/* <Grid >
                    
                    <Grid.Row>
                    <Grid.Column width={3}>
                        <Link to={"/product/" + item.itemId } > <Image size='small' src={item.thumbnailImage} wrapped 
                        onClick={ (e) => productSelected(item)}/> 
                        </Link>
                    </Grid.Column>
                    <Grid.Column width={10}>
                    <Link to={"/product/" + item.itemId } >
                        <div onClick={ (e) => productSelected(item)}>{item.name} </div>
                        <span>{item.shortDescription}</span>
                    </Link>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <div>{item.salePrice}</div>
                        <div> {item.offerType}</div>
                    </Grid.Column>
                    </Grid.Row>
                </Grid> */}


            </div>
        )
    });
    return productDetail;
}
    return(
        <div>
            {props.items && props.items.length > 0 ? 
            renderProductList(): productConst.SEARCHED_PRODUCT_MESSAGE}
        </div>
    )
}


export default ProductList;