import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
type Props = {};

const Instructor = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    cssEase: 'linear',
    centerMode: true, // 중앙 정렬
  };
  return (
    <StyledSlider {...settings}>
      <Img src='/교사카드.png' />
      <Img src='/교사카드.png' />
      <Img src='/교사카드.png' />
      <Img src='/교사카드.png' />
      <Img src='/교사카드.png' />
      <Img src='/교사카드.png' />
    </StyledSlider>
  );
};
const Img = styled.img`
  width: 312px;
  height: 416px;
  border-radius: 8px;
  padding: 20px 0;
`;
const StyledSlider = styled(Slider)`
  .slick-slide {
    box-sizing: border-box;
    padding: 0 4px;
  }
  .slick-slide div {
    outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
  }
`;
export default Instructor;
