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
    speed: 100,
  };
  return (
    <div>
      <Slider {...settings}>
        <Slide src='public/교수님 칵드.png' />
        <Slide src='public/교수님 칵드2.png' />
        <Slide src='public/교수님 칵드3.png' />
      </Slider>
    </div>
  );
};
const Slide = styled.img`
  width: 360px;
  height: 360px;
`;
export default Advertise;
