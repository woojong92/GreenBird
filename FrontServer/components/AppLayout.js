import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button } from 'antd';

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
            {children}
        </div>
    );
};

export default AppLayout;