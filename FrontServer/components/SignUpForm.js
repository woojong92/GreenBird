import React from 'react';

const SignUpForm = () => {
    return (
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
    );
};

export default SignUpForm;


