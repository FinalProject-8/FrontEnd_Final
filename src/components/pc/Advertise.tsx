import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
type Props = {};

const Advertise = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
  };
  return (
    <div>
      <Slider {...settings}>
        <Slide src='../public/상단 베너바.png' />
        <Slide src='../public/상단 베너바.png' />
        <Slide src='../public/상단 베너바.png' />
      </Slider>
    </div>
  );
};
const Slide = styled.img`
  width: 1440px;
  height: 518px;
`;
export default Advertise;
