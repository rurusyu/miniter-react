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
  
  handleLogin = (e) => {
   const check = this.state.inputID.length >= 6 && this.state.inputPW.length >=6;  
   
   if(check){
    this.props.history.push('/Tweet');
   }else if(!check){
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
          <Input name="inputID" 
                 type="text" 
                 placeholder=" Enter ID" 
                 onChange={this.handleChange} />
          <Input name="inputPW" 
                 type="password" 
                 placeholder=" Password" 
                 onChange={this.handleChange} />
          <Button className={this.state.inputID.length >= 6 && this.state.inputPW.length >=6 ? "loginBtn" : "loginBtnDefault"} 
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


