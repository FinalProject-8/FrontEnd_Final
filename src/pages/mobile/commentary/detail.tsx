import {HTMLAttributes} from 'react';
import { ScrollRestoration, Outlet } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
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
`;

const Tab = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  aline-itmes: center;
  justify-content: center;
`

type TabButtonProps = HTMLAttributes<HTMLButtonElement> & {
  color?: string;
}

const TabButton = styled.button<TabButtonProps>`
  padding: 10px;
  color: ${props => props.color ? props.color : 'black'};

`

const detail = () => {
  return (
    <>
          <Header>올라! 학습특강 기출 해설</Header>
          <Tab>
            <TabButton>학습전략</TabButton>
            <TabButton color='#3988FF'>기출해설</TabButton>
          </Tab>
    </>
  );
}

export default detail;