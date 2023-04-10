import React, { useState, useEffect } from 'react';
import ListBox from './ListBox';
import styled from 'styled-components';
import { dummyPSList } from '../../../../public/dummy/data';
import { useNavigate } from 'react-router-dom';
import { getCommentarySearchSubject, strategyList } from '../../../api/axios';

type Props = {};

const PoliceScienceList = (props: Props) => {
  const [lists, setlists] = useState<strategyList | undefined>();
  useEffect(() => {
    async function fetchData() {
      const strategyList = await getCommentarySearchSubject('경찰학');
      setlists(strategyList);
    }
    fetchData();
  }, []);
  const navigate = useNavigate();
  return (
    <List>
      {dummyPSList?.map((item, idx) => (
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
          onClick={() => navigate('/mobile/detail')}
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
export default PoliceScienceList;
