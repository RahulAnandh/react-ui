import React, { Component } from 'react';
import {Layout} from 'antd';
import ProductUploadPresentation from './product-upload-presentation';
import ProductListTablePresentation from './product-list-table-presentation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import * as ProductActions from '../actions/product-actions';
// const {
//   Header, Content, Footer, Sider,
// } = Layout;

class ProductUpload extends Component {
  state = {
    collapsed: false,
  };

constructor(props){
  super(props)
}
  render() {
    return (
      <div>
        <ProductUploadPresentation addProduct={this.props.productActions.addProduct}/>
        <ProductListTablePresentation/>
      </div>
    );
  }
}
function mapStateToProps(state, prop) {
  console.log(state);
  return {
    product: state.product
  }
}

function mapDispatchToProps(dispatch){
  return {
    productActions:bindActionCreators(ProductActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductUpload);

