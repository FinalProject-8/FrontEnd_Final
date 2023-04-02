import styled from 'styled-components';

type props = {};
const MobileHeader = (props: props) => {
  return (
    <Header>
      <TitleText>올라! 경찰 학습특강</TitleText>
    </Header>
  );
};
const Header = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 360px;
  height: 44px;
  display: flex;
  border-bottom: 0.5px solid black;
`;
const TitleText = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: #000000;
`;
export default MobileHeader;
