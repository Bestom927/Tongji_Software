import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;
import "antd/dist/antd.min.css";
import Navi from '../../../components/navigation';
import FooterPanel from '../../../components/footer';

const Page0 = () => (
  <Layout className="layout">
    <Navi defaultKey="Page Zero"/>
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
        Hello World!!!
        </div>
    </Content>
    <FooterPanel/>
  </Layout>
);

export default Page0;

