import React from 'react';
import Login from '../../components/mobile/commentary/web/admin/Login';
import styled from 'styled-components';
import AdminAside from '../../components/mobile/commentary/web/admin/AdminAside';
import AdminHeader from '../../components/mobile/commentary/web/admin/AdminHeader';
import { useLocation } from 'react-router-dom';
import '../../style/adminPage.css';
import AdminPost from '../../components/mobile/commentary/web/admin/AdminPost';

const Admin = () => {
  const location = useLocation().pathname;
  return (
    <>
      <AdminHeader />
      <FlexBox>
        <AdminAside />
        <AdminPost />
      </FlexBox>
    </>
  );
};

const FlexBox = styled.div`
  padding-top: 84px;
  display: flex;
  /* justify-content: center; */
`;

export default Admin;
