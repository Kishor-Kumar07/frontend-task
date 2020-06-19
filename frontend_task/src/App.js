import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login.js'
import {Input,Button,Row,Col, Container, Form,Card,Label, CardBody, CardText, FormFeedback} from 'reactstrap'
import {Link} from 'react-router-dom';
import faker from 'faker';
class App extends Component {
 constructor(props)
 {
   super(props)
   this.state={
     newuser:false,
     login:false,
     loginfailed:false,
     user:[],
     list:{
       email:"",
       password:"",
       address:"",
       number:""
     },
     errors:{
       lemail:"",
       lpassword:""
     }
   }
   this.handleclick=this.handleclick.bind(this)
   this.signclick=this.signclick.bind(this)
   this.loginclick=this.loginclick.bind(this)
   this.handleInputChange=this.handleInputChange.bind(this)
   this.handleBlur=this.handleBlur.bind(this)
 }
 handleclick=(e)=>{
  this.setState({
     newuser:true
   })
 };
 handleBlur=(e)=>{
    if(this.state.list[e.target.name]=='')
    {
      this.state.errors[e.target.name]="Invalid"
    }
 }
 handleInputChange = (e) => {
  const { name, value } = e.target;
  const list = this.state.list;
  list[name] = value;
  this.setState(list)
};
 signclick=(event)=>{
   event.preventDefault();
  this.state.user.push(this.state.list)
   this.setState({
     newuser:false,
     list:{
      email:"",
      password:"",
      address:"",
      number:""
     }
   })
  };
   loginclick=(event)=>{
    event.preventDefault();
    this.state.user.find({email:document.getElementById('lemail').value})
    .then(res=>{
      if(res.password==document.getElementById('lemail').value)
      {
        this.setState({
          login:true
        })
      }
    })
    this.setState({
      loginfailed:true
    })
    };
 
  render()
  {
    if(this.state.login)
    {
      if(!this.state.loginfailed)
      {
      var randomName = faker.name.findName(); // Caitlyn Kerluke
      var randomEmail = faker.internet.email(); // Rusty@arne.info
      var randomCard = faker.helpers.createCard();;
      return(
        <Container>
            <Card className="cardalign" style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',height:'450px'}}>
               <CardBody>
                 <CardText>
                   {randomName}
                 </CardText>
                 <CardText>
                   {randomEmail}
                 </CardText>
                 <CardText>
                   {randomCard}
                 </CardText>
               </CardBody>
            </Card>
        </Container>
      );
    }
    else
    {
      return(
       <div>
         Sorry U can't login recheck ur email and password
       </div>
      );
    }
  }
    else
    {
  return (
    <div className="App">
      <Container >
      
         {this.state.newuser ?(
            <Form onSubmit={(event) => { this.signclick(event) }}>
            <Card className="cardalign" style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',height:'450px'}}>
      <Row>
      <Col md={3} className="offset-md-1">
       <Label className="form-control" id='email'>Email Id</Label>
       </Col>
        <Col md={5} >
       <Input className="form-control" name="email" type='email' value={this.state.list['email']} id='email' placeholder='youremail@gmail.com' onChange={e=>{this.handleInputChange(e)}}/>
       </Col>
       </Row>
       <Row>
      <Col md={3} className="offset-md-1">
       <Label className="form-control" id='password'>Password</Label>
       </Col>
        <Col md={5} >
       <Input className="form-control" name="password" value={this.state.list['password']} type='password' id='password' placeholder='Password' onChange={e=>{this.handleInputChange(e)}}/>
       </Col>
       </Row>
       <Row>
      <Col md={3} className="offset-md-1">
       <Label className="form-control" id='Address'>Address</Label>
       </Col>
        <Col md={5} >
       <Input className="form-control" value={this.state.list['address']} name="address" type='text' id='residence' placeholder='Residence' onChange={e=>{this.handleInputChange(e)}}/>
       </Col>
       </Row>
       <Row>
      <Col md={3} className="offset-md-1">
       <Label className="form-control" id='Mobile'>Mobile</Label>
       </Col>
        <Col md={5} >
       <Input className="form-control" value={this.state.list['number']} name="number" type='number' id='mobile' placeholder='Mobile Number' onChange={e=>{this.handleInputChange(e)}}/>
       </Col>
       </Row>
       <br />
        <Row className="form-group row-align"> 
       <Col md={3} className="offset-md-5">
       <Button type="submit" color='primary' className="form-control" id='signup' >Signup</Button>
       </Col> 
        </Row>
        </Card>
        </Form>
         )
        :
        (
        <Form onSubmit={(event) => { this.loginclick(event) }}>
        <Card className="cardalign" style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',height:'350px'}}>
  <Row>
  <Col md={3} className="offset-md-1">
   <Label className="form-control" id='email'>Email Id</Label>
   </Col>
    <Col md={5} >
   <Input className="form-control" name="lemail" type='email' id='lemail' placeholder='youremail@gmail.com' onBlur={e=>this.handleBlur}
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
   <Input className="form-control"  type='password' name='lpassword' placeholder='Password' onBlur={e=>this.handleBlur}
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
    <Row>
    <Col md={3} className="offset-md-5">
       <div>
         <Button onClick={this.handleclick}>New User</Button>
       </div>
       </Col> 
    </Row>
    </Card>
    </Form>
        )
        }
        
       </Container>
    </div>
  );
      }
}
}

export default App;
