export const dummyLists = [
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

export const CheckSubject = (subject: number) => {
  if (subject === 1) return '경찰행정학';
  else if (subject === 2) return '형사법';
  else return '경찰학';
};

export const ChangeDate = (date: string) => {
  return date.replaceAll('-', '.').slice(0, 10);
};
