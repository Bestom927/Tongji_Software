import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;
import "antd/dist/antd.min.css";
import Navi from '../../components/navigation';
import FooterPanel from '../../components/footer';

export default function Home(props){
    return(
        <Layout className="layout">
    <Navi defaultKey="Home"/>
    <Content
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        Home Sweet Home.
        </div>
    </Content>
    <FooterPanel/>
  </Layout>
    );
}
