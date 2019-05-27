import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from 'antd';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm'
import UserProfile from './UserProfile';

const dummy = {
    nickname : "redShark",
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedIn : false,
};

const AppLayout = ( {children} ) => {
    return (
        <div>
            <Menu mode = "horizontal">
                <Menu.Item key="home"><Link href = "/"><a>GreenBird</a></Link></Menu.Item> 
                <Menu.Item key="profile"><Link href = "/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style = {{verticalAlign: 'middle'}} />
                </Menu.Item>
            </Menu>
            <Row gutter = {8}>
                <Col xs={24} md={6}>
                    {dummy.isLoggedIn 
                        ?   
                        <UserProfile />
                        :
                        <LoginForm />
                    }
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>세번째</Col>
            </Row>
            
        </div>
    );
};

AppLayout.propTypes ={
    children: PropTypes.node, //렌더링 할 수 있는 것들은 node타입
};

export default AppLayout;