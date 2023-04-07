import React from 'react';
import styled from 'styled-components';
import MobileMainheader from '../../components/mobile/main/tab';
import Advertise from '../../components/mobile/main/advertise';
import Popular from '../../components/mobile/main/popular';
type Props = {};

const Mobile = (props: Props) => {
  return (
    <Wrap>
      <Header>
        <Image src='public/올라에듀헤더.png' />
        <MobileMainheader />
      </Header>
      <Advertise />
      <Popular />
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  padding: 9px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 100px;
  height: 22.17px;
`;
export default Mobile;
