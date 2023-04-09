import React from 'react';
import styled from 'styled-components';
import MobileMainheader from '../../components/mobile/main/tab';
import Advertise from '../../components/mobile/main/advertise';
import Popular from '../../components/mobile/main/popular';
import MainStrategy from '../../components/mobile/main/strategy';
import MainCommentary from '../../components/mobile/main/commentary';
import Instructor from '../../components/mobile/main/instructor';

type Props = {};

const Mobile = (props: Props) => {
  return (
    <Wrap>
      <Header>
        <Image src='/올라에듀헤더.png' />
        <MobileMainheader />
      </Header>
      <Advertise />
      <Popular />
      <MainStrategy />
      <MainCommentary />
      <Test src='../public/모의고사.png' />
      <Instructor />
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  overflow-x: hidden;
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
const Test = styled.img``;
export default Mobile;
