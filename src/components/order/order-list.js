import React, { Component } from 'react';
import {Layout} from 'antd';
import OrderListPresentation from './order-list-presentation';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'
import * as orderActions from '../../actions/order-actions';

class OrderList extends Component {
  state = {
    collapsed: false,
  };
componentWillMount(){
    var data=this.props.orderActions.getOrder();
  }
constructor(props){
  super(props)
}
  render() {
    return (
      <div>
        <OrderListPresentation orders={this.state.order} />
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  console.log("STATE:"+state,"PROPS"+props);
  return {
    order: state.order
  }
}

function mapDispatchToProps(dispatch){
  return {
    orderActions:bindActionCreators(orderActions,dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderList);

