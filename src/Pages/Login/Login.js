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
     //fetch 로 데이터 안넘어오면 network 탭 확인하고 질문할 것!!
     fetch('http://localhost:9000/login',{
      method:'post',
      body:JSON.stringify({
        'user_id' : this.state.inputID,
        'user_pw' : this.state.inputPW,
      }),
      headers : {'Content-Type' : 'application/json' } //반드시 있어야함
    })  //인자 2개인데 get이면 2번쨰 인자 안보내도됨. post일때는 보내줘야함. data도 보내줘야함.
    .then(res => res.json())  //바디에 데이터 들어옴. 바디만 리턴
    .then(data => { console.log(data);
      
    })  //여기서는 완전 데이터만 받을 수 잇음.


   // this.props.history.push('/Tweet');
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


