import styled from 'styled-components';
import CommentaryLists from './Lists';
type prop = {};
const commentaryIndex = (prop: prop) => {
  return (
    <Wrap>
      <CommentaryLists />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 360px;
  display: flex;
  background-color: #f5f5f5;
  justify-content: center;
  padding: 10px 0;
  box-sizing: border-box;
`;
export default commentaryIndex;
