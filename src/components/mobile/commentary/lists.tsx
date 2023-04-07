import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DataSet, getCommentaryList } from '../../../api/axios';
import ListBox from './ListBox';
import { dummyLists } from '../../../../public/dummy/data';
type Props = {};

const CommentaryLists = (props: Props) => {
  // const [lists, setlists] = useState<Array<DataSet>>([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const commentaryList = await getCommentaryList();
  //     setlists(commentaryList);
  //   }
  //   fetchData();
  // }, []);
  return (
    <List>
      {dummyLists.map((item, index) => (
        <ListBox
          key={index}
          class={item.class}
          subject={item.subject}
          instructorImg={item.instructorImg}
          lectureName={item.lectureName}
          commentaryFile={item.commentaryFile}
          downloadCount={item.downloadCount}
          overallVideo={item.overallVideo}
          commentaryVideo1={item.commentaryVideo1}
          commentaryVideo2={item.commentaryVideo2}
          instructorName={item.instructorName}
        />
      ))}
    </List>
  );
};
const List = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export default CommentaryLists;
