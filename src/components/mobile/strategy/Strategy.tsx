import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Total from './tab/Total';
import PoliceAdministration from './tab/PoliceAdministration';
import PoliceScience from './tab/PoliceScience';
import CriminalLaw from './tab/CriminalLaw';

type Props = {};
interface TabProps {
  active: boolean;
}

const tabs = [
  { index: 1, name: '전체', content: <Total /> },
  { index: 2, name: '경찰행정학', content: <PoliceAdministration /> },
  { index: 3, name: '경찰학', content: <PoliceScience /> },
  { index: 4, name: '형사법', content: <CriminalLaw /> },
];
const Strategy = (props: Props) => {
  const [activeTab, setactiveTab] = useState(0);

  return (
    <Wrap>
      <TabContainer>
        {tabs.map((el, index) => (
          <TabButton
            key={el.index}
            active={activeTab === index}
            onClick={() => {
              setactiveTab(index);
            }}
          >
            {el.name}
          </TabButton>
        ))}
      </TabContainer>
      <ContentContainer>{tabs[activeTab].content}</ContentContainer>
    </Wrap>
  );
};
const ContentContainer = styled.div`
  width: 360px;
  margin-top: 10px;
`;
const TabContainer = styled.ul`
  padding-left: 16px;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  text-align: center;
`;
const TabButton = styled.li<TabProps>`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  border: solid 1px black;
  border-radius: 10px;
  /* width: 46px; */
  height: 27px;
  padding: 0 5px;
  background-color: ${(props) => (props.active ? 'black' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
`;
const Wrap = styled.div`
  position: absolute;
  top: -20px;
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 10px 0; */
  /* box-sizing: border-box; */
`;
export default Strategy;
