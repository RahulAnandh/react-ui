import { Table, Card, Row, Col, Form} from 'antd';
import React, { Component } from 'react';
import CheckAdmin from './check-admin';
import CreateNewUserPresentation from './create-new-user-presentation'


class EditableTable extends React.Component {
  constructor(props) {
      super(props)

  }

  render() {
    
    return (
      <div>
        <Card style={{ width: '100%' }} title="Confirm Admin Password" >
          <CheckAdmin/>
        </Card>
        <Card style={{ width: '100%' }} title="Add New USer" >
        <CreateNewUserPresentation/>
        </Card>
        
      </div>
    );
  }
}

export default EditableTable