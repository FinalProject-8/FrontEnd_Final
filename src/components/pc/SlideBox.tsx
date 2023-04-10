import React from 'react';
import styled from 'styled-components';
import { CheckSubject } from '../../../public/dummy/data';
type Props = {
  img: string;
  title: string;
  subject: number;
  instructor: string;
  page: boolean;
};

const SlideBox = (props: Props) => {
  return (
    <Box>
      <IMAGE
        src={props.page ? 'public/섬1네일 1.png' : 'public/인기강의.png'}
        alt='사진'
      />
      <INFO>
        <p>{CheckSubject(props.subject)}</p>
        <p>{props.instructor}</p>
        <p> 교수님</p>
      </INFO>
      <TITLE>{props.title}</TITLE>
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

  width: 320px;
  height: 272px;
`;
const IMAGE = styled.img`
  width: 320px;
  height: 180px;
  border-radius: 4px;
`;
const TITLE = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.8);
`;
const INFO = styled.div`
  color: rgba(61, 89, 171, 0.8);
  font-weight: 700;
  font-size: 20px;
  display: flex;
  gap: 3px;
`;
export default SlideBox;
