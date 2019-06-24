import React, { Component } from 'react';
import UserPresentation from './user-presentation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import * as UserActions from '../../actions/user-actions';

class User extends Component {
  render() {
    return (
      <div>
        < UserPresentation/>
      </div>
    );
  }
}
function mapStateToProps(state, prop) {
  console.log(state);
  return {
    product: state.user
  }
}

function mapDispatchToProps(dispatch){
  return {
    UserActions:bindActionCreators(UserActions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(User);

