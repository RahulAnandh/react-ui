import React, {Component} from 'react';
import {Form, Input, Select, Button, AutoComplete, Icon} from 'antd';
import UploadImageMany from './upload-image-many'
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

   
class PicturesWall extends React.Component {
 


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

  handleSubmit = () => {
   var Product={
      Name:this.props.form.getFieldValue("Name"),
      Proparties:this.props.form.getFieldValue("Proparties"),
      Price:this.props.form.getFieldValue("Price"),
      OfferPrice:this.props.form.getFieldValue("OfferPrice"),
      BestBeforeUse:this.props.form.getFieldValue("BestBeforeUse"),
      MakeTime:this.props.form.getFieldValue("MakeTime"),
      Incredeants:this.props.form.getFieldValue("Incredeants"),
      Cooked:this.props.form.getFieldValue("Cooked")

    }
   this.props.addProduct(Product)
  
   
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

    const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}
    return (
      <div>
        <UploadImageMany/>
        <Form.Item
          {...formItemLayout}
          label="Name"
        >
          {getFieldDecorator('Name', {
            rules: [{ required: true, message: 'Please input your Name!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>   
        <Form.Item
          {...formItemLayout}
          label="Proparties"
        >
          {getFieldDecorator('Proparties', {
            rules: [{ required: true, message: 'Please input your Proparties!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>  
        <Form.Item
          {...formItemLayout}
          label="Price"
        >
          {getFieldDecorator('Price', {
            rules: [{ required: true, message: 'Please input your Price!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>  
        <Form.Item
          {...formItemLayout}
          label="OfferPrice"
        >
          {getFieldDecorator('OfferPrice', {
            rules: [{ required: true, message: 'Please input your Offer Price!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>  
        <Form.Item
          {...formItemLayout}
          label="Best Before Use"
        >
          {getFieldDecorator('BestBeforeUse', {
            rules: [{ required: false, message: 'Please input your Expiry Date!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>  
        <Form.Item
          {...formItemLayout}
          label="MakeTime"
        >
          {getFieldDecorator('MakeTime', {
            rules: [{ required: true, message: 'Please input your Manufacturing Date!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>  
        <Form.Item
          {...formItemLayout}
          label="Incredeants"
        >
          {getFieldDecorator('Incredeants', {
            rules: [{ required: true, message: 'Please input your Incrediants!'}],
          })(
            <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Please select"
    defaultValue={['a10', 'c12']}
    onChange={handleChange}
  >
    {children}
  </Select>,
          )}
        </Form.Item>  
        <Form.Item
          {...formItemLayout}
          label="Cooked"
        >
          {getFieldDecorator('Cooked', {
            rules: [{ required: true, message: 'Is it Cooked!', whitespace: true }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type="primary" onClick={()=>this.handleSubmit()}>
            Upload product Data
          </Button>
        </Form.Item>    
    </div>
    
    );
  }
}
const ProductUploadPresentation = Form.create({ product: 'product' })(PicturesWall);
export default ProductUploadPresentation ;