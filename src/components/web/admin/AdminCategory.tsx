import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { adminLocation } from '../../../utils/adminLocation';
import { useLocation } from 'react-router-dom';

function AdminCategory() {
  const [title, setTitle] = useState('');
  const adminLocationFn = adminLocation();
  const location = useLocation().pathname;

  useEffect(() => {
    if (adminLocationFn === 1) {
      setTitle('학습전략');
    } else if (adminLocationFn === 2) {
      setTitle('기출해설');
    } else {
      setTitle('');
    }
  }, [location]);
  return (
    <Category>
      <h3>{title} 게시물</h3>
      <FlexBox>
        {location.includes('manage') ? (
          <>
            <LinkStyle to='manage/id'>게시글 등록</LinkStyle>
          </>
        ) : (
          <>
            <select>
              <option value='none'>직렬선택</option>
            </select>
            <select>
              <option value='none'>과목선택</option>
            </select>{' '}
          </>
        )}
        <LinkStyle to='manage/id'>게시글 등록</LinkStyle>
      </FlexBox>
    </Category>
  );
}
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
  &:nth-child(1) {
    background-color: var(--color-grey);
  }
`;

export default AdminCategory;
