import {HTMLAttributes} from 'react';
import styled from "styled-components";

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  height: 44px;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  aline-itmes: center;
  justify-content: center;
  border-bottom: 2px solid #BDBDBD;
`;

const Tab = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  aline-itmes: center;
  justify-content: start;
  padding: 0 20px;
  border-bottom: 1px solid #BDBDBD;
`

type TabButtonProps = HTMLAttributes<HTMLButtonElement> & {
  color?: string;
}

const TabButton = styled.button<TabButtonProps>`
  padding: 10px;
  color: ${props => props.color ? props.color : 'black'};
  background: transparent;
`
const NavButton = styled.button`
  padding: 10px;
  background: transparent; 
  font-size: 16px;
  font-weight: bold;
`
const VideoCaontainer = styled.div`
  width: 100%;
  height: 222px;
  background: red;
`

const SubjectInfoList = styled.ul`

`

type SubjectInfoProps = HTMLAttributes<HTMLLIElement> & {
  align?: "center" | "start" | "end"
}

const SubjectInfo = styled.div<SubjectInfoProps>`
  width: 100%;
  height: 40px;
  padding: 10px 20px;
  border-bottom: 1px solid #BDBDBD;
  display: flex;
  justify-content: ${props => props.align ? props.align : "start"}
`

const DownloadContainer = styled.div`
  padding: 13px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 24px auto;
`

const DownloadButton = styled.button`
  padding: 9px 18px;
  border-radius: 10px;
  background: #3988FF;
  opacity: 0.6;
  color: white;
  font-weight: bold;
`

const detail = () => {
  return (
    <>
          <Header>올라! 학습특강 기출 해설</Header>
          <Tab>
            <TabButton>학습전략</TabButton>
            <TabButton color='#3988FF'>기출해설</TabButton>
          </Tab>
          <NavButton>{"<"} 2022 경찰 공채 2차 시험</NavButton>
          <VideoCaontainer/>
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
  );
}

export default detail;