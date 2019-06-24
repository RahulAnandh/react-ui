import React, { Component } from 'react';

import {Layout, Menu} from 'antd';
import DashboardPresentation from './dashboard-presentation';
const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class ProductUpload extends Component {
  render() {
    return (
      <div>
        < DashboardPresentation/>
      </div>
    );
  }
}
export default ProductUpload;
