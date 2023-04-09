import React from 'react';
import styled from 'styled-components';
import { CheckSubject } from '../../../../public/dummy/data';
type Props = {
  img: string;
  title: string;
  subject: number;
  instructor: string;
};

const SlideBox = (props: Props) => {
  return (
    <Box>
      <IMAGE src='public/섬1네일 1.png' alt='사진' />
      <TITLE>{props.title}</TITLE>
      <INFO>
        <p>{CheckSubject(props.subject)}</p>
        <p>{props.instructor}</p>
        <p> 교수님</p>
      </INFO>
    </Box>
  );
};
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 2px 0 4px;
  gap: 8px;

  width: 160px;
  height: 141px;
`;
const IMAGE = styled.img`
  width: 160px;
  height: 90px;
  border-radius: 4px;
`;
const TITLE = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
`;
const INFO = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #888888;
  display: flex;
  gap: 3px;
`;
export default SlideBox;
