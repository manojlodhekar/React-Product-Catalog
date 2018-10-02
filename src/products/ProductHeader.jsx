import React from 'react';
import { Image, Grid, Divider } from 'semantic-ui-react'
import productConst from '../const/productConst';

const styles = {
  
    header:{
        paddingLeft: 10,
        textAlign: 'left',
        paddingBottom: 10,
        borderBottom: '1px solid grey'
    },
    headerTxt:{
        paddingTop: 10,
        textAlign: 'left',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 1.2
    },
    logoCls:{
        maxWidth: 60, 
        float: 'right', 
        textAlign: 'right'
    },
    subHeaderText:{
        color: '#0071ce',
        textAlign: 'left',
        fontSize: 18
    }

}

const ProductHeader = (props) =>{

    return(
        <div>
            <Grid >  
                <Grid.Row style={{paddingLeft: 20}}>
                    <Grid.Column width={3} style={{float: 'right'}}>
                        <Image src='/assets/Walmart_Spark.png' style={styles.logoCls} />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <div style={styles.headerTxt}>
                                {productConst.HEADER_TEXT}
                        </div>
                        <div style={styles.subHeaderText}>
                                {props.subHeaderText}
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider />

           {/* <Header as='h2' style={styles.header}>
                    <Image src='/assets/Walmart_Spark.png' width="60"/> 
                    <Header.Content style={styles.headerTxt}>
                    {productConst.HEADER_TEXT}
                    <Header.Subheader>{props.subHeaderText}</Header.Subheader>
                    </Header.Content>
                </Header> */}
        </div>
    )
}
export default ProductHeader;