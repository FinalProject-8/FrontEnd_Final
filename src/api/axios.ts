import { AxiosError } from 'axios';
import { request } from './core/api';

export interface CommentaryList {
  class: string;
  subject: string;
  instructorImg: string;
  instructorName: string;
  lectureName: string;
  commentaryFile: string;
  downloadCount: number;
  overallVideo: string;
  commentaryVideo1: string;
  commentaryVideo2: string;
}

export interface DataSet {
  code: number;
  message: string;
  data: CommentaryList;
}
export interface strategyList {
  data: Array<strategy>;
}
interface strategy {
  strategyId: number;
  subjectId: number;
  lectureName: string;
  instructorName: string;
  content: string;
  image: string;
  createdDate: string;
}
export const getCommentaryList = async (): Promise<any> => {
  const res = await request('/commentary', {
    method: 'GET',
  });
  return {
    CommentaryListData: res.data,
  };
};

export const getStrategyList = async (): Promise<any> => {
  const res = await request('/strategy', {
    method: 'GET',
  });
  return {
    data: res.data,
  };
};

export const getStrategy = async (strategyId: number): Promise<any> => {
  const res = await request(`/strategy/${strategyId}`, {
    method: 'GET',
  });
  return {
    data: res.data,
  };
};
