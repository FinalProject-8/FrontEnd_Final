import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AdminPostCard from './AdminPostCard';
import AdminCategory from './AdminCategory';
import {
  getStrategyList,
  strategyList,
  getCommentaryList,
  CommentaryList,
} from '../../../api/axios';
import { adminLocation } from '../../../utils/adminLocation';

function AdminPost() {
  const [strategyList, setStrategyList] = useState<strategyList | undefined>();
  const [previousList, setPreviousList] = useState<
    Array<CommentaryList> | undefined
  >();

  useEffect(() => {
    async function fetchData() {
      const strategyData = await getStrategyList();
      const previousData = await getCommentaryList();
      setStrategyList(strategyData?.data);
      setPreviousList(previousData?.CommentaryListData);
    }
    fetchData();
  }, []);
  const propsData = () => {
    switch (adminLocation()) {
      case 1:
        return strategyList?.map((list: any) => (
          <AdminPostCard item={list} key={list.id} />
        ));
      case 2:
        return previousList?.map((list: any) => (
          <AdminPostCard item={list} key={list.id} />
        ));
    }
  };

  return (
    <MainContainer>
      <AdminCategory />
      <PatchList>
        <AdminPostCard />
        {propsData()}
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
