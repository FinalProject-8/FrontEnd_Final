import React, { useState } from 'react';
import styled from 'styled-components';
type Props = {};

interface Click {
  active: boolean;
}
const MobileMainheader = (props: Props) => {
  return (
    <Container>
      <MenuBar>
        <Menu active={true}>합격특강</Menu>
        <Menu active={false} href='https://kimcodi.kr/p/product/books-list-new'>
          교재
        </Menu>
        <Menu active={false} href='https://kimcodi.kr/p/teacher/teacher-list'>
          교수진
        </Menu>
        <Menu active={false} href='http://campus.kpa.co.kr/andong/index.html'>
          기숙학원
        </Menu>
      </MenuBar>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  /* padding-left: 20px; */
  padding: 0 20px;
  /* border-bottom: 2px solid #ececec; */
`;
const MenuBar = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: -40px;
  padding: 10px 20px;
  gap: 20px;
`;
const Menu = styled.a<Click>`
  font-size: 16px;
  font-weight: 700;

  color: ${(props) => (props.active ? 'black' : '#888888')};
  white-space: nowrap;
`;
export default MobileMainheader;
