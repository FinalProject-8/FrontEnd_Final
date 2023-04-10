import React from 'react';
import PCheader from '../../components/pc/header';
import styled from 'styled-components';
import '../../style/normalPage.css';
import Advertise from '../../components/pc/Advertise';
import Popular from '../../components/pc/Popular';
import Commentary from '../../components/pc/Commentary';
import Strategy from '../../components/pc/Strategy';
import Slider from 'react-slick';
type Props = {};

const PC = (props: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4.1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };
  return (
    <Wrap>
      <PCheader />
      <PCtabs>
        <Tab>학습전략</Tab>
        <Tab>기출해설</Tab>
      </PCtabs>
      <Advertise />
      <Popular />
      <Commentary />
      <Strategy />
      <ExamImage src='public/큰 홍보 프레임 2.png' />
      <Exams>
        <Exam>
          <Thumbnail src='public/제목 없음-1 1.png' />
          <Title>2023 10월 2일 경찰학 모의고사 전체해설1</Title>
        </Exam>
        <Exam>
          <Thumbnail src='public/제목 없음-1 1.png' />
          <Title>2023 10월 2일 경찰학 모의고사 전체해설2</Title>
        </Exam>
        <Exam>
          <Thumbnail src='public/제목 없음-1 1.png' />
          <Title>2023 10월 2일 경찰학 모의고사 전체해설3</Title>
        </Exam>
      </Exams>
      <Slider {...settings}>
        <Box src='public/강사카드.png' />
        <Box src='public/강사카드.png' />
        <Box src='public/강사카드.png' />
        <Box src='public/강사카드.png' />
        <Box src='public/강사카드.png' />
        <Box src='public/강사카드.png' />
      </Slider>
    </Wrap>
  );
};
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const PCtabs = styled.div`
  display: flex;
  gap: 40px;
  padding: 40px;
  border-bottom: 2px solid #ececec;
`;
const Tab = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #888888;
`;
const ExamImage = styled.img`
  width: 1400px;
  height: 787px;
  border-radius: 20px;
  margin: 0 auto;
`;
const Exams = styled.div`
  display: flex;
  gap: 52px;
  padding: 20px;
  margin: 0 auto 50px;
`;
const Exam = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
const Thumbnail = styled.img`
  width: 432px;
  height: 243px;
  border-radius: 10px;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.8);
`;
const Box = styled.img`
  padding: 0 2px 0 4px;
  gap: 8px;
  width: 315px;
  height: 560px;
  border-radius: 16px;
`;
export default PC;
