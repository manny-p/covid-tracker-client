import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '../components/Grid';

class Homepage extends Component {
    render() {
        return  (
          <div> 
           <Container maxWidth="lg"> 
           <Grid/> 
            </Container>
          </div>
 
        )
    }
}

export default Homepage