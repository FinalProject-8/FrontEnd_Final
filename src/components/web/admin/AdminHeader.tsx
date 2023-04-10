import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

function AdminHeader() {
  return (
    <HeaderWrap>
      <h2>올라에듀 합격특강 관리자</h2>
      <InputBox>
        <input type='search' />
        <Icon icon='material-symbols:search-rounded' />
      </InputBox>
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84px;
  background-color: #fff;
  padding: 0 23px;
  box-sizing: border-box;
  h2 {
    font-size: 18px;
    font-weight: bold;
    color: var(--color-button-text);
  }
`;

const InputBox = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  width: 516px;
  height: 50px;
  box-shadow: 1.60248px 1.60248px 6.40994px rgba(0, 0, 0, 0.15);
  border-radius: 32px;
  padding-left: 32px;
  input {
    border: transparent;
    width: 90%;
    height: 100%;
    font-size: 18px;
    color: var(--color-button-text);
    &:focus {
      outline: none;
    }
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
  }
  svg {
    font-size: 28px;
    color: var(--color-button-text);
    cursor: pointer;
  }
`;

export default AdminHeader;
