import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  console.log(lists);

  return (
    <Wrap>
      <GridContainer>
        {/* lists?.data.map */}
        {lists?.data.map((el, idx) => (
          <GridBox
            key={idx}
            strategyId={el.strategyId}
            subjectId={el.subjectId}
            lectureName={el.lectureName}
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
  padding: 0 10px;
  margin-top: 20px;
`;
export default Total;
