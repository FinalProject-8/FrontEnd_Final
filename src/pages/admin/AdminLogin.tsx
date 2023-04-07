import React from 'react';
import Login from '../../components/web/admin/Login';
import styled from 'styled-components';
import '../../style/adminPage.css';

const AdminLogin = () => {
  return (
    <LoginWrap>
      <Login />
    </LoginWrap>
  );
};
const LoginWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default AdminLogin;
