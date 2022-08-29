import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;
import "antd/dist/antd.min.css";

export default function FooterPanel(props){
    return(
        <Footer
      style={{
        textAlign: 'center',
      }}
    >
     Wiki ©2022 Created by Tongji Software
    </Footer>
    );

}