import React from 'react';
import Login from '../../components/mobile/commentary/web/admin/Login';
import styled from 'styled-components';

const AdminLogin = () => {
  return (
    <BackGround>
      <Login />
    </BackGround>
  );
};
const BackGround = styled.div`
  background-color: #e8edf3;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default AdminLogin;
