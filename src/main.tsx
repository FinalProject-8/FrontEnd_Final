import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminLogin from './pages/admin/AdminLogin';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />,
);
