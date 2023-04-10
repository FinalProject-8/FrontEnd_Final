import { useState } from 'react';
import styled from 'styled-components';
import Filters from './Filters';
import CommentaryLists from './lists';
import Mobile from '../../../pages/mobile/mobiletab';
import CriminalList from './CriminalList';
import PoliceScienceList from './PSList';
import PoliceAdministrationList from './PAList';
type prop = {};
const subject = ['경찰학', '형사법', '경찰헌법', '전체보기'];
const subjectTabs = [
  <CommentaryLists />,
  <PoliceScienceList />,
  <CriminalList />,
  <PoliceAdministrationList />,
];
const years = ['2023', '2022', '2021'];
const Commentary = (prop: prop) => {
  const [subjectClick, setsubjectClick] = useState(String);
  const [checkSubjectClick, setcheckSubjectClick] = useState(0);
  const handleData = (element: string) => {
    setsubjectClick(element);
    if (element === '전체보기') setcheckSubjectClick(0);
    else if (element === '경찰학') setcheckSubjectClick(1);
    else if (element === '형사법') setcheckSubjectClick(2);
    else if (element === '경찰헌법') setcheckSubjectClick(3);
    else if (element === '2023') setcheckSubjectClick(0);
    else if (element === '2022') setcheckSubjectClick(0);
    else if (element === '2021') setcheckSubjectClick(0);
  };
  return (
    <div>
      <Mobile page={1} />
      <Wrap>
        <FilterTab>
          <Filters value='과목선택' list={subject} setdata={handleData} />
          <Filters value='년도' list={years} setdata={handleData} />
        </FilterTab>
        {subjectTabs[checkSubjectClick]}
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
  background-color: #f5f5f5;

  position: absolute;
  top: 120px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  padding: 24px 0;
  box-sizing: border-box;
`;
const FilterTab = styled.div`
  background: white;
  z-index: 0;
  box-sizing: border-box;
  padding-left: 20px;
  position: fixed;
  top: 86px;
  width: 360px;
  height: 43px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  z-index: 100;
`;

export default Commentary;
