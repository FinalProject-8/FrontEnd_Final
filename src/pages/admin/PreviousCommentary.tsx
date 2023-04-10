import React from 'react';
import styled from 'styled-components';
import AdminAside from '../../components/web/admin/AdminAside';
import AdminHeader from '../../components/web/admin/AdminHeader';
import '../../style/adminPage.css';
import AdminPost from '../../components/web/admin/AdminPost';

function PreviousCommentary() {
  return (
    <>
      <AdminHeader />
      <FlexBox>
        <AdminAside />
        <AdminPost />
      </FlexBox>
    </>
  );
}

const FlexBox = styled.div`
  padding-top: 84px;
  display: flex;
  /* justify-content: center; */
`;

export default PreviousCommentary;
