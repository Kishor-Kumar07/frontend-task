import React, { Component } from 'react';
import './App.css';
import {Input,Button,Row,Col, Container, Form,Card,Label,FormFeedback} from 'reactstrap'
import Signup from './signup'
import Contributor from './contributors'
class login extends Component {

  constructor(props)
{
  super(props);
  this.state={
     user:[],
     sign:false,
     login:false,
     loginfailed:false,
     notempty:false,
     
     list:{
       lemail:"",
       lpassword:"",
       sign:false
     },
     touched:{
      lemail:false,
      lpassword:false
     },
     errors:{
       lemail:"",
       lpassword:""
     }
  }
  this.loginclick=this.loginclick.bind(this)
   this.handleInputChange=this.handleInputChange.bind(this)
   this.onClick = this.onClick.bind(this)
  }
 onClick=(e)=>{
  e.preventDefault();
  const list =this.state.list
  list['sign']=true;
  this.setState({
    list:list
  })

 }
 validate(email,pass){
  const list=this.state.errors;
  console.log(this.state.list)
  const reg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  if(this.state.list.lemail==''&&reg.test(this.state.list.lemail))
  {
    list['lemail']="Email Invalid"
  }
  else
  {
    list['lemail']=""
  }
    
  if(this.state.list.lpassword==''&&this.state.list.lpassword.trim().length>6&&this.state.list.lpassword.trim().length<20)
  {
    list['lpassword']="Password Invalid"
  }
  else
  {
    list['lpassword']=""
  }
  
  this.setState({errors:list
  })

  console.log(this.state.errors)
}
 
  handleInputChange = (e) => {
  const { name, value } = e.target;
  const list = this.state.list;
  console.log(name)
  list[name] = value;
  this.setState(list)
  { this.validate(this.state.list.lemail,this.state.list.lpassword)}
};
   loginclick=(event)=>{
    event.preventDefault();
    if(this.state.list.lpassword!=''&&this.state.list.lemail!='')
  {
    this.setState({
      login:true
    })
  }
  else
  {
    alert('Some field is empty')
  }
    
    };
  render()
{
  if(this.state.list.sign)
  {
    return(
      <Signup state={this.state}/>
    );
  }
  else if(this.state.login)
  {
    return(
     <Container>
       <div>
        <Contributor />
       </div>
     </Container>
    );
  }
  else
  {
    console.log(this.state.sign)
  return(
    <Card className="cardalign" style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',height:'350px'}}>
    <Form onSubmit={(event) => { this.loginclick(event) }}>
        
  <Row>
  <Col md={3} className="offset-md-1">
   <Label className="form-control" id='email'>Email Id</Label>
   </Col>
    <Col md={5} >
   <Input className="form-control" name="lemail" type='lemail' onChange={e=>{this.handleInputChange(e)}} id='lemail' placeholder='youremail@gmail.com' 
   invalid={this.state.errors['lemail']!=""}
   />
   <FormFeedback>{this.state.errors['lemail']}</FormFeedback>
   </Col>
   </Row>
   <Row>
  <Col md={3} className="offset-md-1">
   <Label className="form-control" id='password'>Password</Label>
   </Col>
    <Col md={5} >
   <Input className="form-control" onChange={e=>{this.handleInputChange(e)}} type='password' name='lpassword' placeholder='Password' 
   invalid={this.state.errors['lpassword']!=""}
   />
   <FormFeedback>{this.state.errors['lpassword']}</FormFeedback>
   </Col>
   </Row>
   <br />
    <Row className="form-group row-align"> 
   <Col md={3} className="offset-md-5">
   <Button type="submit" color='primary' className="form-control" id='login' >Login</Button>
   </Col> 
   
    </Row>
    
    
    </Form>
    <Row>
    <Col md={3} className="offset-md-5">
      
         <Button className="form-control" id='newuser' onClick={e=>{this.onClick(e)}}>New User</Button>
     
       </Col> 
    </Row>
    </Card>
  );
         }
}
}

export default login;