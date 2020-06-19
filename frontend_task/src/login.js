import React, { Component } from 'react';
import './App.css';
import {Input,Button,Row,Col, Container, Form,Card} from 'reactstrap'
class login extends Component {
  render()
  {
  return (
    <div >
        <Container  style={{position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}}>
         
            <Form>
            <Card>
        <Row className="form-group row-align"> 
       <Col md={3} >
       <Input className="form-control" type='email' id='email' placeholder='youremail@gmail.com'/>
       </Col>    
        </Row>
        <Row className="form-group row-align"> 
       <Col md={3} >
       <Button color='primary' className="form-control" id='login' >Login</Button>
       </Col>     
        </Row>
        </Card>
        </Form>
        
       </Container>
    </div>
  );
  }
}

export default login;