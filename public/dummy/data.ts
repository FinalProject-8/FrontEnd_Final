export const dummyTotalData = [
  {
    strategyId: 1,
    subjectId: 3,
    lectureTitle: '2022 경찰 공채 합격전략',
    instructorName: '김재규',
    content: '모두가 경찰에 합격하기 바라며..',
    image: 'public/학습전략.png',
    createdDate: '2023-03-10',
  },
  {
    strategyId: 2,
    subjectId: 2,
    lectureTitle: '2022 경찰 공채 합격전략',
    instructorName: '김재규',
    content: '모두가 경찰에 합격하기 바라며..',
    image: 'public/학습전략.png',
    createdDate: '2023-03-10',
  },
  {
    strategyId: 3,
    subjectId: 1,
    lectureTitle: '2022 경찰 공채 합격전략',
    instructorName: '김재규',
    content: '모두가 경찰에 합격하기 바라며..',
    image: 'public/학습전략.png',
    createdDate: '2023-03-10',
  },
  {
    strategyId: 1,
    subjectId: 2,
    lectureTitle: '2022 경찰 공채 합격전략',
    instructorName: '김재규',
    content: '모두가 경찰에 합격하기 바라며..',
    image: 'public/학습전략.png',
    createdDate: '2023-03-10',
  },
  {
    strategyId: 2,
    subjectId: 2,
    lectureTitle: '2022 경찰 공채 합격전략',
    instructorName: '김재규',
    content: '모두가 경찰에 합격하기 바라며..',
    image: 'public/학습전략.png',
    createdDate: '2023-03-10',
  },
  {
    strategyId: 3,
    subjectId: 3,
    lectureTitle: '2022 경찰 공채 합격전략',
    instructorName: '김재규',
    content: '모두가 경찰에 합격하기 바라며..',
    image: 'public/학습전략.png',
    createdDate: '2023-03-10',
  },
  {
    strategyId: 1,
    subjectId: 1,
    lectureTitle: '2022 경찰 공채 합격전략',
    instructorName: '김재규',
    content: '모두가 경찰에 합격하기 바라며..',
    image: 'public/학습전략.png',
    createdDate: '2023-03-10',
  },
  {
    strategyId: 1,
    subjectId: 1,
    lectureTitle: '2022 경찰 공채 합격전략',
    instructorName: '김재규',
    content: '모두가 경찰에 합격하기 바라며..',
    image: 'public/학습전략.png',
    createdDate: '2023-03-10',
  },
  {
    strategyId: 1,
    subjectId: 2,
    lectureTitle: '2022 경찰 공채 합격전략',
    instructorName: '김재규',
    content: '모두가 경찰에 합격하기 바라며..',
    image: 'public/학습전략.png',
    createdDate: '2023-03-10',
  },
  {
    strategyId: 2,
    subjectId: 2,
    lectureTitle: '2022 경찰 공채 합격전략',
    instructorName: '김재규',
    content: '모두가 경찰에 합격하기 바라며..',
    image: 'public/학습전략.png',
    createdDate: '2023-03-10',
  },
  {
    strategyId: 3,
    subjectId: 2,
    lectureTitle: '2022 경찰 공채 합격전략',
    instructorName: '김재규',
    content: '모두가 경찰에 합격하기 바라며..',
    image: 'public/학습전략.png',
    createdDate: '2023-03-10',
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
