import React from 'react';
import styled from 'styled-components';
import AdminAside from '../../components/web/admin/AdminAside';
import AdminHeader from '../../components/web/admin/AdminHeader';
import '../../style/adminPage.css';
import AdminPostManage from '../../components/web/admin/AdminPostMange';

function StrategyManage() {
  return (
    <>
      <AdminHeader />
      <FlexBox>
        <AdminAside />
        <AdminPostManage />
      </FlexBox>
    </>
  );
}

const FlexBox = styled.div`
  padding-top: 84px;
  display: flex;
  /* justify-content: center; */
`;

export default StrategyManage;
