import React, {Component} from 'react';
import {Form, Input, Select, Button, AutoComplete, Icon,DatePicker} from 'antd';
import UploadImage from '../image/upload-image-one';
import Data from '../../data/data';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function handleChange(value) {
  console.log(`selected ${value}`);
}

class EmployeeUpload extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [{
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }],
  };

  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })



  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }
  submitData = () => {
    this.props.form.validateFields(
      (err) => {
        if (!err) {
          console.info('successs');
        }
      },
    );
  }
  addEmployee = () => {
    var Employee = {
      FirstName: this.props.form.getFieldValue("FirstName"),
      MiddleName: this.props.form.getFieldValue("MiddleName"),
      LastName: this.props.form.getFieldValue("LastName"),
      Address: this.props.form.getFieldValue("Address"),
      DateOfBirth: this.props.form.getFieldValue("DateOfBirth"),
      PinCode: this.props.form.getFieldValue("PinCode"),
      District: this.props.form.getFieldValue("District"),
      State: this.props.form.getFieldValue("State"),
      Nationality: this.props.form.getFieldValue("Nationality"),
      Gender: this.props.form.getFieldValue("Gender")

    }
    this.props.addEmployee(Employee);
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );



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
    const formTailLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8, offset: 4 },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    return (
      <div>
        <UploadImage/>
        <Form.Item
          {...formItemLayout}
          label="First Name"
        >
          {getFieldDecorator('FirstName', {
            rules: [{ required: true, message: 'Please input your First Name!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Middle Name"
        >
          {getFieldDecorator('MiddleName', {
            rules: [{ required: false, message: 'Please input your Middle Name!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Last Name"
        >
          {getFieldDecorator('LastName', {
            rules: [{ required: false, message: 'Please input your Last Name!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Address"
        >
          {getFieldDecorator('Address', {
            rules: [{ required: true, message: 'Please input your Address!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Date Of Birth"
        >
          {getFieldDecorator('DateOfBirth', {
            rules: [{type: 'object', required: true, message: 'Please input your Date Of Birth!', whitespace: true }],
          })(
            <DatePicker style={{ width: 350 }}/>
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Pin Code"
        >
          {getFieldDecorator('PinCode', {
            rules: [{ required: true, message: 'Please input your Pin Code!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="District"
        >
          {getFieldDecorator('District', {
            rules: [{ required: true, message: 'Please input your District!', whitespace: true }],
          })(
            <Select
            size={'default'}
            defaultValue="a1"
            onChange={handleChange}
            style={{ width: 350 }}
          >
            {children}
          </Select>
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="State"
        >
          {getFieldDecorator('State', {
            rules: [{ required: true, message: 'Please Select your State!', whitespace: true }],
          })(
            <Select
            size={'default'}
            defaultValue="a1"
            onChange={handleChange}
            style={{ width: 350 }}
          >
            {children}
          </Select>
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Nationality"
        >
          {getFieldDecorator('Nationality', {
            rules: [{ required: true, message: 'Please Select your Nationality!', whitespace: true }],
          })(
            <Select
            size={'default'}
            defaultValue="a1"
            onChange={handleChange}
            style={{ width: 350 }}
          >
            {children}
          </Select>
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="Gender"
        >
          {getFieldDecorator('Gender', {
            rules: [{ required: true, message: 'Please Select your Gender!', whitespace: true }],
          })(
            <Select
            size={'default'}
            defaultValue="a1"
            onChange={handleChange}
            style={{ width: 350 }}
          >
            {children}
          </Select>
          )}
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={()=>this.addEmployee()}>
            Upload Employee Data
          </Button>
        </Form.Item>
      </div>

    );
  }
}
const Employee = Form.create({ name: 'employee' })(EmployeeUpload);
export default Employee;