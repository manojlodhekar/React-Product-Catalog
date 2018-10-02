import React, { Component } from 'react';
import './App.css';
import './semantic/dist/semantic.min.css'
import ProductHeader from './products/ProductHeader';
import { Container, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: '100%',
    textAlign: 'center'
  },
}
class App extends Component {
  render() {
    return (
      <div>
        <div> 
          <Container textAlign='center' style={styles.container}>
            <ProductHeader subHeaderText={'Please click on Start butoon to start.'} />
            <Image centered size='large' src='/assets/wmt_h_r_c.jpg' />
            <Link to={"/products"} ><Button size='medium'>START</Button></Link>
          </Container>
          </div>
      </div>
    );
  }
}
export default App;
