import React, { useState } from 'react';
import styled from 'styled-components';
type Props = {};

interface Click {
  active: boolean;
}
const MobileMainheader = (props: Props) => {
  const [selectMenu, setselectMenu] = useState(true);
  return (
    <Container>
      <MenuBar>
        <Menu active={true}>합격특강</Menu>
        <Menu active={false}>교재</Menu>
        <Menu active={false}>수강후기</Menu>
        <Menu active={false}>기숙학원</Menu>
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
const Menu = styled.div<Click>`
  font-size: 16px;
  font-weight: 700;

  color: ${(props) => (props.active ? 'black' : '#888888')};
  white-space: nowrap;
`;
export default MobileMainheader;
