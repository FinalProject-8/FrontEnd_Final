import React, { useState } from 'react';
import styled from 'styled-components';
type Props = {};

const PCheader = (props: Props) => {
  const [selectMenu, setselectMenu] = useState(true);
  return (
    <Wrap>
      <ImgHeader>
        <IMAGE src='public/올라에듀헤더.png' />
      </ImgHeader>
      <Container>
        <MenuBar>
          <Menu>합격특강</Menu>
          <Menu>교수진</Menu>
          <Menu>교재</Menu>
          <Menu>수강후기</Menu>
          <Menu>기숙학원</Menu>
        </MenuBar>
      </Container>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 100vw;
  height: 144px;
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  overflow: hidden;
`;
const ImgHeader = styled.div`
  height: 84px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IMAGE = styled.img`
  width: 203px;
  height: 45px;
`;
const Container = styled.div`
  height: 60px;
  border-bottom: 2px solid #ececec;
`;
const MenuBar = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 16px 20px;
  float: left;
  gap: 40px;
`;
const Menu = styled.div`
  color: #888888;
  white-space: nowrap;
`;
export default PCheader;
