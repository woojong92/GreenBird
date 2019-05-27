import React from 'react';

const UserProfile = () =>{
    return (
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
                );
            };

export default UserProfile;

