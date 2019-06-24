import LoginFormPresentation from './login-form-presentation';
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import * as UserActions from '../../actions/user-actions';

class LoginForm extends React.Component{
componentWillMount(){
  console.log(this);
}
    render(){

        return(
            <LoginFormPresentation 
            changeModalVisibility={this.props.changeModalVisibility}
            checkUser = {this.props.UserActions.checkUser}
            />
        )
    }

}
function mapStateToProps(state, prop) {
    console.log(state);
    return {
      user: state.user
    }
  }
  
  function mapDispatchToProps(dispatch){
    return {
      UserActions:bindActionCreators(UserActions,dispatch)
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
