import React, { useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Form, Input, Checkbox,  Button} from 'antd';

const Signup = () => {
    
    {/* 모든 Input에 스테이트와 이벤트 리스너를 만들어 줘야 한다. */}
    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] =useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [PasswordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const onSubmit = (e) => { 
        e.preventDefault(); //이벤트를 취소할 수 있는 경우, 이벤트의 전파를 막지않고 그 이벤트를 취소합니다.
        if( password !=  passwordCheck ) {
            return setPasswordError(ture);
        }
        if( !term ) {
            return setTermError(true);
        }
        
        console.log({
            id,
            nickname,
            password,
            passwordCheck,
            term
        });
    };

    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangePasswordCheck = (e) => { 
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
     };

    const onChangeTerm = (e) => {
        setTermError(false);
        setTerm(e.target.checked);
    };

    return (
        <>
            <Head>
                <title>GreenBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.js" />
            </Head>
            <AppLayout>
                <div>Signup</div>
                <Form onSubmit = {onSubmit} style = {{ padding : 10 }} >
                    <div>
                        <label htmlFor = "user-id">아이디</label>
                        <br />
                        <Input name="user-id" value={id} required onChange = {onChangeId} />
                    </div>
                    <div>
                        <label htmlFor = "user-nickname">닉네임</label>
                        <br />
                        <Input name="user-nickname" value={nickname} required onChange = {onChangeNickname} />
                    </div>
                    <div>
                        <label htmlFor = "user-password" >비밀번호</label>
                        <br />
                        <Input name="user-password"  type="password" value={password} required onChange = {onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor = "user-password-check" >비밀번호체크</label>
                        <br />
                        <Input name="user-password-check" type="password" value={passwordCheck} required onChange = {onChangePasswordCheck} />
                        {PasswordError && <div style= {{ color : 'red'}}> 비밀번호가 일치하지 않습니다.</div>} 
                    </div>
                    <div>
                        <Checkbox name = "user-term" value={term} onChange = {onChangeTerm} > 동의합니다. </Checkbox>
                        {termError && <div style={{ color : 'red'}}>약관에 동의하셔야 합니다.</div>} 
                    </div>
                    <div style={{margintop : 10}}>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>                
            </AppLayout>
        </>
    );
};

export default Signup;