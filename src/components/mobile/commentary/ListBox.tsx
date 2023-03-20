import React from 'react';
import styled from 'styled-components';
type Props = {
  class: string;
  subject: string;
  instructorImg: string;
  instructorName: string;
  lectureName: string;
  commentaryFile: string;
  downloadCount: number;
  overallVideo: string;
  commentaryVideo1: string;
  commentaryVideo2: string;
};

const ListBox = (props: Props) => {
  return (
    <Box>
      <Image src='./public/people.png' alt='교수사진' />
      <div>
        <Title>
          <p>{props.class}</p>
          <p>{props.instructorName} 교수</p>
        </Title>
        <Lecture>{props.lectureName}</Lecture>
        <Download href='https://docs.google.com/document/d/1Iqg4xigtQIZxsc6q92BV1AaBHdeywfNIAJwZ1QLgxpA/edit'>
          해설지 다운로드
        </Download>
      </div>
    </Box>
  );
};

const Box = styled.div`
  width: 340px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 85px;
  height: 110px;
  border-radius: 10px;
`;
const Title = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;
const Lecture = styled.div`
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;
const Download = styled.a`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
`;
export default ListBox;
