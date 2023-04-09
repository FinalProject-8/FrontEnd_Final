import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCommentaryImg, videoUrl } from '../../../api/axios';
type Props = {
  divisionName: string;
  subjectName: string;
  commentaryId: number;
  instructorName: string;
  commentaryTitle: string;
  createdDate: string;
  fileDownloadCount: number;
  fileName: string;
  fileId: number;
  videoUrl: Array<videoUrl>;
};
interface Btn {
  onClick(): void;
}
const downloadFile = (url: string) => {
  const fileUrl = url;

  // a 태그를 만들어서 클릭 이벤트를 호출하여 파일 다운로드
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'file.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const ListBox = (props: Props) => {
  const [img, setimg] = useState('');
  useEffect(() => {
    async function fetchData() {
      const instructorImg = await getCommentaryImg(props.commentaryId);
      setimg(instructorImg);
    }
    fetchData();
  }, []);
  const navigate = useNavigate();
  const moveToDetail = () => {
    navigate('/mobile/detail');
  };
  return (
    <Box onClick={() => moveToDetail()}>
      <Image src='../public/교수 사진.png' alt='교수사진' />
      <Info>
        <Title>
          <p>{props.subjectName}</p>
          <p>{props.instructorName} 교수</p>
        </Title>
        <Desc>
          <Lecture>{props.commentaryTitle}</Lecture>
          <Download href={props.fileName}>해설지 다운로드</Download>
          <Buttons>
            {props.videoUrl.map((el, idx) => (
              <Button key={idx} onClick={() => downloadFile(el.videoUrl)}>
                {el.videoName}
              </Button>
            ))}
          </Buttons>
        </Desc>
      </Info>
    </Box>
  );
};

const Box = styled.div`
  width: 340px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  background-color: white;
  margin: 10px 0;
`;
const Image = styled.img`
  width: 85px;
  height: 110px;
  border-radius: 10px;
  margin: auto 10px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`;
const Title = styled.div`
  display: flex;
  gap: 5px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;
const Lecture = styled.div`
  font-family: Noto Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
`;
const Download = styled.a`
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-decoration-line: underline;
  color: #3d59ab;
`;
const Buttons = styled.div`
  display: flex;
  gap: 7px;
`;
const Button = styled.button<Btn>`
  width: 68px;
  height: 30px;
  background: #ececec;
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3d59ab;
  white-space: nowrap;
`;
export default ListBox;
