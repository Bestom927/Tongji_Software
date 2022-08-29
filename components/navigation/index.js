import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;
import "antd/dist/antd.min.css";

export default function Navi(props){
    return(
        <Header>
      <div className="logo" />

      <Menu theme="dark"
        mode="horizontal"
        defaultSelectedKeys={props.defaultKey}>
            <Menu.Item key="Home">
            <Link href="/tongji_software"><a>Home</a></Link>
            </Menu.Item>

        <Menu.Item key="Page Zero">
            <Link href="/tongji_software/page0"><a>Page Zero</a></Link>
            </Menu.Item>
        <Menu.Item key="Page One">
        <Link href="/tongji_software/page1"><a>Page One</a></Link>
            </Menu.Item>

      </Menu>

    </Header>
    );

}