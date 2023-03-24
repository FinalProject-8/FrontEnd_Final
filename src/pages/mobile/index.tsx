import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import MobileHeader from '../../components/mobile/header';
import CommentaryLists from '../../components/mobile/commentary/Lists';
import Strategy from '../../components/mobile/strategy/Strategy';
type Props = {};
interface TabProps {
  active: boolean;
}
const Mobile = (props: Props) => {
  const [activeTab, setactiveTab] = useState(0);
  return (
    <div>
      <Headers>
        <MobileHeader />
        <Tabs>
          <Tab active={activeTab === 0} onClick={() => setactiveTab(0)}>
            학습전략
          </Tab>
          <Tab active={activeTab === 1} onClick={() => setactiveTab(1)}>
            기출해설
          </Tab>
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
  padding-left: 20px;
  padding-top: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #b3a7a7;
`;
const Tab = styled.div<TabProps>`
  border-bottom: ${(props) => (props.active ? '3px solid #4D4D4D' : '')};
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => (props.active ? '#4D4D4D' : '#8B8B8B')};
`;

const Body = styled.div`
  position: relative;
  width: 360px;
`;
export default Mobile;
