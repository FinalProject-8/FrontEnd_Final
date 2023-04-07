import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {};

const MainStrategy = (props: Props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 100,
    slidesToShow: 1.5,
  };
  return (
    <div>
      <Box>
        <Title>인기강의</Title>
        <Go>더보기</Go>
      </Box>
      <Slider {...settings}>
        <Slide src='public/인기강의.png' />
        <Slide src='public/인기강의.png' />
        <Slide src='public/인기강의.png' />
      </Slider>
    </div>
  );
};
const Box = styled.div`
  padding: 16px;
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
const Slide = styled.img`
  max-width: 208px;
  height: 117px;
`;
export default MainStrategy;
