import React from 'react';
import './Login.css';
import { withRouter } from 'react-router-dom';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Title from '../../Components/Title';
import AlertMessage from '../../Components/AlertMessage';

class Login extends React.Component {

  state ={
    inputID : "",
    inputPW : "",
  }

  handleSignup = () => {
    this.props.history.push('/signup');
  }
  
  handleChange = (e) =>{
    this.setState({
     [e.target.name] : e.target.value,
    })     
  }
  //handleChange값으로 로직을 넣으면 state관리를 해야하고, 한박자 느림.
  // changeBtnColor = () => {
  //   if(this.state.inputID.length >= 6 && this.state.inputPW.length >=6){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }
  handleLogin = (e) => {
    console.log(this.changeBtnColor)
   if(this.state.inputID.length >= 6 && this.state.inputPW.length >=6){
    this.props.history.push('/Tweet');
   }else if(!(this.state.inputID.length >= 6 && this.state.inputPW.length >=6)){
     alert("아이디와 비번을 6자이상 입력해주세요")
   }
  }

  render(){
    return (
      <>
       <div id="login-root"> 
        <Title title="Log In Miniter">
          <div className="bird-container">
            <div className="bird"></div>
          </div>
        </Title>  
        <div className="login-wrap-input-btn">
          <Input name="inputID" type="text" placeholder=" Enter ID" onChange={this.handleChange} />
          <Input name="inputPW" type="password" placeholder=" Password" onChange={this.handleChange} />
          <Button className={this.state.inputID.length >= 6 && this.state.inputPW.length >=6 ? "loginBtn" : ""} 
                  name="Login" 
                  onClick={this.handleLogin} 
                  />     
          <Button className ="signupBtn"
                  name="Signup" 
                  onClick={this.handleSignup} 
                  />
        </div>
        <div className="wrap-message">
          <AlertMessage/>
        </div>
       </div>      
      </>
     );
  }  
}

export default withRouter(Login);


