import React from 'react';
import ListBox from './ListBox';
import styled from 'styled-components';
import { dummyCriminalList } from '../../../../public/dummy/data';
import { useNavigate } from 'react-router-dom';

type Props = {};

const CriminalList = (props: Props) => {
  const navigate = useNavigate();

  return (
    <List>
      {dummyCriminalList?.map((item, idx) => (
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
export default CriminalList;
