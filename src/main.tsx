import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Detail from './pages/mobile/commentary/detail';
import Admin from './pages/admin';
import Strategy from './components/mobile/strategy/Strategy';
import Mobile from './pages/mobile/index';
import Commentary from './components/mobile/commentary/CommentaryIndex';

import AdminLogin from './pages/admin/AdminLogin';
import PreviousCommentary from './pages/admin/PreviousCommentary';
import PreviousManage from './pages/admin/PreviousManage';
import AdminStrategy from './pages/admin/Strategy';
import StrategyManage from './pages/admin/StrategyManage';
// const App = React.lazy(() => import('./App'));
// const Mobile = React.lazy(() => import('./pages/mobile/index'));
// const Detail = React.lazy(() => import('./pages/mobile/commentary/detail'));
// const Admin = React.lazy(() => import('./pages/admin/index'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/mobile',
        element: <Mobile />,
      },
      {
        path: '/mobile/strategy',
        element: <Strategy />,
      },
      {
        path: '/admin/login',
        element: <AdminLogin />,
      },
      {
        path: '/mobile/commentary',
        element: <Commentary />,
      },
      {
        path: '/detail/:index',
        element: <Detail />,
      },
      // {
      //   path: '/mobile/search',
      //   element: <Search />,
      // },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/admin/previous',
        element: <PreviousCommentary />,
      },
      {
        path: '/admin/strategy',
        element: <AdminStrategy />,
      },
      {
        path: '/admin/strategy/manage',
        element: <StrategyManage />,
      },
      {
        path: '/admin/previous/manage',
        element: <PreviousManage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>,
);
