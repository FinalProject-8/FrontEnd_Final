import styled from 'styled-components';

type props = {};
const MobileHeader = (props: props) => {
  return (
    <Header>
      <TitleText>합격특강</TitleText>
    </Header>
  );
};
const Header = styled.div`
  justify-content: flex-start;
  align-items: flex-end;
  text-align: center;
  width: 360px;
  height: 44px;
  display: flex;
  /* border-bottom: 0.5px solid black; */
  padding-left: 20px;
  box-sizing: border-box;
`;
const TitleText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  color: #3d59ab;
`;
export default MobileHeader;
