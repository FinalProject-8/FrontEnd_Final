import { AxiosError } from 'axios';
import { request } from './core/api';

export interface Commentary {
  divisionName: string;
  subjectName: string;
  commentaryId: number;
  instructorName: string;
  commentaryTitle: string;
  createdDate: string;
  fileDownloadCount: number;
  fileName: string;
  fileId: number;
  videoUrl: Array<videoUrl>;
}
export interface CommentaryList {
  data: Array<Commentary>;
}
export interface videoUrl {
  videoName: string;
  videoUrl: string;
}

export interface strategyList {
  map: any;
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
    data: res.data,
  };
};
export const getCommentaryImg = async (id: number): Promise<any> => {
  const res = await request(`/image/${id}`, {
    method: 'GET',
  });
  return {
    img: res.data,
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

export const getStrategyDetail = async (postId: number): Promise<any> => {
  const res = await request(`/strategy/detail`, {
    method: 'GET',
    data: {
      postId: postId,
    },
  });
  return {
    data: res.data,
  };
};

export const getCommentarySearchDate = async (
  createdDate: string,
): Promise<any> => {
  const res = await request('/commentary/search/createdDate', {
    method: 'GET',
    data: {
      createdDate: createdDate,
    },
  });
  return {
    data: res.data,
  };
};

export const getCommentarySearchSubject = async (
  subjectName: string,
): Promise<any> => {
  const res = await request('/commentary/search/subjectName', {
    method: 'GET',
    data: {
      subjectName: subjectName,
    },
  });
  return {
    data: res.data,
  };
};

export const getDownloadFile = async (fileId: number): Promise<any> => {
  const res = await request(`/download/${fileId}`, {
    method: 'GET',
  });
  return {
    data: res.data,
  };
};
