import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getStrategyList, strategyList } from '../../../api/axios';
import SlideBox from './slideBox';

type Props = {};

const MainStrategy = (props: Props) => {
  const [lists, setlists] = useState<strategyList | undefined>();

  useEffect(() => {
    async function fetchData() {
      const strategyList = await getStrategyList();
      setlists(strategyList);
    }
    fetchData();
  }, []);
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
        <Title>학습전략</Title>
        <Go onClick={() => navigate('/mobile/strategy')}>더보기</Go>
      </Box>
      <Slider {...settings}>
        {lists?.data.map((el, idx) => (
          <SlideBox
            key={idx}
            img={el.image}
            title={el.lectureName}
            subject={el.subjectId}
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

export default MainStrategy;
