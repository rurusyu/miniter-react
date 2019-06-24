import React from 'react';
import './Index.css';
import { withRouter } from 'react-router-dom';

class main extends React.Component {     
  
  componentDidMount(){
    setTimeout(() => {
      this.props.history.push("/login")        
    }, 3000)
  }

  render(){
    return(
        <h1>메인화면으로 이동 중입니다.</h1>
    )
  }
}

export default withRouter(main);
