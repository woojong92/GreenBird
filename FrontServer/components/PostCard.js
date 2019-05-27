import React from 'react';
import { Button, Card, Avatar, Icon } from 'antd';
import PropTypes from 'prop-types';

// 컴포넌트를 분리하면 props를 잘 처리해야 한다.
const PostCard = ( {post} ) => {
    return (
        <Card 
            key = {+post.createdAt}
            cover = {post.img && <img alt ="example" src= {post.img}/>}
            actions = {[
                <Icon type ="retweet" key = "retweet" />,
                <Icon type ="heart" key = "heart" />,
                <Icon type ="message" key = "message" />,
                <Icon type ="ellipsis" key = "ellipsis" />,
            ]}
            extra = {<Button>팔로우</Button>}
        >
            <Card.Meta 
                avatar = {<Avatar>{post.User.nickname[0]}</Avatar> }
                title = {post.User.nickname}
                description={post.content}
            />
        </Card>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        User : PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createAt: PropTypes.object
    }),
};
export default PostCard;