import React, { useEffect } from 'react';
import styled from 'styled-components';
import { dateForm } from '../../../utils/dateForm';
import { useNavigate } from 'react-router';
import { adminLocation } from '../../../utils/adminLocation';

function AdminPostCard({ item }: any) {
  const navigate = useNavigate();
  console.log(item);

  const newCreatedDate = new Date(item?.createdDate);
  const newDate = dateForm(
    newCreatedDate.getFullYear(),
    newCreatedDate.getMonth(),
    newCreatedDate.getDate(),
  );
  const subjectForm = (item: number) => {
    switch (item) {
      case 1:
        return '경찰';
      case 2:
        return '소방';
      default:
        return '직렬';
    }
  };
  const isItem = () => {
    return item ? 'isItem' : 'noItem';
  };

  const toManage = () => {
    item ? navigate(`manage/${item?.id || item?.commentaryId}`) : '';
  };

  return (
    <ListCard onClick={toManage}>
      <div className={isItem()}>
        <Contents>{item?.id || item?.commentaryId || '번호'}</Contents>
        <Contents>{item?.content || item?.commentaryTitle || '제목'}</Contents>
        {adminLocation() === 2 ? (
          <Contents>{item?.subjectName || '과목'}</Contents>
        ) : (
          ''
        )}
        <Contents>
          {item?.divisionName || subjectForm(item?.subjectId)}
        </Contents>
        <Contents>{item?.instructorName || '담당교수'}</Contents>
        <Contents>{newDate}</Contents>
      </div>
    </ListCard>
  );
}
const Contents = styled.p`
  width: 15%;
  text-align: center;
  padding: 10px;
  font-weight: normal;
  font-size: 16px;
  color: var(--color-button-text);
`;
const ListCard = styled.li`
  div {
    display: flex;
    gap: 10px;
    padding: 10px 20px;
    border-bottom: 1px solid var(--color-admin-background);
    box-sizing: border-box;
    cursor: pointer;
  }
  .noItem {
    cursor: auto;
    p {
      font-weight: bold;
    }
  }
  p:nth-child(1) {
    width: 70px;
  }
  p:nth-child(2) {
    width: 50%;
    text-align: left;
  }
  :hover {
    p {
      font-weight: 600;
    }
  }
`;
export default AdminPostCard;
