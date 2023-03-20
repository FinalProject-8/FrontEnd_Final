import styled from 'styled-components';
import CommentaryHeader from '../../../components/mobile/commentary/header';
import CommentaryLists from '../../../components/mobile/commentary/lists';

type prop = {};
const commentaryIndex = (prop: prop) => {
  return (
    <Wrap>
      <CommentaryHeader />
      <CommentaryLists />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 360px;
  display: flex;
`;
export default commentaryIndex;
