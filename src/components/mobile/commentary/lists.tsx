import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CommentaryList, getCommentaryList } from '../../../api/axios';
import ListBox from './ListBox';
import { dummyLists } from '../../../../public/dummy/data';
import { useNavigate } from 'react-router-dom';
type Props = {};

const CommentaryLists = (props: Props) => {
  const [lists, setlists] = useState<CommentaryList | undefined>();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const commentaryList = await getCommentaryList();
      setlists(commentaryList);
    }
    fetchData();
  }, []);

  return (
    <List>
      {lists?.data.map((item, idx) => (
        <ListBox
          key={idx}
          commentaryId={item.commentaryId}
          divisionName={item.divisionName}
          subjectName={item.subjectName}
          commentaryTitle={item.commentaryTitle}
          createdDate={item.createdDate}
          fileDownloadCount={item.fileDownloadCount}
          fileName={item.fileName}
          fileId={item.fileId}
          instructorName={item.instructorName}
          videoUrl={item.videoUrl}
          onClick={() => navigate('/mobile/commentary/detail')}
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
