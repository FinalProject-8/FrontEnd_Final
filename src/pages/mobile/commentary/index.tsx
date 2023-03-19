import styled from 'styled-components';
import CommentaryHeader from '../../../components/mobile/commentary/header';

type prop = {};
const commentaryIndex = (prop: prop) => {
  return (
    <Wrap>
      <CommentaryHeader />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 360px;
  display: flex;
`;
export default commentaryIndex;
