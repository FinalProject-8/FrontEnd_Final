// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { adminLocation } from '../../../utils/adminLocation';

function AdminAside() {
  return (
    <Navigation>
      <Link to='/admin'>
        <ButtonBox
          className={adminLocation() === 0 ? 'nav-item active' : 'nav-item'}
        >
          <Icon icon='ph:pencil-simple' />
          <p>합격특강</p>
        </ButtonBox>
      </Link>
      <Link to='/admin/strategy'>
        <ButtonBox
          className={adminLocation() === 1 ? 'nav-item active' : 'nav-item'}
        >
          <Icon icon='ic:outline-ondemand-video' />
          <p>학습전략</p>
        </ButtonBox>
      </Link>
      <Link to='/admin/previous'>
        <ButtonBox
          className={adminLocation() === 2 ? 'nav-item active' : 'nav-item'}
        >
          <Icon icon='material-symbols:menu-book-outline-rounded' />
          <p>기출해설</p>
        </ButtonBox>
      </Link>
      <Link to='/admin'>
        <ButtonBox
          className={adminLocation() === 0 ? 'nav-item active' : 'nav-item'}
        >
          <Icon icon='ic:outline-rate-review' />
          <p>합격후기</p>
        </ButtonBox>
      </Link>
      <Button>
        <ButtonBox>
          <Icon icon='mdi:logout-variant' />
          <p>로그아웃</p>
        </ButtonBox>
      </Button>
    </Navigation>
  );
}

const Navigation = styled.nav`
  display: flex;
  width: 240px;
  flex-direction: column;
  row-gap: 36px;
  padding: 50px 20px;
  box-sizing: border-box;
  .active {
    p,
    svg {
      color: var(--color-button-text);
      font-weight: bold;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-right: 28px;
    font-size: 24px;
    color: var(--color-light-text);
  }
  p {
    font-size: 18px;
    color: var(--color-light-text);
  }
  &:hover {
    p,
    svg {
      color: var(--color-button-text);
    }
  }
`;

const Button = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
`;

export default AdminAside;
