import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const moveToDetail = () => {
    navigate('/mobile/:1');
  };
  return (
    <Box onClick={() => moveToDetail()}>
      <Image src='./public/people.png' alt='교수사진' />
      <Info>
        <Title>
          <p>{props.class}</p>
          <p>{props.instructorName} 교수</p>
        </Title>
        <Desc>
          <Lecture>{props.lectureName}</Lecture>
          <Download href='https://docs.google.com/document/d/1Iqg4xigtQIZxsc6q92BV1AaBHdeywfNIAJwZ1QLgxpA/edit'>
            해설지 다운로드
          </Download>
          <Buttons>
            <Button>총평 다운</Button>
            <Button>기출해설 1</Button>
            <Button>기출해설 2</Button>
          </Buttons>
        </Desc>
      </Info>
    </Box>
  );
};

const Box = styled.div`
  width: 340px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  background-color: white;
  margin: 10px 0;
`;
const Image = styled.img`
  width: 85px;
  height: 110px;
  border-radius: 10px;
  margin: auto 10px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`;
const Title = styled.div`
  display: flex;
  gap: 5px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;
const Lecture = styled.div`
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
`;
const Download = styled.a`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-decoration-line: underline;
  color: #3d59ab;
`;
const Buttons = styled.div`
  display: flex;
  gap: 7px;
`;
const Button = styled.button`
  width: 68px;
  height: 30px;
  background: #ececec;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3d59ab;
  white-space: nowrap;
`;
export default ListBox;
