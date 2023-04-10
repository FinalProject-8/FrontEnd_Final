import React, { useEffect } from 'react';
import styled from 'styled-components';
import AdminAside from '../../components/web/admin/AdminAside';
import AdminHeader from '../../components/web/admin/AdminHeader';
import '../../style/adminPage.css';
import ready from '../../assets/ready.png';

const Admin = () => {
  return (
    <>
      <AdminHeader />
      <FlexBox>
        <AdminAside />
        <img src={ready} alt='사이트 로고' />
      </FlexBox>
    </>
  );
};

const FlexBox = styled.div`
  padding-top: 84px;
  display: flex;
  img {
    margin: 100px auto;
  }
`;

export default Admin;
