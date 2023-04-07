import React from 'react';
import styled from 'styled-components';
import AdminAside from '../../components/web/admin/AdminAside';
import AdminHeader from '../../components/web/admin/AdminHeader';
import '../../style/adminPage.css';
import AdminPost from '../../components/web/admin/AdminPost';
import AdminPostMange from '../../components/web/admin/AdminPostMange';

function PreviousManage() {
  return (
    <>
      <AdminHeader />
      <FlexBox>
        <AdminAside />
        <AdminPostMange />
      </FlexBox>
    </>
  );
}

const FlexBox = styled.div`
  padding-top: 84px;
  display: flex;
`;

export default PreviousManage;
