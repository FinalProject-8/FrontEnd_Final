import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AdminPatchCard from './AdminPatchCard';

function AdminPost() {
  const [count, setCount] = useState();
  const use_for = () => {
    const result = [];

    for (let i = 0; i < 9; i++) {
      result.push(<AdminPatchCard />);
    }

    return result;
  };
  return (
    <MainContainer>
      <Category>
        <h3>학습전략 게시물</h3>
        <FlexBox>
          <select>
            <option value='none'>직렬선택</option>
          </select>
          <select>
            <option value='none'>과목선택</option>
          </select>
          <LinkStyle to='/'>게시글 등록</LinkStyle>
        </FlexBox>
      </Category>
      <PatchList>
        <AdminPatchCard />
        {use_for()}
      </PatchList>
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
const Category = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: min-content;
  align-items: center;
  h3 {
    font-size: 24px;
    color: var(--color-button-text);
    font-weight: bold;
  }
  margin-bottom: 20px;
`;
const FlexBox = styled.div`
  display: flex;
  gap: 20px;
  select {
    width: 140px;
    height: 44px;
    border-radius: 10px;
    padding: 0 20px;
    outline: 1px solid var(--color-border);
    box-sizing: border-box;
    cursor: pointer;
    font-size: 16px;
  }
`;
const LinkStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 44px;
  border-radius: 30px;
  border: 1px solid var(--color-border);
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  background-color: var(--color-button-text);
  color: #fff;
`;
const PatchList = styled.ul`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
`;

export default AdminPost;
