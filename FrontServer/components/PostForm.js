import React from 'react';
import { Input, Button, Form} from 'antd';

// 반복문,조건문,form 들은 분리하는 것이 좋다.

const dummy = {
    isLoggedIn : true,
    imagePaths :[],
    mainPost: [{
        User : {
            id: 1,
            nickname: 'ggg',
        },
        content:'첫 번째 게시글',
        img: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjNzK7357riAhUNxIsBHW90AVIQjRx6BAgBEAU&url=http%3A%2F%2Fanunnaki.egloos.com%2F6175663&psig=AOvVaw0wZwuk-J6LXcrrjlCIfcK2&ust=1559015626353972',
    }],
};


const PostForm = () => {
    return (
        <Form encType ="multipart/form-data">
            <Input.TextArea maxLength = {140} placeholder = "어떤 신기한 일이 있었나요?" />
            <div>
                <input type="file" multiple hidden />
                <Button>이미지 업로드</Button>
                <Button type="primary" style ={{float : 'right'}} htmlType ="submit">짹짹</Button>
            </div>
            <div>
                {dummy.imagePaths.map( (v,i) => {
                    return (
                        <div key ={v} style={{ display : 'inline-block'}}>
                            <img src={'http://localhost:3000/' + v} style={{width: '200px'}} alt={v} />
                            <Button>제거</Button>    
                        </div>
                    )
                })}
            </div>
        </Form>
    );
};

export default PostForm;
