import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js'
import {Input,Button,Row,Col, Container, Form,Card,Label, CardBody, CardText, FormFeedback} from 'reactstrap'
import {Link} from 'react-router-dom';
import faker from 'faker';
import Signup from './signup'
class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      sign:false
    }
  }
render()
{
  return(
<Login sign={this.state.sign} />
  );
}
}

export default App;
