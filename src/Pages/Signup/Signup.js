import React from 'react';
import './Signup.css';
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import Title from '../../Components/Title';
import AlertMessage from '../../Components/AlertMessage';
import {withRouter} from 'react-router-dom';

class Signup extends React.Component {

  state ={
    inputID :'',
    inputName :'',
    inputPW :'',
    inputCkPW :'',
    inputProfile :'',
  }


  handleChange = (e) => {
    console.log(this.changeBtnColor())
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  
  changeBtnColor = ()=>{
    if(this.state.inputID.length >=6 && this.state.inputPW.length >=6 && this.state.inputCkPW.length >=6 && this.state.inputProfile && this.state.inputName ){
      return true;
    }else{
      return false;
    }
  }
  
  handleClick =() =>{
    if((this.state.inputID.length >=6 && this.state.inputPW.length >=6 && this.state.inputCkPW.length >=6 && this.state.inputProfile && this.state.inputName)
     && this.state.inputPW === this.state.inputCkPW){
     
    //fetch 로 데이터 안넘어오면 network 탭 확인하고 질문할 것!!
    fetch('http://localhost:9000/signup/',{
      method:'post',
      body:JSON.stringify({
        'user_id' : this.state.inputID,
        'user_pw' : this.state.inputPW,
        'user_name' : this.state.inputName,
        'profile' :this.state.inputProfile,
      }),
      headers : {'Content-Type' : 'application/json' } //반드시 있어야함
    })  //인자 2개인데 get이면 2번쨰 인자 안보내도됨. post일때는 보내줘야함. data도 보내줘야함.
    .then(res => res.json())  //바디에 데이터 들어옴. 바디만 리턴
    .then(data => { console.log(data);
      if(data.message === "200 OK"){
        alert("회원가입을 축하드립니다.");
        this.props.history.push('/tweet')
      }else if(data.message === "400 Bad Request"){
        alert("아이디가 중복되었습니다.");
      }
    })  //여기서는 완전 데이터만 받을 수 잇음.
    }else{
      alert("빈칸이 없어야 합니다.")
    }
  }

  render(){
    return (
     <>
      <div id="signup-root">
       <Title title="Sign up to Miniter"></Title>
       <div className="signup-wrap-input-btn">
         <Input name="inputID" 
                type="text" 
                placeholder="  Enter ID" 
                onChange={this.handleChange}/>
         <Input name="inputName" 
                type="text" 
                placeholder="  Enter Name" 
                onChange={this.handleChange} />
         <Input name="inputPW" 
                type="password" 
                placeholder="  Password" 
                onChange={this.handleChange} />
         <Input name="inputCkPW" 
                type="password" 
                placeholder="  Check Password" 
                onChange={this.handleChange}/>
         <Input name="inputProfile" 
                type="text" 
                placeholder="  Enter Profile" 
                onChange={this.handleChange}/>
         <Button name="Sign up" 
                 className ={(this.state.inputID.length >=6 && this.state.inputPW.length >=6 && this.state.inputCkPW.length >=6 
                              && this.state.inputProfile && this.state.inputName) ? "signupBtn" : "signupBtnDefault"}
                 onClick={this.handleClick}/>
       </div>
       <div  className="wrap-message one">
         <AlertMessage/>
       </div>
       <div  className="wrap-message two">
         <AlertMessage/>
       </div>  
      </div>       
     </>
    );
  }
}

export default withRouter(Signup);

