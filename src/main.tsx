import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminLogin from './pages/admin/AdminLogin';
import PreviousCommentary from './pages/admin/PreviousCommentary';
import PreviousManage from './pages/admin/PreviousManage';
import Strategy from './pages/admin/Strategy';
import StrategyManage from './pages/admin/StrategyManage';

const App = React.lazy(() => import('./App'));
const Mobile = React.lazy(() => import('./pages/mobile/index'));
const CommentaryDetail = React.lazy(
  () => import('./pages/mobile/commentary/detail'),
);
const Admin = React.lazy(() => import('./pages/admin'));

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
        path: '/commentary/detail',
        element: <CommentaryDetail />,
      },
      {
        path: '/admin/login',
        element: <AdminLogin />,
      },
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
        element: <Strategy />,
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
