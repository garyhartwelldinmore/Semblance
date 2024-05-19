/*
 * @Description:
 * @Autor: jiayinchu
 * @Date: 2024-05-01 09:07:58
 * @LastEditors: jiayinchu
 * @LastEditTime: 2024-05-01 14:57:07
 */
import React from 'react';
import { Flex, Layout } from 'antd';
import Upload from '../upload'
const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    // backgroundColor: '#0958d9',
    height: 'calc(100vh - 150px)',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    // backgroundColor: '#4096ff',
    height: 64,
};
const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
};
const App: React.FC = () => (
    <Flex gap="middle" wrap="wrap">
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>
                <Upload />
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </Flex>
);

export default App;
