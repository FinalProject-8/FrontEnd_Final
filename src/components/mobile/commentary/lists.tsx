import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DataSet, getCommentaryList } from '../../../api/axios';
import ListBox from './ListBox';
type Props = {};

const dummyLists = [
  {
    class: '경찰',
    subject: '경찰학',
    instructorImg: '이미지파일링크',
    instructorName: '김재규',
    lectureName: '2022년 경찰공채 2차시험',
    commentaryFile: 'pdf링크',
    downloadCount: 3,
    overallVideo: '영상링크',
    commentaryVideo1: '영상링크',
    commentaryVideo2: '영상링크',
  },
  {
    class: '경찰',
    subject: '경찰학',
    instructorImg: '이미지파일링크',
    instructorName: '김재규',
    lectureName: '2022년 경찰공채 2차시험',
    commentaryFile: 'pdf링크',
    downloadCount: 3,
    overallVideo: '영상링크',
    commentaryVideo1: '영상링크',
    commentaryVideo2: '영상링크',
  },
  {
    class: '경찰',
    subject: '경찰학',
    instructorImg: '이미지파일링크',
    instructorName: '김재규',
    lectureName: '2022년 경찰공채 2차시험',
    commentaryFile: 'pdf링크',
    downloadCount: 3,
    overallVideo: '영상링크',
    commentaryVideo1: '영상링크',
    commentaryVideo2: '영상링크',
  },
  {
    class: '경찰',
    subject: '경찰학',
    instructorImg: '이미지파일링크',
    instructorName: '김재규',
    lectureName: '2022년 경찰공채 2차시험',
    commentaryFile: 'pdf링크',
    downloadCount: 3,
    overallVideo: '영상링크',
    commentaryVideo1: '영상링크',
    commentaryVideo2: '영상링크',
  },
  {
    class: '경찰',
    subject: '경찰학',
    instructorImg: '이미지파일링크',
    instructorName: '김재규',
    lectureName: '2022년 경찰공채 2차시험',
    commentaryFile: 'pdf링크',
    downloadCount: 3,
    overallVideo: '영상링크',
    commentaryVideo1: '영상링크',
    commentaryVideo2: '영상링크',
  },
  {
    class: '경찰',
    subject: '경찰학',
    instructorImg: '이미지파일링크',
    instructorName: '김재규',
    lectureName: '2022년 경찰공채 2차시험',
    commentaryFile: 'pdf링크',
    downloadCount: 3,
    overallVideo: '영상링크',
    commentaryVideo1: '영상링크',
    commentaryVideo2: '영상링크',
  },
  {
    class: '경찰',
    subject: '경찰학',
    instructorImg: '이미지파일링크',
    instructorName: '김재규',
    lectureName: '2022년 경찰공채 2차시험',
    commentaryFile: 'pdf링크',
    downloadCount: 3,
    overallVideo: '영상링크',
    commentaryVideo1: '영상링크',
    commentaryVideo2: '영상링크',
  },
];
const CommentaryLists = (props: Props) => {
  const [lists, setlists] = useState<Array<DataSet>>([]);

  useEffect(() => {
    async function fetchData() {
      const commentaryList = await getCommentaryList();
      setlists(commentaryList);
    }
    fetchData();
  }, []);
  console.log(lists);
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
