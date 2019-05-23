import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from 'antd';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm'

const dummy = {
    nickname : "redShark",
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedIn : false,
}

const AppLayout = ( {children} ) => {
    return (
        <div>
            <Menu mode = "horizontal">
                <Menu.Item key="home"><Link href = "/"><a>GreenBird</a></Link></Menu.Item> 
                <Menu.Item key="profile"><Link href = "/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style = {{verticalAlign: 'middle'}} />
                </Menu.Item>
                <Link href = "/signup"><a><Button>회원가입</Button></a></Link>
            </Menu>
            <Row>
                <Col xs={24} md={6}>첫번째
                    {dummy.isLoggedIn 
                        ?   
                        <Card
                            actions = {[
                                <div key="twit">짹<br />{dummy.Post.length}</div>,
                                <div key="following">팔로워<br />{dummy.Followings.length}</div>,
                                <div ket="follower">팔로워<br />{dummy.Followers.length}</div>,
                            ]}
                            >
                            <Card.Meta
                                avatar = {<Avatar>{dummy.nickname[0]}</Avatar>}
                                title = {dummy.nickname}
                            />
                        </Card>
                        :
                        <LoginForm />
                    }
                </Col>
                <Col xs={24} md={12}>두번재</Col>
                <Col xs={24} md={6}>세번째</Col>
            </Row>
            {children}
        </div>
    );
};

AppLayout.propTypes ={
    children: PropTypes.node, //렌더링 할 수 있는 것들은 node타입
};

export default AppLayout;