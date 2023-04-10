import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dummyLists } from '../../../public/dummy/data';
import SlideBox from './SlideBox';

type Props = {};

const Commentary = (props: Props) => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.1,
    swipeToSlide: true,
  };
  return (
    <Wrap>
      <Box>
        <Title>기출해설</Title>
        <Go onClick={() => navigate('/pc')}>더보기</Go>
      </Box>
      <Slider {...settings}>
        {dummyLists.map((el, idx) => (
          <SlideBox
            key={idx}
            img={el.instructorImg}
            title={el.lectureName}
            subject={el.subject}
            instructor={el.instructorName}
            page={true}
          ></SlideBox>
        ))}
      </Slider>
    </Wrap>
  );
};
const Wrap = styled.div`
  margin-top: 20px;
  padding: 32px 20px;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 6px;
  text-align: left;
`;
const Title = styled.p`
  font-weight: 400;
  font-size: 48px;
  line-height: 65px;
  color: rgba(0, 0, 0, 0.8);
`;
const Go = styled.button`
  padding-top: 20px;
  font-weight: 400;
  font-size: 20px;
  color: #888888;
`;

export default Commentary;
