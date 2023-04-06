import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Total from './tab/Total';
import PoliceAdministration from './tab/PoliceAdministration';
import PoliceScience from './tab/PoliceScience';
import CriminalLaw from './tab/CriminalLaw';
import { AiOutlineSearch } from 'react-icons/ai';
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
  const [activeSearch, setactiveSearch] = useState(Boolean);
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
        <Search>
          <AiOutlineSearch
            size='24'
            onClick={() => {
              setactiveSearch(!activeSearch);
            }}
          />
        </Search>
      </TabContainer>
      <SearchContainer active={activeSearch}>
        <Input placeholder='검색어를 입력하세요' />
      </SearchContainer>
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
const Search = styled.div`
  margin-left: 40px;
`;
const SearchContainer = styled.div<TabProps>`
  display: ${(props) => (props.active ? 'block' : 'none')};
  padding: 3px;
  box-sizing: border-box;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 10px 4px 20px;
  gap: 10px;

  width: 322px;
  height: 32px;

  background: #ffffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
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
