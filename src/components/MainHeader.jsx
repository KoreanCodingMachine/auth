import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";

const { Header } = Layout;
const MainHeader = () => {

    const navigate = useNavigate()

    const home = () => {
        navigate('/')
    }

    const profile = () => {
        navigate('/profile')
    }

    return (
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" onClick={home}>Home</Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />} onClick={profile}>Profile</Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
};

export default MainHeader;