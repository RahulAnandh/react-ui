import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Row,Col,Modal, Icon } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { HashRouter as Router, Route } from 'react-router-dom'
import ProductUpload from './components/product/product-upload';
import EmployeeUpload from './components/employee/employee-upload';
import DashBoard from './components/dashboard/dashboard';
import OrderList from './components/order/order-list';
import Login from './components/login/login-form';
import image from './cataring.png';
import User from './components/user/user';
const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
  state = {
    collapsed: false,
    tabView: 'dashboard',
    visible:true
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  changeModalVisibility = (visiblity) =>{
    this.setState({visible:visiblity})
  }
  
  render() {
    return (
      <div>
         {this.state.visible === true &&
         <Modal closable={false} centered={false} visible={this.state.visible} footer={null} centered={true}>
         <Row>
           <Col span={14}> <Login changeModalVisibility={this.changeModalVisibility} /></Col>
           <Col span={8}><img alt="cataring logo" src={image} width={220} height ={250} /></Col>

         </Row>
           
         </Modal>
         
        }
        {this.state.visible === false && 
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" onClick={() => this.setState({ tabView: 'dashboard' })}>
                  <Icon type="dashboard" />
                  <span Link={"dashboard"}>Dash Board</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={() => this.setState({ tabView: 'orders' })}>
                  <Icon type="ordered-list" />
                  <span>Product Orders</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={() => this.setState({ tabView: 'product' })}>
                  <Icon type="upload" />
                  <span>Product Upload</span>
                </Menu.Item>
                <Menu.Item key="4" onClick={() => this.setState({ tabView: 'employee' })}>
                  <Icon type="user" />
                  <span>Employee Upload</span>
                </Menu.Item>
                <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="setting" />
                <span>Settings</span>
              </span>
            }
          >
            <Menu.Item key="5" onClick={() => this.setState({ tabView: 'user' })}>User Settings</Menu.Item >
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, }} >
                {this.state.tabView === "dashboard" &&
                  <DashBoard />
                }
                {this.state.tabView === "orders" &&
                  <OrderList />
                }
                {this.state.tabView === "product" &&
                  <ProductUpload />
                }
                {this.state.tabView === "employee" &&
                  <EmployeeUpload />
                }
                {this.state.tabView === "user" &&
                  <User/>
                }

              </Content>
            </Layout>
          </Layout>
         } 
      </div>
    );
  }
}
export default App;
