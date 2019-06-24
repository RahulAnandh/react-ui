import React, { Component } from 'react';
import { Select, AutoComplete } from 'antd';
import { Statistic, Row, Col, Card,Icon,Table } from 'antd';

const Countdown = Statistic.Countdown;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function onFinish() {
  console.log('finished!');
}
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const tableData = {tableName:'Delivered Orders',
dataSource: [{
  key: '0',
  product: 'Edward King 0',
  address: 'London, Park Lane no. 0',
  date: '10/10/2010',
  time: '12:12:34',
}, {
  key: '1',
  product: 'Edward King 0',
  address: 'London, Park Lane no. 0',
  date: '10/10/2010',
  time: '12:12:34',
},
{
  key: '2',
  product: 'Edward King 0',
  address: 'London, Park Lane no. 0',
  date: '10/10/2010',
  time: '12:12:34',
},
{
  key: '3',
  product: 'Edward King 0',
  address: 'London, Park Lane no. 0',
  date: '10/10/2010',
  time: '12:12:34',
},
{
  key: '4',
  product: 'Edward King 0',
  address: 'London, Park Lane no. 0',
  date: '10/10/2010',
  time: '12:12:34',
}],
columns : [{
  title: 'Product',
  dataIndex: 'product',
  width: '30%',
  editable: true,
}, {
  title: 'Address',
  dataIndex: 'address',
}, {
  title: 'Date',
  dataIndex: 'date',
}, {
  title: 'Time',
  dataIndex: 'time',
}, 
// {
//   title: 'Action',
//   dataIndex: 'action',
//   render: (text, record) => (
//     this.state.dataSource.length >= 1
//       ? (
//         <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
//           <a href="javascript:;">Delete</a>
//         </Popconfirm>
//       ) : null
//   ),
// }
]}



class DashboardPresentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }
  showTable = () => {
    this.setState(tableData);
  }
  render() {
    
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row gutter={30}>
        <Col span={8}>
        {/* <Card title="BIG SALE COUNT DOWN" bordered={false} style={{ width: 300 }}>
          <Col >
            <Countdown value={deadline} format="HH:mm:ss:SSS" />
          </Col>
        </Card> */}
        <Card style={{ width: 300, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="eye" />]}title="In Progress Orders" bordered={false} style={{ width: 300 }}>
          <Statistic
            value={34.41}
            precision={2}
            valueStyle={{ color: '#0000ff' }}
            prefix={<Icon type="arrow-right" />}
            suffix="%"
          />
        </Card>
        
        </Col>
        <Col span={8}>
        <Card style={{ width: 300, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="eye" />]} title="Cancelled Orders" bordered={false} style={{ width: 300 }}>
          <Statistic
           
            value={1.7}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<Icon type="arrow-down" />}
            suffix="%"
          />
        </Card>
       
      </Col>
      <Col span={8}>
      <Card style={{ width: 300, marginTop: 16 }}
          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="eye" onClick ={this.showTable} />]}title="Delivered Orders" bordered={false} style={{ width: 300 }}>
          <Statistic
            value={63.89}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<Icon type="arrow-up" />}
            suffix="%"
          />
        </Card>
      </Col>
        </Row>
        <Row gutter={16} style={{ width: '100%', marginTop: 16 }}>
<Card><Table title={() => this.state.tableName}bordered columns={this.state.columns} dataSource={this.state.dataSource} size="small" /> </Card></Row>
      </div>
    );
  }
}

export default DashboardPresentation;

