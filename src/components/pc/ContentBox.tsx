import React from 'react';
import styled from 'styled-components';
type Props = {};

const ContentBox = (props: Props) => {
  return (
    <Box>
      <Thumbnail src='../public/학습전략.png' />
      <ID>1</ID>
      <Title>15분만에 끝내는 경찰 형사법 최신판례</Title>
    </Box>
  );
};
const Box = styled.div`
  display: flex;
  width: 440px;
  height: 122px;
  justify-content: center;
  align-items: center;
`;
const Thumbnail = styled.img``;
const ID = styled.p`
  padding: 50px 15px;
`;
const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 34px 54px 30px 10px;
  border-bottom: 1px solid #ececec;
`;
export default ContentBox;
