import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as EmployeeActions from '../actions/employee-actions';
import EmployeeUploadPresentation from './employee-upload-presentation';
import EmployeeListPresentation from './employee-list-presentation';
import { deleteEmployee } from '../actions/employee-actions';

class EmployeeUpload extends Component {
  constructor(props){
    super(props)
  }
  componentWillMount(){
    this.props.employeeActions.getEmployee();
    
  }
  render() {
    
    return (
      <div>
        <EmployeeUploadPresentation 
        addEmployee={this.props.employeeActions.addEmployee}
        getEmployee={this.props.employeeActions.getEmployee}
         />
         <div>
         <EmployeeListPresentation/>
         </div>
      </div>
    );
  }
}


function mapStateToProps(state, prop) {
  console.log(state);
  return {
    employee: state.employee
  }
}

function mapDispatchToProps(dispatch){
  return {
    employeeActions:bindActionCreators(EmployeeActions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(EmployeeUpload);
