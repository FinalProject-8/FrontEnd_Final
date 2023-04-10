import styled from 'styled-components';
import { ChangeDate, CheckSubject } from '../../../../../public/dummy/data';
type Props = {
  strategyId: number;
  subjectId: number;
  lectureName: string;
  instructorName: string;
  content: string;
  image: string;
  createdDate: string;
};

const GridBox = (props: Props) => {
  return (
    <Box>
      <Image src='/학습전략.png' alt='학습전략' />
      <Info>
        <Subject>{CheckSubject(props.subjectId)}</Subject>
        <Instructor>{props.instructorName} 교수님</Instructor>
      </Info>
      <Title>
        {props.lectureName} | {props.content}
      </Title>
      <SubInfo>
        <Date>{ChangeDate(props.createdDate)}</Date>
      </SubInfo>
    </Box>
  );
};
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 182px;
  gap: 3px;
`;
const Image = styled.img`
  width: 160px;
  height: 90px;
  border-radius: 4px;
`;
const Info = styled.div`
  display: flex;
  gap: 3px;
  padding-left: 5px;
`;
const Subject = styled.p`
  color: #3d59ab;
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
`;
const Instructor = styled.p`
  color: #3d59ab;
  font-family: Noto Sans;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
`;
const Title = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-align: left;
  padding-left: 5px;
`;
const SubInfo = styled.div``;
const Date = styled.p`
  font-weight: 400;
  font-size: 10px;
  color: #888888;
  text-align: left;
  padding-left: 5px;
`;
export default GridBox;
