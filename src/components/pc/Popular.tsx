import React from 'react';
import styled from 'styled-components';
import ContentBox from './ContentBox';
type Props = {};

const Popular = (props: Props) => {
  return (
    <Container>
      <Head>
        <Title>인기강의</Title>
        <Go>더보기</Go>
      </Head>
      <Contents>
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
      </Contents>
    </Container>
  );
};
const Container = styled.div`
  padding: 32px 20px;
`;
const Head = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.p`
  font-weight: 400;
  font-size: 48px;
  line-height: 65px;
  color: rgba(0, 0, 0, 0.8);
`;
const Go = styled.a`
  padding-top: 20px;
  font-weight: 400;
  font-size: 20px;
  color: #888888;
`;
const Contents = styled.div`
  width: 1400px;
  height: 382px;
  display: grid;
  grid-template-columns: 440px 440px 440px;
  grid-template-rows: 122px 122px 122px;
  gap: 40px;
`;
export default Popular;
