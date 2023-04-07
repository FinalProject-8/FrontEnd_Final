import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AdminPostCard from './AdminPostCard';
import AdminCategory from './AdminCategory';

function AdminPost() {
  const use_for = () => {
    const result = [];

    for (let i = 0; i < 9; i++) {
      result.push(<AdminPostCard />);
    }

    return result;
  };

  return (
    <MainContainer>
      <AdminCategory />
      <PatchList>
        <AdminPostCard />
        {use_for()}
      </PatchList>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 50px 40px 50px 20px;
  box-sizing: border-box;
`;
const PatchList = styled.ul`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
`;

export default AdminPost;
