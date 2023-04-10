import { HTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getStrategyDetail } from '../../../api/axios';
import { useLocation, useParams } from 'react-router-dom';

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  height: 44px;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #bdbdbd;
`;

const Tab = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 20px;
  border-bottom: 1px solid #bdbdbd;
`;

type TabButtonProps = HTMLAttributes<HTMLButtonElement> & {
  color?: string;
};

const TabButton = styled.button<TabButtonProps>`
  padding: 10px;
  color: ${(props) => (props.color ? props.color : 'black')};
  background: transparent;
`;
const NavButton = styled.button`
  padding: 10px;
  background: transparent;
  font-size: 16px;
  font-weight: bold;
`;
const VideoCaontainer = styled.div`
  width: 100vw;
  transform: translateX(-17px);
  height: 222px;
  background: skyBlue;
`;

const SubjectInfoList = styled.ul``;

type SubjectInfoProps = HTMLAttributes<HTMLLIElement> & {
  align?: 'center' | 'start' | 'end';
};

const SubjectInfo = styled.div<SubjectInfoProps>`
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  justify-content: ${(props) => (props.align ? props.align : 'start')};
`;

const DownloadContainer = styled.div`
  padding: 13px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 24px auto;
`;

const DownloadButton = styled.button`
  padding: 9px 18px;
  border-radius: 10px;
  background: #3988ff;
  opacity: 0.6;
  color: white;
  font-weight: bold;
`;
const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const { index } = useParams();
  console.log(index);
  console.log('this is detailPage');
  useEffect(() => {
    async function fetch() {
      const response = await getStrategyDetail(Number(index));
      console.log(response);
      setData(response);
      setIsLoading(false);
    }

    fetch();
  }, []);

  return (
    <>
      <Header>올라! 학습특강 기출 해설</Header>
      <Tab>
        <TabButton>학습전략</TabButton>
        <TabButton color='#3988FF'>기출해설</TabButton>
      </Tab>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          <VideoCaontainer />
          <NavButton>{'<'} 2022 경찰 공채 2차 시험</NavButton>
          <SubjectInfoList>
            <SubjectInfo>기출 해설 1번</SubjectInfo>
            <SubjectInfo>경찰학 김재규</SubjectInfo>
            <SubjectInfo align='end'>조회수 2333 2023.03.23</SubjectInfo>
          </SubjectInfoList>
          <DownloadContainer>
            <DownloadButton>총평 다운</DownloadButton>
            <DownloadButton>해설지 다운</DownloadButton>
          </DownloadContainer>
        </>
      )}
    </>
  );
};

export default Detail;
