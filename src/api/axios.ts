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
export const getCommentaryList = async (): Promise<any> => {
  const res = await request('/commentary', {
    method: 'GET',
  });
  return {
    CommentaryListData: res,
  };
};
