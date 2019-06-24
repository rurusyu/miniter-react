import React from 'react';
import './Index.css';
import { withRouter } from 'react-router-dom';

class main extends React.Component {     
  
  render(){
    return(
        <>
        <h1>메인화면으로 이동 중입니다.</h1>
       { 
        setTimeout(() => {
          this.props.history.push("/login")        
        }, 3000)
       }
        </>
    )
  }
}

export default withRouter(main);
