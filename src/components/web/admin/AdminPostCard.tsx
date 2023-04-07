import React from 'react';
import styled from 'styled-components';

function AdminPostCard() {
  return (
    <>
      <ListCard>
        <p>번호</p>
        <p>제목</p>
        <p>직렬</p>
        <p>과목</p>
        <p>담당교수</p>
        <p>다운로드 수</p>
        <p>조회수</p>
        <p>날짜</p>
      </ListCard>
    </>
  );
}
const ListCard = styled.li`
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  border-bottom: 1px solid var(--color-admin-background);
  box-sizing: border-box;
  & > p {
    width: calc((100% - 756px) / 6);
    text-align: center;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    color: var(--color-button-text);
  }
  & > p:nth-child(1) {
    width: 50px;
  }
  & > p:nth-child(2) {
    width: 436px;
    text-align: left;
  }
`;
export default AdminPostCard;
