import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;
import "antd/dist/antd.min.css";
import Navi from '../../../components/navigation';
import FooterPanel from '../../../components/footer';

export default function Page1(props){
    return(
        <Layout className="layout">
    <Navi defaultKey="Page One"/>
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
        This is Page One.
        </div>
    </Content>
    <FooterPanel/>
  </Layout>
    );
}
