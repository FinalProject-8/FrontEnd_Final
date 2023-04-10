import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dummyLists } from '../../../../public/dummy/data';
import SlideBox from './slideBox';

type Props = {};

const MainCommentary = (props: Props) => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 2.1,
  };
  return (
    <Wrap>
      <Box>
        <Title>기출해설 상세분석</Title>
        <Go onClick={() => navigate('/mobile/commentary')}>더보기</Go>
      </Box>
      <Slider {...settings}>
        {dummyLists.map((el, idx) => (
          <SlideBox
            key={idx}
            img={el.instructorImg}
            title={el.lectureName}
            subject={el.subject}
            instructor={el.instructorName}
          ></SlideBox>
        ))}
      </Slider>
    </Wrap>
  );
};
const Wrap = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 6px;
  text-align: left;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 14px;
`;
const Go = styled.button`
  font-weight: 500;
  font-size: 12px;
  color: #494949;
`;

export default MainCommentary;
