import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import MobileHeader from '../../components/mobile/header';
import CommentaryLists from '../../components/mobile/commentary/Lists';
import Strategy from '../../components/mobile/strategy/Strategy';
type Props = {};
const tabsList = ['학습전략', '기출해설'];
const Mobile = (props: Props) => {
  const [activeTab, setactiveTab] = useState(0);
  return (
    <div>
      <Headers>
        <MobileHeader />
        <Tabs>
          {tabsList.map((tab, i) => {
            return (
              <Tab key={i} onClick={() => setactiveTab(i)}>
                {tab}
              </Tab>
            );
          })}
        </Tabs>
      </Headers>

      <Body>{[<Strategy />, <CommentaryLists />][activeTab]}</Body>
    </div>
  );
};
const Headers = styled.div`
  width: 360px;
  position: fixed;
  top: 0;
`;
const Tabs = styled.div`
  width: 360px;
  height: 42px;
  background-color: white;
  display: flex;
  gap: 10px;
  /* margin-left: 20px; */
  padding-left: 20px;
  padding-top: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #b3a7a7;
`;
const Tab = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
`;
const Body = styled.div`
  position: relative;
  width: 360px;
`;
export default Mobile;
