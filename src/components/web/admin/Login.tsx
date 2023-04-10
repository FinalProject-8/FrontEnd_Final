import React from 'react';
import ollaeduLogo from '../../../assets/ollaeduLogo.svg';
import styled from 'styled-components';

function Login() {
  return (
    <LoginWrap>
      <h1>
        <img src={ollaeduLogo} alt='사이트 로고' />
      </h1>
      <Form>
        <p>올라에듀 관리자 로그인</p>
        <Input type='text' placeholder='아이디 입력' />
        <Input type='password' placeholder='비밀번호 입력' />
        <Button>로그인</Button>
      </Form>
    </LoginWrap>
  );
}

const LoginWrap = styled.div`
  width: 75vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 107px 0 64px 0;
  border-radius: 20px;
  h1 {
    margin-bottom: 22px;
  }
`;
const Form = styled.form`
  width: 700px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  padding: 70px 74px;
  border: 1px solid #747e88;
  border-radius: 10px;
  box-sizing: border-box;
  p {
    line-height: 44px;
    font-size: 32px;
    font-weight: bold;
    color: var(--color-title);
    margin-bottom: 15px;
  }
`;
const Input = styled.input`
  background-color: #fff;
  width: 100%;
  height: 60px;
  padding: 20px;
  border: 2px solid var(--color-input-border);
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 20px;
  color: var(--color-button-text);
  &::placeholder {
    color: var(--color-button-text);
  }
`;
const Button = styled.button`
  background-color: var(--color-button-text);
  width: 100%;
  height: 68px;
  border: transparent;
  border-radius: 34px;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
`;
export default Login;
