export const dummyLists = [
  {
    class: '경찰',
    subject: 1,
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
    subject: 2,
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
    subject: 3,
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
    subject: 1,
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
    subject: 2,
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
    subject: 2,
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
    subject: 3,
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

export const dummyPSList = [
  {
    divisionName: '경찰',
    subjectName: '경찰학',
    commentaryId: 1,
    instructorName: '김재규',
    commentaryTitle: '2023 경찰학 모의고사 기출 1',
    createdDate: '2023-04-07T14:23:18.625534',
    fileDownloadCount: 2,
    fileName: '2023 경찰학 모의고사 기출.pdf',
    fileId: 1,
    videoUrl: [
      {
        videoName: '총평해설',
        videoUrl: '총평url',
      },
      {
        videoName: '기출해설1',
        videoUrl: '기출해설1 수 url',
      },
      {
        videoName: '기출해설2',
        videoUrl: '기출해설2 수정 url',
      },
    ],
  },
  {
    divisionName: '경찰',
    subjectName: '경찰학',
    commentaryId: 2,
    instructorName: '김재규',
    commentaryTitle: '2023 경찰학 모의고사 기출 2',
    createdDate: '2023-04-07T14:23:18.625534',
    fileDownloadCount: 2,
    fileName: '2023 경찰학 모의고사 기출.pdf',
    fileId: 1,
    videoUrl: [
      {
        videoName: '총평해설',
        videoUrl: '총평url',
      },
      {
        videoName: '기출해설1',
        videoUrl: '기출해설1 수 url',
      },
      {
        videoName: '기출해설2',
        videoUrl: '기출해설2 수정 url',
      },
    ],
  },
  {
    divisionName: '경찰',
    subjectName: '경찰학',
    commentaryId: 3,
    instructorName: '김재규',
    commentaryTitle: '2023 경찰학 모의고사 기출 3',
    createdDate: '2023-04-07T14:23:18.625534',
    fileDownloadCount: 2,
    fileName: '2023 경찰학 모의고사 기출.pdf',
    fileId: 1,
    videoUrl: [
      {
        videoName: '총평해설',
        videoUrl: '총평url',
      },
      {
        videoName: '기출해설1',
        videoUrl: '기출해설1 수 url',
      },
      {
        videoName: '기출해설2',
        videoUrl: '기출해설2 수정 url',
      },
    ],
  },
];

export const dummyCriminalList = [
  {
    divisionName: '경찰',
    subjectName: '형사법',
    commentaryId: 1,
    instructorName: '김재규',
    commentaryTitle: '2023 형사법 모의고사 기출 1',
    createdDate: '2023-04-07T14:23:18.625534',
    fileDownloadCount: 2,
    fileName: '2023 형사법 모의고사 기출.pdf',
    fileId: 1,
    videoUrl: [
      {
        videoName: '총평해설',
        videoUrl: '총평url',
      },
      {
        videoName: '기출해설1',
        videoUrl: '기출해설1 수 url',
      },
      {
        videoName: '기출해설2',
        videoUrl: '기출해설2 수정 url',
      },
    ],
  },
  {
    divisionName: '경찰',
    subjectName: '형사법',
    commentaryId: 2,
    instructorName: '김재규',
    commentaryTitle: '2023 형사법 모의고사 기출 2',
    createdDate: '2023-04-07T14:23:18.625534',
    fileDownloadCount: 2,
    fileName: '2023 형사법 모의고사 기출.pdf',
    fileId: 1,
    videoUrl: [
      {
        videoName: '총평해설',
        videoUrl: '총평url',
      },
      {
        videoName: '기출해설1',
        videoUrl: '기출해설1 수 url',
      },
      {
        videoName: '기출해설2',
        videoUrl: '기출해설2 수정 url',
      },
    ],
  },
  {
    divisionName: '경찰',
    subjectName: '형사법',
    commentaryId: 3,
    instructorName: '김재규',
    commentaryTitle: '2023 형사법 모의고사 기출 3',
    createdDate: '2023-04-07T14:23:18.625534',
    fileDownloadCount: 2,
    fileName: '2023 형사법 모의고사 기출.pdf',
    fileId: 1,
    videoUrl: [
      {
        videoName: '총평해설',
        videoUrl: '총평url',
      },
      {
        videoName: '기출해설1',
        videoUrl: '기출해설1 수 url',
      },
      {
        videoName: '기출해설2',
        videoUrl: '기출해설2 수정 url',
      },
    ],
  },
];

export const dummyPAList = [
  {
    divisionName: '경찰',
    subjectName: '경찰헌법',
    commentaryId: 1,
    instructorName: '김재규',
    commentaryTitle: '2023 경찰헌법 모의고사 기출 1',
    createdDate: '2023-04-07T14:23:18.625534',
    fileDownloadCount: 2,
    fileName: '2023 경찰헌법 모의고사 기출.pdf',
    fileId: 1,
    videoUrl: [
      {
        videoName: '총평해설',
        videoUrl: '총평url',
      },
      {
        videoName: '기출해설1',
        videoUrl: '기출해설1 수 url',
      },
      {
        videoName: '기출해설2',
        videoUrl: '기출해설2 수정 url',
      },
    ],
  },
  {
    divisionName: '경찰',
    subjectName: '경찰헌법',
    commentaryId: 2,
    instructorName: '김재규',
    commentaryTitle: '2023 경찰헌법 모의고사 기출 2',
    createdDate: '2023-04-07T14:23:18.625534',
    fileDownloadCount: 2,
    fileName: '2023 경찰헌법 모의고사 기출.pdf',
    fileId: 1,
    videoUrl: [
      {
        videoName: '총평해설',
        videoUrl: '총평url',
      },
      {
        videoName: '기출해설1',
        videoUrl: '기출해설1 수 url',
      },
      {
        videoName: '기출해설2',
        videoUrl: '기출해설2 수정 url',
      },
    ],
  },
  {
    divisionName: '경찰',
    subjectName: '경찰헌법',
    commentaryId: 3,
    instructorName: '김재규',
    commentaryTitle: '2023 경찰헌법 모의고사 기출 3',
    createdDate: '2023-04-07T14:23:18.625534',
    fileDownloadCount: 2,
    fileName: '2023 경찰헌법 모의고사 기출.pdf',
    fileId: 1,
    videoUrl: [
      {
        videoName: '총평해설',
        videoUrl: '총평url',
      },
      {
        videoName: '기출해설1',
        videoUrl: '기출해설1 수 url',
      },
      {
        videoName: '기출해설2',
        videoUrl: '기출해설2 수정 url',
      },
    ],
  },
];
