import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import MobileHeader from '../../components/mobile/header';
import CommentaryIndex from '../../components/mobile/commentary/CommentaryIndex';
import Strategy from '../../components/mobile/strategy/Strategy';
import { useNavigate } from 'react-router-dom';
type Props = {
  page: number;
};

interface TabProps {
  active: boolean;
}
const Mobile = (props: Props) => {
  const navigate = useNavigate();
  const [activeTab, setactiveTab] = useState(props.page);
  return (
    <div>
      <Headers>
        <MobileHeader />
        <Tabs>
          <Tab
            active={activeTab === 0}
            onClick={() => {
              setactiveTab(0), navigate('/mobile/strategy');
            }}
          >
            학습전략
          </Tab>
          <Tab
            active={activeTab === 1}
            onClick={() => {
              setactiveTab(1), navigate('/mobile/commentary');
            }}
          >
            기출해설
          </Tab>
        </Tabs>
      </Headers>
    </div>
  );
};
const Headers = styled.div`
  max-width: 360px;
  position: fixed;
  top: 0;
  z-index: 100;
  background: white;
`;
const Tabs = styled.div`
  max-width: 360px;
  height: 42px;
  background-color: white;
  display: flex;
  gap: 10px;
  padding-left: 20px;
  padding-top: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdcdc;
`;
const Tab = styled.div<TabProps>`
  border-bottom: ${(props) => (props.active ? '3px solid #3D59AB' : '')};
  font-weight: 700;
  font-size: 16px;
  color: ${(props) => (props.active ? '#3D59AB' : '#888888')};
`;

export default Mobile;
