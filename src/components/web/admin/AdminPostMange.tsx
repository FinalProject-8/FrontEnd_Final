import React from 'react';
import styled from 'styled-components';
import AdminCategory from './AdminCategory';
import { adminLocation } from '../../../utils/adminLocation';

function AdminPostMange() {
  const locationFn = adminLocation();

  return (
    <MainContainer>
      <AdminCategory />
      <ManageBox>
        <Li>
          <h3>제목</h3>
        </Li>
        <Li>
          <h3>분류</h3>
        </Li>
        {locationFn === 1 ? (
          <VideoLi style={{ height: '440px' }}>
            <h3>동영상</h3>
          </VideoLi>
        ) : locationFn === 2 ? (
          <VideoLi style={{ height: '220px' }}>
            <h3>동영상</h3>
          </VideoLi>
        ) : (
          ''
        )}
        <Li>
          <h3>강사 선택</h3>
        </Li>
        <Li>
          <h3>해설지</h3>
        </Li>
        {locationFn === 2 ? (
          <ContentsLi>
            <h3>강의 내용</h3>
          </ContentsLi>
        ) : (
          ''
        )}
      </ManageBox>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 50px 40px 50px 20px;
  box-sizing: border-box;
`;
const ManageBox = styled.ul`
  background-color: #fff;
  border-radius: 20px;
  li {
    border-bottom: 1px solid var(--color-admin-background);
    &:nth-last-child(1) {
      border-bottom: transparent;
    }
    h3 {
      width: 80px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-button-text);
      border-right: 1px solid var(--color-admin-background);
    }
  }
`;
const Li = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
`;
const VideoLi = styled.li`
  display: flex;
  align-items: center;
`;
const ContentsLi = styled.li`
  height: 220px;
`;

export default AdminPostMange;
