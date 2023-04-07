import styled from 'styled-components';
import Filters from './Filters';
import CommentaryLists from './lists';
import Mobile from '../../../pages/mobile/mobiletab';
type prop = {};
const subject = ['경찰학', '형사법', '경찰헌법'];
const years = ['2023', '2022', '2021', '2020', '2019'];
const sort = ['추천순', '조회순', '최신순'];
const Commentary = (prop: prop) => {
  return (
    <div>
      <Mobile page={1} />
      <Wrap>
        <FilterTab>
          <Filters value='과목선택' list={subject} />
          <Filters value='년도' list={years} />
        </FilterTab>
        <CommentaryLists />
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
