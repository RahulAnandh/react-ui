import {Form,Input,Tooltip,Icon,Cascader,Select,Row, Col,Checkbox,Button,AutoComplete} from 'antd';
import React, { Component } from 'react';

  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
  class RegistrationForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    addNewUser = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
   
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      
  
      
  
      return (
        <Form  onSubmit={this.handleSubmit}>
          <Form.Item {...formItemLayout} label="User name" >
            {getFieldDecorator('username', {
              rules: [
                {
                  message: 'The input User name',
                },
                {
                  required: true,
                  message: 'Please input Username',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Password">
            {getFieldDecorator('password', {
              rules: [
                {
                  message: 'The input Password',
                },
                {
                  required: true,
                  message: 'Please input password',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input  E-mail!',
                },
                {
                  required: true,
                  message: 'Please input E-mail',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Phone Number">
            {getFieldDecorator('phonenumber', {
              rules: [
                {
                  message: 'Input Phone Number!',
                },
                {
                  required: true,
                  message: 'Please input Phone Number',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Date Of Birth">
            {getFieldDecorator('Date Of Birth', {
              rules: [
              
                {
                  required: true,
                  message: 'Please SelectDate Of Birth',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Gender">
            {getFieldDecorator('gender', {
              rules: [
                
                {
                  required: true,
                  message: 'Please Select Gender',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button onClick={()=>this.addNewUser()}>
              Register
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  export default WrappedRegistrationForm