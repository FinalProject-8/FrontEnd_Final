import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { dummyTotalData } from '../../../../../public/dummy/data';
import GridBox from './GridBox';
import { getStrategyList, strategyList } from '../../../../api/axios';

type Props = {};

const Total = (props: Props) => {
  const [lists, setlists] = useState<strategyList | undefined>();

  useEffect(() => {
    async function fetchData() {
      const strategyList = await getStrategyList();
      setlists(strategyList);
    }
    fetchData();
  }, []);
  return (
    <Wrap>
      <GridContainer>
        {lists?.data.map((el, idx) => (
          <GridBox
            key={idx}
            strategyId={el.strategyId}
            subjectId={el.subjectId}
            lectureTitle={el.lectureTitle}
            instructorName={el.instructorName}
            content={el.content}
            image={el.image}
            createdDate={el.createdDate}
          ></GridBox>
        ))}
      </GridContainer>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 360px;
`;
const GridContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 150px 150px;
  grid-template-rows: 150px 150px;
`;
export default Total;
