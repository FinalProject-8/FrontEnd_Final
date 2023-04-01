import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminLogin from './pages/admin/AdminLogin';

const App = React.lazy(() => import('./App'));
const Commentary = React.lazy(() => import('./pages/mobile/commentary/index'));
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
        path: '/commentary',
        element: <Commentary />,
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
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
