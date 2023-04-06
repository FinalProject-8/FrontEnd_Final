import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';

const App = React.lazy(() => import('./App'));
const Mobile = React.lazy(() => import('./pages/mobile/index'));
const Detail = React.lazy(() => import('./pages/mobile/commentary/detail'));
const Admin = React.lazy(() => import('./pages/admin/index'));
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
        path: '/detail/:index',
        element: <Detail />,
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
