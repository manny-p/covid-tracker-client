import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import SpacingGrid from '../components/Grid';
import Nav from 'react-bootstrap/esm/Nav';

class Homepage extends Component {
    render() {
        return  (
          <div> 
           <Container maxWidth="lg"> 
           <SpacingGrid/> 
            </Container>
          </div>
 
        )
    }
}

export default Homepage