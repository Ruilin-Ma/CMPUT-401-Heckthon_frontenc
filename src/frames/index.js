import { Layout, Menu, Breadcrumb, Card } from 'antd';
import {withRouter} from 'react-router-dom';


const { Header, Content, Footer } = Layout;

function Frame(props){

    return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Add new activity?</Menu.Item>
        {/* <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <div className="site-layout-background" style={{ background: '#F4F7FC' }}>
        {/* <Card style={{}}>
            lol
        </Card> */}
      </div>
      {props.children}
    </Content>
    <Footer style={{ textAlign: 'center' }}>Hechthon Project ©2021 Created by :)</Footer>
  </Layout>)
}


export default withRouter(Frame)